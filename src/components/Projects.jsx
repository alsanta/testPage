import React, { useState, useEffect } from 'react';
import allProjects from './allProjects';

const Projects = () => {

    return (
        <div className="App">
            <h1>Projects</h1>
            {
                allProjects.map((item,idx)=>{
                    return <div key={idx} className="projectCustom">
                        <div className="projectInfo">
                            <p>{item.title}</p>
                            <p>{item.description}</p>
                            <img src={item.img} alt="" />
                            <a className="text-decoration-none btn btn-primary" href="http://google.com">{item.title}</a>
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default Projects;