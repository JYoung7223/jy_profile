import React from "react";

function Contact(){    
    return (
        <div class="card mb-3">
        <div class="row border-top no-gutters">
            <p class="col-12 text-center text-company-primary">Contact Info:</p>
            <p class="col-3 text-center text-company-primary">Email:
                <a href="mailto:jyoung7223@yahoo.com?subject=USS-Connect"><i class="fa fa-envelope-o">jyoung7223@yahoo.com</i></a>
            </p>
            <p class="col-3 text-center text-company-primary">Telephone:
                <a href="tel:801-541-9922"><i class="fa fa-phone"> 801-541-9922</i></a>
            </p>
            <p class="col-3 text-center text-company-primary">Text:
                <a href="sms:801-541-9922&body=USS-Connect"><i class="fa fa-comment"> 801-541-9922 </i></a>
            </p>
            <p class="col-3 text-center text-company-primary">
                <a href="./assets/documents/justin-young-resume.pdf" download><i class="fa fa-download" aria-hidden="true"> Download Resume Copy</i></a>
            </p>
        </div>
        <section class="row">
            <div class="col-4 col-sm-2 my-2">
                <a href="https://github.com/JYoung7223">
                    <img class="connect-img" src="./assets/images/GitHub.jpg" alt="GitHub"/>
                </a>
                <div class="card-body">
                    <p class="card-text">
                        <a href="https://github.com/JYoung7223"><i class="fa fa-github" aria-hidden="true">GitHub</i></a>
                    </p>
                </div>
            </div>
            <div class="col-4 col-sm-2 my-2">
                <a href="https://www.linkedin.com/in/justin-young-b7469826/">
                    <img class="connect-img" src="./assets/images/linkedin.png" alt="Linked-In"/>
                </a>
                <div class="card-body">
                    <p class="card-text">
                        <a href="https://www.linkedin.com/in/justin-young-b7469826/"><i class="fa fa-linkedin" aria-hidden="true"> Linked-In</i></a>
                    </p>
                </div>
            </div>
            <div class="col-4 col-sm-2 my-2">
                <a href="https://www.instagram.com/justin.o.young/">
                    <img class="connect-img" src="./assets/images/instagram.jpg" alt="Instagram"/>
                </a>
                <div class="card-body">
                    <p class="card-text">
                        <a href="https://www.instagram.com/justin.o.young/"><i class="fa fa-instagram" aria-hidden="true"> Instagram</i></a>
                    </p>
                </div>
            </div>
            <div class="col-4 col-sm-2 my-2">
                <a href="https://www.youtube.com/channel/UCCmbphfbGJQeonVIDKQaL4A?view_as=subscriber">
                    <img class="connect-img" src="./assets/images/youtube.PNG" alt="YouTube"/>
                </a>
                <div class="card-body">
                    <p class="card-text">
                        <a href="https://www.youtube.com/channel/UCCmbphfbGJQeonVIDKQaL4A?view_as=subscriber"><i class="fa fa-youtube" aria-hidden="true"> Youtube</i></a>
                    </p>
                </div>
            </div>
            <div class="col-4 col-sm-2 my-2">
                <a href="https://www.facebook.com/justin.young.56232">
                    <img class="connect-img" src="./assets/images/facebook.png" alt="Facebook"/>
                </a>
                <div class="card-body">
                    <p class="card-text">
                        <a href="https://www.facebook.com/justin.young.56232"><i class="fa fa-facebook" aria-hidden="true"> Facebook</i></a>
                    </p>
                </div>
            </div>
            <div class="col-4 col-sm-2 my-2">
                <a href="https://www.twitter.com/justin7223">
                    <img class="connect-img" src="./assets/images/twitter.png" alt="Twitter"/>
                </a>
                <div class="card-body">
                    <p class="card-text">
                        <a href="https://www.twitter.com/justin7223"><i class="fa fa-twitter" aria-hidden="true">Twitter</i></a>
                    </p>
                </div>
            </div>
        </section>
        </div>
    );
}

export {
    Contact
};