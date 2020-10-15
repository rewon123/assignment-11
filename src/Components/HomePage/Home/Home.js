import React from 'react';
import Header from '../Header/Header';
import TopBanner from '../TopBanner/TopBanner';
// import bg from '../../../creative-agency/images/bg.png'
import Partners from '../Partners/Partners';
import Services from '../Services/Services';
import FeedBack from '../FeedBack/FeedBack';
import Footer from '../Footer/Footer';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div >
            {/* <img className="bg" src={bg} alt="" /> */}
            <Header></Header>
            <TopBanner></TopBanner>
            <Partners></Partners>
            <Services></Services>
            <Slider></Slider>
            <FeedBack></FeedBack>
            <Footer></Footer>
        </div>
    );
};

export default Home;