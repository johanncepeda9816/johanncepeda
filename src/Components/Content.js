import React from "react"
import Experience from "./Experience";
import Summary from "./Summary";

export default function Content(props){
    const toShow = props.content;

    if(toShow === "none"){
        return(
            <div>
                <h1>None</h1>
            </div>
        )
    }
    else if(toShow === "summary"){
        return(
            <div className="mt-5 container">
                <Summary />
            </div>
        )
    }
    else if(toShow === "experience"){
        return(
            <div className="mt-5" id="experience">
                <Experience />
            </div>
        )
    }
    else if(toShow === "proyects"){
        return(
            <div>
                <h1>Proyectos</h1>
            </div>
        )
    }
    else if(toShow === "achievements"){
        return(
            <div>
                <h1>Logros</h1>
            </div>
        )
    }
}