import React from 'react';
import image from '../../Images/image 3.png'
import file from '../../file/Muzammel Haque Khan Tushar (1).pdf'

const Header = () => {
    return (
        <div>
            
            <div style={{margin:'50px',}} className="row">
                
                <div style={{marginLeft:'50px'}} className="col-md-6">
                    <h1 style={{color:'#FF4B36', fontSize:'50px',  marginTop:'20px'}}>Hello! Tushar Khan here, <br/> creative web developer <br/> based in <br/> Sub-Continent.</h1>
                    <br/>
                    <h6 style={{color:'#FF4B36', fontSize:'15px' }}>Searching for a job opportunity in an IT Company as a programmer. I am also interested in getting a full     stack developer job position. I would like to state my computer proficiency and complete dedication for work.</h6>
                    <button style={{padding:'7px', backgroundColor:'#FF3F8B', border:'none', borderRadius:'3px',}}>
                    <a style={{color:'black', fontWeight:'bold', textDecoration:'none'}} href={file} target="_blank" download>Download CV</a>
                    </button>
                </div>
                <div className="col-md-5">
                    <img style={{width:'80%', marginTop:'10px'}} src={image} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Header;