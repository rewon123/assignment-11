import React, { useContext, useEffect, useState } from 'react';
import OrderHeader from '../Order/OrderHeader/OrderHeader';
import Sidebar from '../Order/Sidebar/Sidebar';
import { UserContext } from '../../App';

const ServiceLists = () => {
    const { loggedInUser } = useContext(UserContext);
    const [orderedServices, setOrderedServices] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8080/spesificOrder?email=${loggedInUser.email}`)
            .then(response => response.json())
            .then(data => setOrderedServices(data))
    }, [])
    return (
        <div style={{ backgroundColor: '#E5E5E5', height: '100vh', height: '100%' }}>
            <OrderHeader></OrderHeader>
            <div className="d-flex">
                <Sidebar />
                <div className="row row-cols-1 row-cols-md-2 m-3">
                    {
                        orderedServices.map(service => <div key={service._id} className="col-md-6" >
                            <div className="card" style={{ borderRadius: '20px', height: '254px', color: '#000000, 70%' }}>
                                <div className="card-body p-3">
                                    <img src={`data:image/png;base64,${service.img.img}`} style={{ width: '75px' }} className="card-img-top" alt="..." />
                                    <h5 className="card-title">{service.service}Web & Mobile design</h5>
                                </div>
                                <p className="card-text p-2">{service.description}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceLists;