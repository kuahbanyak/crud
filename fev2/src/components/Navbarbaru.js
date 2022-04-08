import React, {useEffect , useState} from 'react';
import logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';
import "./Navbarbaru.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from "jwt-decode";


function Navbarbaru() {
    const navigate = useNavigate();
 
    const Logout = async () => {
        try {
            await axios.delete('http://localhost:5000/logout');
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }
    

    return (
        <>
            <nav className="navbar">
                <div className='nav-header'>
                    <div className='nav-main'>
                        <div className='nav-logo'>
                            <i className='logo1' />
                            <a href='/' target="_blank" className='scan'>Silhkan Masuk</a>
                        </div>
                        <div className='nav-menu'>
                            <a href='/about' target="_blank" className='about'>Mitra Kerja </a>
                            <a href="/mitra" target="_blank" className='mitra'>Mitra Prdoksi</a>
                            <a href="/promo" target="_blank" className='promo'>Promo Belanja</a>
                            <a href="/utcare" target="_blank" className='utcare'>UT Care</a>
                        </div>
                    </div>
                </div>
                <div className="navbar-container">
                    <a href='https://www.unitedtractors.com/' target="_blank" className="navbar-logo" rel="noreferrer">
                        <img src={logo} alt="logo" />
                    </a>
                    <div className="menu-log">
                        <a type='button' className="btn-login" onClick={Logout} >Logout</a>
                        <a type='button' className="btn-daftar" href="/register">DAFTAR</a> 
                    </div>
        </div>
            </nav>
        </>
    )
}

export default Navbarbaru