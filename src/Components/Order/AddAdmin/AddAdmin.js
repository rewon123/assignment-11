import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import OrderHeader from '../OrderHeader/OrderHeader';

const AddAdmin = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        // console.log('form submitted', data)

        fetch('https://whymanwhy132.herokuapp.com/addAddmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('your review was successfully placed')
                }
            })
    };
    return (
        <div style={{ backgroundColor: '#E5E5E5', height: '100vh', height: '100%' }}>
            <OrderHeader></OrderHeader>
            <div className="d-flex">
                <Sidebar />
                <main className='container mt-2'>
                    <form className="ship-form  d-flex " onSubmit={handleSubmit(onSubmit)}>

                        <input name="email" className='form-control' style={{ width: '550px', height: '60px' }} ref={register({ required: true })} placeholder='Email' /> <br />

                        <button type="submit" className='btn btn-success ml-3' > Submit</button>
                    </form>
                </main>
            </div>
        </div>
    );
};

export default AddAdmin;