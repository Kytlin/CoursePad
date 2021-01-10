import React, { useState } from 'react'
import { Router, Link } from "react-router-dom";
import './navbar.css'

function navbar() {
    const [clicked, setClicked] = useState(false);

    return (
        <div className={clicked ? "topnav responsive" : "topnav"} id="myTopnav">
            <a href="#home" className="active"><b>PC</b>ify</a>
            <div className="dropdown">
                <button className="dropbtn">
                    PC Components 
                    <i className="fa fa-caret-down" />
                </button>
                <div className="dropdown-content">
                    <Link to="/cpu"><a>CPU</a></Link>
                    <Link to="/motherboard"><a>Motherboard</a></Link>
                    <Link to="/videocard"><a>Video Card</a></Link>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">
                    Storage Drives
                    <i className="fa fa-caret-down" />
                </button>
                <div className="dropdown-content">
                    <Link to="/ssd"><a>Solid State Drive (SSD)</a></Link>
                    <Link to="/hard-drive"><a>Hard Drive</a></Link>
                </div>
            </div>
            <a href="#about">Order</a>
            <a className="icon" onClick={() => setClicked(!clicked)}>
                <i className="fa fa-bars" />
            </a>
        </div>
    )
}

export default navbar
