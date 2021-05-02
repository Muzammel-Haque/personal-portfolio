import React from 'react';
import { Button, FormControl, Form, Nav  } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

const Sidebar = () => {
    return (
        <div>
              <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand style={{color:'#FF4B36' , marginLeft:'40px'}} href="#home">Tushar</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                    <Nav.Link style={{color:'#FF4B36', marginLeft:'870px'}} href="/home">Home</Nav.Link>
                    <Nav.Link style={{color:'#FF4B36', marginLeft:'20px'}} href="#blog">Blog</Nav.Link>
                    
                    </Nav>
                    <Nav>
                    <Nav.Link style={{color:'#FF4B36', marginLeft:'20px'}} href="#works">Works</Nav.Link>
                    <Nav.Link eventKey={2} style={{color:'#FF4B36',width:'80px', textAlign:'center', marginLeft:'20px', border:'1px solid tomato', borderRadius:'5px'}} href="/resume">
                        Resume
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </div>
    );
};

export default Sidebar;