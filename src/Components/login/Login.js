import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './login.css'
import logo from '../../creative-agency/images/logos/logo.png'

const Login = () => {
    const { setLoggedInUser } = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email, photoURL } = result.user;
            const signedInUser = { name: displayName, email, img: photoURL };
            setLoggedInUser(signedInUser);
            storeAuthToken();
            // ...
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                // console.log(idToken);
                sessionStorage.setItem('token', idToken)
                history.replace(from);

            }).catch(function (error) {
                // Handle error
            });

    }
    return (
        <div className='text-center' >
            <img style={{ width: "140px" }} src={logo} alt="" />
            <div className="d-flex justify-content-center">
                <div className='style d-flex align-items-center justify-content-center'>
                    <div onClick={handleGoogleSignIn} className='text-center' style={{ cursor: "pointer" }} >
                        <h1 >Login with</h1>
                        <div id="google">
                            <img src='https://yt3.ggpht.com/a/AATXAJysEynEghsvVEHdcjVYfdaDfrimWMiTvtuEVKYTGJM=s900-c-k-c0xffffffff-no-rj-mo' alt="" style={{ height: '25px', width: '30px' }} />Login with google
                         </div>
                        <p>dont have a account? <span> Create an account</span> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;