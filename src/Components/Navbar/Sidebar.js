import React from 'react';
import { Button, FormControl, Form, Nav  } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div>
              <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand style={{color:'#FF4B36' , marginLeft:'40px'}} href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                    <Nav.Link style={{color:'#FF4B36',fontWeight:'bold', marginLeft:'700px'}} href="/home">Home</Nav.Link>
                    <Nav.Link style={{color:'#FF4B36',fontWeight:'bold', marginLeft:'50px'}} href="#blog">Blog</Nav.Link>
                    
                    </Nav>
                    <Nav>
                    <Nav.Link style={{color:'#FF4B36',fontWeight:'bold', marginLeft:'50px'}} href="#works">Works</Nav.Link>
                    <Nav.Link style={{color:'#FF4B36',fontWeight:'bold', marginLeft:'50px'}} href="/contact">Contact</Nav.Link>
                    <Nav.Link style={{color:'#FF4B36',fontWeight:'bold', width:'80px', padding:'10px', borderRadius:'5px', marginLeft:'50px', border:'1px solid tomato'}} href="/resume">resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </div>
    );
};

export default Sidebar;