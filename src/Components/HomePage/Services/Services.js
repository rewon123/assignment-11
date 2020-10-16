import React, { useEffect, useState } from 'react';
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
            {
                allServices.length ? <div style={{ marginTop: '10%' }} className="row row-cols-1 row-cols-md-3">
                    {
                        allServices.map(data => <Link key={data._id} to={'/Services/' + data._id} style={{ textDecoration: 'none', color: '#111430' }}><div className="col mb-4">
                            <div id="card">
                                <div className="card-body text-center">
                                    <img src={`data:image/png;base64,${data.image.img}`} style={{ width: '75px' }} className="card-img-top" alt="..." />
                                    <h5 className="card-title">{data.name}</h5>
                                    <p className="card-text">{data.details}</p>
                                </div>
                            </div>
                        </div></Link>)
                    }
                </div>
                    :
                    <img src="https://assets.website-files.com/5c7fdbdd4e3feeee8dd96dd2/5ce46f8ffd710a2c22c15e48_cust_ami.gif" alt="" />
            }
        </div>
    );
};

export default Services;