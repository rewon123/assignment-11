import React from 'react';
import partnerImg1 from '../../../creative-agency/images/logos/google.png'
import partnerImg2 from '../../../creative-agency/images/logos/airbnb.png'
import partnerImg3 from '../../../creative-agency/images/logos/uber.png'
import partnerImg4 from '../../../creative-agency/images/logos/netflix.png'
import partnerImg5 from '../../../creative-agency/images/logos/slack.png'


const Partners = () => {
    return (
        <div className="container d-flex justify-content-center" style={{ marginTop: '70vh' }}>
            <div>
                <img style={{ width: "140px", margin: "0 40px" }} src={partnerImg1} alt="" />
                <img style={{ width: "140px", margin: "0 40px" }} src={partnerImg2} alt="" />
                <img style={{ width: "140px", margin: "0 40px" }} src={partnerImg3} alt="" />
                <img style={{ width: "140px", margin: "0 40px" }} src={partnerImg4} alt="" />
                <img style={{ width: "140px", margin: "0 40px" }} src={partnerImg5} alt="" />
            </div>
        </div>
    );
};

export default Partners;