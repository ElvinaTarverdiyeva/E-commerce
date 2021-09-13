import React, { Component } from 'react';
import logo from '../media/logo.png';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';


     

const Header = () => {
    const {totalItems}=useCart();
    return (
        <header >
            <nav className="navbar navbar-expand-lg navbar-light ec-nav">
                <div className="container-fluid">
                    <img className="navbar-brand" src={logo} width='130' />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto ms-5 mb-2 mb-lg-0">
                            <li class="nav-item me-auto ms-3 mb-2 mb-lg-0 ">
                                <Link to="/" class="nav-link active" >Home</Link>
                            </li>
                            <li class="nav-item me-auto ms-3 mb-2 mb-lg-0">
                                <Link to="/Shop" class="nav-link active" >Shop</Link>
                            </li>
                            <li class="nav-item me-auto ms-3 mb-2 mb-lg-0 ">
                                <Link to="/Blog" class="nav-link active" >Blog</Link>
                            </li>
                            <li class="nav-item me-auto ms-3 mb-2 mb-lg-0 ">
                                <Link to="/AboutUs" class="nav-link active" >About Us</Link>
                            </li>
                            <li class="nav-item me-auto ms-3 mb-2 mb-lg-0 ">
                                <Link to="/Contact" class="nav-link active" >Contact Us</Link>
                            </li>
                        </ul>
                        <form className="d-flex align-items-center">
                            <i class="fas fa-search "></i>
                            <ul className="navbar-nav me-3 ms-3 mb-2 mb-lg-0 ">
                                <p>My Account</p>
                            </ul>
                            <Link to="/AddToCart" className="btn btn-outline-success" id="cardbtn" type="submit"><i class="fas fa-shopping-cart me-1"></i>{totalItems} Items</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header