import React, { useEffect, useState } from 'react';

const FeedBack = () => {
    const [ratingsData, setRatingsData] = useState([])
    useEffect(() => {
        fetch(`https://whymanwhy132.herokuapp.com/feedback`)
            .then(response => response.json())
            .then(feedback => setRatingsData(feedback))
    }, [])
    return (
        <div className="container" style={{ marginTop: '10%' }}>
            <h1 className="text-center">Clients  <span style={{ color: '#7AB259' }}>Feedback</span> </h1>
            {
                ratingsData.length ? <div className="row row-cols-1 row-cols-md-2">
                    {
                        ratingsData.map(ratings => <div key={ratings._id} style={{ margin: '15px 0px' }} className="col-md-4">
                            <div className="card ">
                                <div className="card-body p-4 d-flex">
                                    <img src={ratings.img ? ratings.img : ratings.data.img} style={{ width: '75px' }} className="card-img-top" alt="" />
                                    <h5 className="card-title">{ratings.data.clientName} <br /> {ratings.data.workingPosition}</h5>
                                </div>
                                <p className="card-text p-3"> {ratings.data.details} </p>

                            </div>
                        </div>)
                    }
                </div>
                    :
                    <img src="https://assets.website-files.com/5c7fdbdd4e3feeee8dd96dd2/5ce46f8ffd710a2c22c15e48_cust_ami.gif" alt="" />
            }

        </div>
    );
};

export default FeedBack;