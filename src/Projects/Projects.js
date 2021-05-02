import React from 'react';
import solving from '../Images/service.PNG'
import './Project.css'
import github from '../icon/github.png';
import internet from '../icon/www-click.png';
import cityRide from '../Images/city1.PNG'
import sports from '../Images/Capture222.PNG'

const Projects = () => {
    return (
        <div>
            <h2 style={{color:'white', marginLeft:'110px', marginBottom:'40px', marginTop:'80px'}}>Some Of My Projects</h2>
            <div className="row">
                <div className="col-md-6 offset-md-1">
                    <img style={{width:'100%'}} src={solving} alt=""/>
                </div>
                <div className="col-md-5">
                    <div style={{marginTop:'15px', marginRight:'50px'}} className="works  description">
                        <h2>Solving Service</h2>
                        <h6>This is a mobile servicing project. In this
                        project users get lots of services. Such
                        as: android repairing, iPhone repairing,
                        laptop repairing and desktop repairing.</h6>
                        <div className="language">
                             <button>HTML</button> <button>CSS</button>
                              <button>JavaScript</button>  <button>React</button> <button>Express.js</button> <button>Node.js</button> <button>React Router</button> <button>MongoDB</button>
                        </div>
                        <div>
                            <a href="https://github.com/Muzammel-Haque/RESUME-11" target="_blank"><img style={{width:'30px', margin:'20px'}} src={github} alt=""/></a>
                            <a href="https://tushar-enterprise.web.app/" target="_blank"><img style={{width:'30px'}} src={internet} alt=""/></a>
                            
                        </div>
                    </div>
                </div>
            </div>


            <div className="row" style={{marginTop:'40px', marginBottom:'40px'}}>
                <div className="col-md-6 offset-md-1">
                    <img style={{width:'100%', height:'331px'}} src={sports} alt=""/>
                </div>
                <div className="col-md-5">
                    <div style={{marginTop:'15px', marginRight:'50px'}} className="works  description">
                        <h3>Solving Service</h3>
                        <h6>This is a mobile servicing project. In this
                        project users get lots of services. Such
                        as: android repairing, iPhone repairing,
                        laptop repairing and desktop repairing.</h6>
                        <div className="language">
                             <button>HTML</button> <button>CSS</button>
                              <button>JavaScript</button>  <button>React</button> <button>Express.js</button> <button>Node.js</button> <button>React Router</button> <button>MongoDB</button>
                        </div>
                        <div>
                            <a href="https://github.com/Muzammel-Haque/assi-c-10" target="_blank"><img style={{width:'30px', margin:'20px'}} src={github} alt=""/></a>
                            <a href="https://city-ride-dc4db.web.app/" target="_blank"><img style={{width:'30px'}} src={internet} alt=""/></a>
                            
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-md-6 offset-md-1">
                    <img style={{width:'100%', height:'331px'}} src={cityRide} alt=""/>
                </div>
                <div className="col-md-5">
                    <div style={{marginTop:'15px', marginRight:'50px'}} className="works  description">
                        <h2>Solving Service</h2>
                        <h6>This is a mobile servicing project. In this
                        project users get lots of services. Such
                        as: android repairing, iPhone repairing,
                        laptop repairing and desktop repairing.</h6>
                        <div className="language">
                             <button>HTML</button> <button>CSS</button>
                              <button>JavaScript</button>  <button>React</button> <button>Express.js</button> <button>Node.js</button> <button>React Router</button> <button>MongoDB</button>
                        </div>
                        <div>
                            <a href="https://github.com/Muzammel-Haque/RESUME-11" target="_blank"><img style={{width:'30px', margin:'20px'}} src={github} alt=""/></a>
                            <a href="https://tushar-enterprise.web.app/" target="_blank"></a>
                            <img style={{width:'30px'}} src={internet} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;