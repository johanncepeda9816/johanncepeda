import React from "react"
import ProjectViewer from "./ProjectViewer"
import Instagram from "../Assets/Icons/instagram.png"
import PcProjects from "./PcProjects"
import MobileProjects from "./MobileProjects"
import WebProjects from "./WebProjects"

export default function Projects(){

    return(
        <div className="container">
            <div className="mt-5">
                <h1 className="text-center">Videojuegos</h1>
                <PcProjects />
            </div>
            <div className="mt-5">
                <h1 className="text-center">Aplicaciones móviles</h1>
                <MobileProjects />
            </div>
            <div className="mt-5">
                <h1 className="text-center">Desarrollo Web</h1>
                <WebProjects />
            </div>
            <ProjectViewer title="hola" description="test" img={Instagram}/>
            <div className="mt-5">

            </div>

        </div>
    )
}