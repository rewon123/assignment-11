import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../creative-agency/images/logos/logo.png'
import './Header.css'
import { UserContext } from '../../../App';


const Header = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <img src={logo} style={{ width: '150px' }} alt="" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <p className="nav-link" >Home <span className="sr-only">(current)</span></p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link" >Features</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">Pricing</p>
                        </li>
                        <li className="nav-item">
                            <Link to="/login">
                                {
                                    loggedInUser.email ? <button className="nav-link btn btn-dark text-white" style={{ width: '134px' }} >{loggedInUser.name} </button>
                                        :
                                        <button className="nav-link btn btn-dark text-white" style={{ width: '134px' }} > log in </button>
                                }
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;