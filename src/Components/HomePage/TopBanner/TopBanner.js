import React from 'react';
import sideImage from '../../../creative-agency/images/logos/Frame.png'

const TopBanner = () => {
    return (
        <div className="container" >
            <section className="col-md-6 " style={{ padding: '70px',float: 'left'}}>
                <h1 style={{ color: '#111430' }}>
                    Let’s Grow Your <br />
                    Brand To The <br />
                    Next Level
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                <button className="nav-link btn btn-dark text-white" style={{ width: '134px' }}>hire us</button>
            </section>
            <section className="col-md-6" style={{float: 'left'}}>
                <img src={sideImage} className="img-fluid" alt="" />
            </section>
        </div >
    );
};

export default TopBanner;