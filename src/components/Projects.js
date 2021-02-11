import React, { useReducer } from "react";
import ProjectList from "../init/Projects.json";

function Projects(){
    const initProjects = ProjectList || [
        {
            image: "",
            imageAlt: "",
            title: "",
            description:"",
            link: "",
            linkText:""
        },
    ];

    function changeProjects(currentProjects, change){                
        return {...currentProjects, change};
    }

    const [projectsData, setProjectsData] = useReducer(changeProjects, initProjects);

    return (        
        <div className="projects row row-cols-1 row-cols-sm-2 row-cols-lg-3">            
            {projectsData.map((project)=>{
                return (
                    <div className="col mb-4">
                        <section className="card">
                            <img src={project.image} className="card-img-top" alt={project.imageAlt}/>
                            <summary className="card-body">
                                <h5 className="project-title card-title">{project.title}</h5>
                                <p className="project-description card-text"> {project.description}</p>
                                <a href={project.link} className="btn btn-primary">{project.linkText}</a>
                            </summary>
                        </section>
                    </div>
                );
            })}
        </div>
    );
}

export {
    Projects
};