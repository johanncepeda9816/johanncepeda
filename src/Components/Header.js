import React from "react"
import Facebook from "../Assets/Icons/facebook.png"
import Instagram from "../Assets/Icons/instagram.png"
import Linkedin from "../Assets/Icons/linkedin.png"

export default function Header(){
    return(
        <div className="header p-3">
            <div className="row w-100">
                <div className="m-3">
                    <img className="profile-img" src="https://firebasestorage.googleapis.com/v0/b/johanncepeda-8e965.appspot.com/o/image_6483441.JPG?alt=media&token=5c1f52e6-e125-4f79-95de-b0c4a02d9ad9"/>
                </div>
                <div className="m-3 my-auto">
                    <h2 className="text-light">JOHANN CEPEDA</h2>
                    <h6 className="text-light">Desarrollador Junior</h6>
                    <h6 className="text-light">(+57) 310-886-8329</h6>
                    <h6 className="text-light">Inglés intermedio - Español nativo</h6>
                    <h6 className="text-light">Estudiante - Horario flexible</h6>
                </div>
                <div className="social-section my-auto">
                    <a target="_blank" href="https://www.instagram.com/johann_cepeda"><img className="icon-img" src={Instagram}/></a>
                    <a target="_blank" href="https://www.facebook.com/johanncepeda"><img className="icon-img" src={Facebook}/></a>
                    <a target="_blank" href="https://www.linkedin.com/in/johann-cepeda-47690b185/"><img className="icon-img" src={Linkedin}/></a>                </div>
            </div>
            <label className="text-light">Última actualización 9 abril 2021</label>
        </div>
    )
}