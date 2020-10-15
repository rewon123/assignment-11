import React, { useContext } from 'react';
import logo from '../../../creative-agency/images/logos/logo.png'
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';

const OrderHeader = () => {
    const { loggedInUser } = useContext(UserContext);
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-white">

            <Link to='/'> <img src={logo} style={{ width: '150px' }} alt="sadad" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <p className="nav-link" >{loggedInUser.name} <span className="sr-only">(current)</span></p>
                    </li>
                </ul>
            </div>


        </div>
    );
};

export default OrderHeader;