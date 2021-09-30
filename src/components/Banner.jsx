import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {

    return (
        <div>
            <div className="empty App">
                <h1>Alexandre Santana</h1>
            </div>
            <div className="hero">
                <Link to="/projects" className="links">
                    <img className="linkPic" src={'/images/projects.jpg'} alt="Projects" />
                    <h1 className="linkText ">Projects</h1>
                </Link>
                <Link to="/me" className="links">
                    <img className="linkPic" src={'/images/me.jpg'} alt="About me" />
                    <h1 className="linkText ">About Me</h1>
                </Link>
                <Link to="/tech" className="links">
                    <img className="linkPic" src={'/images/resume.jpg'} alt="Tech" />
                    <h1 className="linkText ">Tech</h1>
                </Link>
            </div>
        </div>
    );
}

export default Banner;