import React from 'react';
import allProjects from './allProjects';

const Projects = () => {

    return (
        <div className="App">
            <h1>Projects</h1>
            {
                allProjects.map((item, idx) => {
                    return <div key={idx} className="projectCustom charGreyBg wF">
                        <div className="projectInfo">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div className="d-flex justify-content-center gap-2 mb-3">
                                {
                                    item.img?
                                    <img src={item.img} alt="First" />
                                    :""
                                }
                                {
                                    item.img2?
                                    <img src={item.img2} alt="Second" />
                                    :""
                                    
                                }
                                {
                                    item.img3?
                                    <img src={item.img3} alt="Second" />
                                    :""
                                    
                                }
                                {
                                    item.img4?
                                    <img src={item.img4} alt="Second" />
                                    :""
                                    
                                }
                            </div>
                            <a className="text-decoration-none btn btn-primary" href={item.link}>{item.title}</a>
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default Projects;