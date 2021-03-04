import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const index = () => {
    return (
        <footer className="text-center text-white" style={{ backgroundColor: '#f1f1f1' }}>
            {/* Grid container */}
            <div className="container pt-4">
                {/* Section: Social media */}
                <section className="mb-4">
                    {/* Facebook */}
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-facebook-f" /></a>
                    {/* Twitter */}
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-twitter" /></a>
                    {/* Google */}
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-google" /></a>
                    {/* Instagram */}
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-instagram" /></a>
                    {/* Linkedin */}
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-linkedin" /></a>
                    {/* Github */}
                    <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-github" /></a>
                </section>
                {/* Section: Social media */}
            </div>
            {/* Grid container */}
            {/* Copyright */}
            <div className="text-center text-dark p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2020 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">Thebox2021</a>
            </div>
            {/* Copyright */}
        </footer>
    );
};

export default index;
