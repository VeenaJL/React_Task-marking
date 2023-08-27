import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Aboutus() {
    const navigate = useNavigate();
    function goToHomePage(){
        navigate('/')
    }
    return <div>
        <Navbar></Navbar>
        <div className="container">
            <div className="Row">
                <div className="col-md-6 offset-md-3">
                    <h1>About Us</h1>
                    <p>
                        Its is a very usefull site which gives alert for your task.
                    </p>
                    <p>
                       The Task can be removed once it completed.
                    </p>
                    <Link to="/" className="btn btn-info">Go Home</Link>&nbsp;&nbsp;
                </div>
            </div>
        </div>
    </div>;
}

export default Aboutus;