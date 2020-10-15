import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import OrderHeader from '../OrderHeader/OrderHeader';

const AddService = () => {
    const [file, setFile] = useState(null);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        const formData = new FormData();
        const image = JSON.stringify(data.image)
        formData.append('file', file);
        formData.append('image', image);
        formData.append('name', data.name);
        formData.append('details', data.details);
        fetch('http://localhost:8080/addServices', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {

                if (result) {
                    alert('Data has been send')

                }

                // console.log(result);
            })
            .catch(err => console.log(err))
        // console.log(formData);
        // data.preventDefault();

    }

    const fileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    return (
        <div style={{ backgroundColor: '#E5E5E5', height: '100vh', height: '100%' }}>
            <OrderHeader />
            <div className="d-flex">
                <Sidebar />
                <main className="container container-fluid" style={{ width: '100%', height: '50%', backgroundColor: '#FFFFFF', borderRadius: '20px', margin: "50px" }}>
                    {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
                    <form onSubmit={handleSubmit(onSubmit)} style={{ margin: "20px" }} >
                        <div className="d-flex">

                            <div style={{ width: "50%" }} className="col-md-8">
                                {/* register your input into the hook by invoking the "register" function */}
                                <input name="name" placeholder='service title' ref={register} style={{ width: "100%" }} className="form-control p-4" />

                                <br />
                                {/* include validation with required or other standard HTML validation rules */}
                                <textarea name="details" placeholder="Description" ref={register({ required: true })} style={{ width: "100%" }} className="form-control p-4" /> <br />
                                {/* errors will return when field validation fails  */}
                                {errors.exampleRequired && <span>This field is required</span>}


                            </div>
                            <div style={{ width: "50%" }} >
                                <input name="image" type="file" onChange={fileChange} ref={register({ required: true })} style={{ width: "50%" }} className="p-4" />
                            </div>
                        </div>
                        <input type="submit" className='btn' value="Add" style={{ backgroundColor: "#111430", color: "white", padding: "1% 5%", borderRadius: "5px" }} />
                    </form>
                </main>
            </div >
        </div>
    );
};

export default AddService;