import React, { useEffect, useState } from 'react';
import service1 from '../../../creative-agency/images/icons/service1.png'
import './Services.css'
import { Link } from 'react-router-dom';

const Services = () => {
    const [allServices, setAllServices] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8080/AllServices`)
            .then(res => res.json())
            .then(data => {
                setAllServices(data)
                // console.log(data);
            })
    }, [])


  
    return (
        <div className="container" style={{ marginTop: '10%' }}>
            <h1 className="text-center">Provide awesome <span style={{ color: '#7AB259' }}>services</span> </h1>
            <div style={{ marginTop: '10%' }} className="row row-cols-1 row-cols-md-3">
                {
                    allServices.map(data => <Link key={data._id} to={'/Services/' + data._id} style={{ textDecoration: 'none', color: '#111430' }}><div className="col mb-4">
                        <div id="card">
                            <div className="card-body text-center">
                                <img src={data.img} style={{ width: "75px" }} alt="..." />
                                <h5 className="card-title">{data.name}</h5>
                                <p className="card-text">{data.shortDetail}</p>
                            </div>
                        </div>
                    </div></Link>)
                }
            </div>
        </div>
    );
};

export default Services;