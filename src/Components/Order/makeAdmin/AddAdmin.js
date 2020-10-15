import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import OrderHeader from '../OrderHeader/OrderHeader';

const Addadmin = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        // console.log('form submitted', data)

        fetch('http://localhost:8080/addAdmin', {
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
            <OrderHeader />
            <div className="d-flex">
                <Sidebar />
                <main className="container container-fluid" style={{ width: '100%', height: '50%', backgroundColor: '#FFFFFF', borderRadius: '20px', margin: "50px" }}>
                    {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
                    <form onSubmit={handleSubmit(onSubmit)} style={{ margin: "20px" }} >
                        <div className="d-flex">

                            <div style={{ width: "50%" }} className="col-md-8">
                                {/* register your input into the hook by invoking the "register" function */}
                                <input name="email" placeholder="admin's email address" ref={register} style={{ width: "100%" }} className="form-control p-4" />
                            </div>
                            <input type="submit" className='btn btn-success' value="submit" />
                        </div>

                    </form>
                </main>
            </div >
        </div>
    );
};

export default Addadmin