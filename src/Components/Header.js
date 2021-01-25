import React from "react"
import Facebook from "../Assets/Icons/facebook.png"
import Instagram from "../Assets/Icons/instagram.png"
import Linkedin from "../Assets/Icons/linkedin.png"

export default function Header(){
    return(
        <div className="header p-3">
            <div className="row w-100">
                <div className="m-3">
                    <img className="profile-img" src="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"/>
                </div>
                <div className="m-3 my-auto">
                    <h2>Johann Cepeda</h2>
                    <h6>Desarrollador Junior</h6>
                    <h6>(+57) 310-886-8329</h6>
                    <h6>Inglés intermedio - Español nativo</h6>
                    <h6>Estudiante</h6>
                </div>
                <div className="social-section my-auto">
                    <a target="_blank" href="https://www.instagram.com/johann_cepeda"><img className="icon-img" src={Instagram}/></a>
                    <a target="_blank" href="https://www.facebook.com/johanncepeda"><img className="icon-img" src={Facebook}/></a>
                    <a target="_blank" href="https://www.linkedin.com/in/johann-cepeda-47690b185/"><img className="icon-img" src={Linkedin}/></a>                </div>
            </div>
        </div>
    )
}