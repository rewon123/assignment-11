import React, { useEffect, useState } from 'react';
import service1 from '../../../creative-agency/images/icons/service1.png'

const FeedBack = () => {
    const [ratingsData, setRatingsData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8080/feedback`)
            .then(response => response.json())
            .then(feedback => setRatingsData(feedback))
    }, [])
    return (
        <div className="container" style={{ marginTop: '10%' }}>
            <h1 className="text-center">Clients  <span style={{ color: '#7AB259' }}>Feedback</span> </h1>
            <div className="row row-cols-1 row-cols-md-2">
                {
                    ratingsData.map(ratings => <div key={ratings._id} style={{margin:'15px 0px'}} className="col-md-4">
                        <div className="card ">
                            <div className="card-body p-4 d-flex">
                                <img src={ratings.data.img} style={{ width: '75px' }} className="card-img-top" alt="..." />
                <h5 className="card-title">{ratings.data.clientName} <br/> {ratings.data.workingPosition}</h5>
                            </div>
                            <p className="card-text p-3"> {ratings.data.details} </p>

                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default FeedBack;