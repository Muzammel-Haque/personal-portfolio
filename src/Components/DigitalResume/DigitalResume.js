import React from 'react';
import profile from '../../Images/tushar2.jpg'
import './DigitalResume.css'
import phone from '../../icon/phone-call.png'
import mail from '../../icon/gmail.png'
import site from '../../icon/www-click.png'
import github from '../../icon/github.png';
import linkedin from '../../icon/linkedin.png';
import file from '../../file/Muzammel Haque Khan Tushar (1).pdf'
import Sidebar from '../Navbar/Sidebar';

const DigitalResume = () => {
    return (
        <div>
            <Sidebar></Sidebar>
            <div style={{marginTop:'10px'}} className="row">
                <div style={{marginLeft:'60px'}} className="about col-md-3">
                    <div id="self" className="first-section">
                    <img style={{width:"100%"}} src={profile} alt=""/>
                    <div className="descriptions">
                        <h3>Muzammel Haque</h3>
                        <h5>Web Developer</h5>
                        <br/>
                        <div className="icon">
                            <img src={phone} alt=""/>
                            <h6> Kishoreganj, Bangladesh</h6>
                        </div>
                        <div className="icon">
                            <img src={phone} alt=""/>
                            <h6>01940258802</h6>
                        </div>
                        <div className="icon">
                            <img src={mail} alt=""/>
                            <h6>mhktushar018@gmail.com</h6>
                        </div>
                    </div>

                    <div className="skills">
                        <h3 style={{marginLeft:'20px', marginTop:'20px'}}>Skills</h3>
                        <div className="comfortable">
                            <h5>Comfortable:</h5>
                            <h6>HTML, CSS, Bootstrap, JavaScript, ES6, React, React Router, Node.js, Express.js, MongoDB, Material-UI, React Bootstrap.</h6>
                            <h5 style={{marginTop:'20px'}}>Familiar:</h5>
                            <h6>TypeScript, React Native, Next.js, Redux.</h6>
                            <h5 style={{marginTop:'20px'}}>Tools</h5>
                            <h6>Git, VS Code, Heroku, Netlify, Firebase.</h6>
                        </div>
                    </div>
                    <div className="education">
                        <h3 style={{marginLeft:'20px', marginTop:'20px'}}>Education</h3>
                        <h6 style={{marginLeft:'25px', fontSize:'17px'}}> Bachelor of Business Administration (BBA),</h6>
                        <h6 style={{marginLeft:'25px', fontSize:'15px'}}> Bangladesh Open University</h6>
                        <h6 style={{marginLeft:'25px', fontSize:'13px', marginBottom:'10px'}}> 11/2021 - Present</h6><br/>

                    </div>
                    </div>
                </div>
                <div className="second-section col-md-8">
                   <div className="upperLevel">
                        <div className="btn">
                                <button style={{color:'black', border:'none', padding:'10px', backgroundColor:'#00CCFF', borderRadius:'3px', fontWeight:'bold', textDecoration:'none'}} ><a style={{color:'black', fontWeight:'bold', textDecoration:'none'}} href={file} target="_blank" download>Download Resume</a></button>  
                                <button style={{marginLeft:'30px', color:'black', border:'none', fontWeight:'bold', padding:'10px', backgroundColor:'#00CCFF', borderRadius:'3px',  textDecoration:'none'}} > <a style={{textDecoration:'none', color:'black'}} href="#self"> About me </a></button>
                        </div>
                        <div className="connect">
                            <div className="profile-link">
                                <a href="https://www.linkedin.com/in/mhk-tushar-08a6521b5/">https://www.linkedin.com/in/mhk-tushar-08a6521b5/</a>
                                <br/>
                                <a href="https://github.com/Muzammel-Haque">https://github.com/Muzammel-Haque</a>
                            </div>
                            <div className="link-img">
                                <img style={{width:'20px'}} src={linkedin} alt=""/>
                                <br/>
                                <img style={{width:'20px'}} src={github} alt=""/>
                            </div>
                        </div>
                   </div>
                    <div className="projects">
                        <h2 style={{color:'#00ccff', fontWeight:'bold', marginLeft:'10px', marginTop:'9px'}}>Some Of My Projects:</h2>
                        <div className="Single-projects">
                            <div className="Solving">
                                <h4 style={{marginLeft:'15px'}}>Solving Service</h4>
                                <div className="img">
                                    <div style={{marginLeft:'25px'}} className="technology">
                                        <h5>Technology:</h5>
                                        <h6  style={{marginLeft:'35px'}}>HTML, CSS, Bootstrap, JavaScript, ES6, React, React Router, Node.js, Express.js, MongoDB, Material-UI, React Bootstrap.</h6>
                                    </div>
                                    <div className="details">
                                        <h5 style={{marginLeft:'25px'}}>Description:</h5>
                                        <ul style={{marginLeft:'35px'}}>
                                            <li>This is a mobile servicing project. In this project users get lots of services. Such as: android repairing, iPhone repairing, laptop repairing and desktop repairing.</li>
                                            <li>Admin can add new service and new admin.</li>
                                            <li>Admin can manage all the orders. Admin can also change the service state</li>
                                            <li>Authentication system is also used in this  project. </li>
                                        </ul>
                                    </div>
                                    <div className="link">
                                        <a href="https://tushar-enterprise.web.app/"><img src={site} alt=""/></a>
                                        <a href="https://github.com/Muzammel-Haque/RESUME-11"><img src={github} alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="Single-projects">
                            <div className="Solving">
                                <h4 style={{marginLeft:'15px'}}>Sports Bazar</h4>
                                <div className="img">
                                    <div style={{marginLeft:'25px'}} className="technology">
                                        <h5>Technology:</h5>
                                        <h6  style={{marginLeft:'35px'}}>HTML, CSS, Bootstrap, JavaScript, ES6, React, React Router, Node.js, Express.js, MongoDB, Material-UI, React Bootstrap.</h6>
                                    </div>
                                    <div className="details">
                                        <h5 style={{marginLeft:'25px'}}>Description:</h5>
                                        <ul style={{marginLeft:'35px'}}>
                                            <li>This is a e-commerce site.</li>
                                            <li>In this site users can buy all kinds of sports equipment.</li>
                                            <li>And you Know authentication system is also used in this  project.  </li>
                                        </ul>
                                    </div>
                                    <div className="link">
                                        <a href="https://city-ride-dc4db.web.app/"><img src={site} alt=""/></a>
                                        <a href="https://github.com/Muzammel-Haque/assi-c-10"><img src={github} alt=""/></a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="Single-projects">
                            <div className="Solving">
                                <h4 style={{marginLeft:'15px'}}>City Ride</h4>
                                <div className="img">
                                    <div style={{marginLeft:'25px'}} className="technology">
                                        <h5>Technology:</h5>
                                        <h6  style={{marginLeft:'35px'}}>HTML, CSS, Bootstrap, JavaScript, ES6, React, React Router, Node.js, Express.js, MongoDB, Material-UI, React Bootstrap.</h6>
                                    </div>
                                    <div className="details">
                                        <h5 style={{marginLeft:'25px'}}>Description:</h5>
                                        <ul style={{marginLeft:'35px'}}>
                                            <li>This is a ride sharing app. </li>
                                            <li>In this app users can find some transport system to move one place to another place.</li>
                                            <li>User authentication system is also used in this site. </li>
                                        </ul>
                                    </div>
                                    <div className="link">
                                        <a href="https://amar-projects.web.app"><img src={site} alt=""/></a>
                                        <a href="https://github.com/Muzammel-Haque/assignment-9"><img src={github} alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalResume;