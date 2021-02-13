import React from "react";

function About(){    
    return (
        <div className="row no-gutters">
            <div className="col-md-4">
                <img src="./assets/images/about-us/justin-young/profile-pic.png" className="card-img" alt="Founder"/>
            </div>

            <div className="pl-2 col-md-8">
                <div className="card-body" id="justin-card-body">
                    <h5 className="card-title text-company-primary">Founder - Justin Young</h5>
                    <p className="mb-1 card-text">
                        Justin has worked in the technology sector with local small businesses and large international coorporations since 2006.
                    </p>
                    <p className="mb-1 card-text">
                        He holds degrees in Computer Science, Computer Engineering, and a Masters in Business Administration.
                    </p>
                    <p className="mb-1 card-text">
                        When not programming or working, Justin enjoys spending time with his family, learning music, running, exercising, biking, playing softball and being active.
                    </p>
                    <a href="/recent-projects" className="btn btn-primary">View Recent Hobby Projects</a>                    
                </div>
            </div>
        </div>
    );    
}

export {
    About
};