import React, { useEffect, useState } from "react"

export default function Menu(props){
    const setSelect = props.setSelect;

    return(
        <nav className="navbar navbar-expand-lg navbar-light " style={{margin:"0", padding:"0", width:"auto"}}>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                Menu
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav col-12 mx-auto">
                    <button className="col-12 col-sm-3 col-md-3 col-xs-3 nav-item nav-link nav-button mx-auto" onClick={() => setSelect("summary")}>Resumen</button>
                    <button className="col-12 col-sm-3 col-md-3 col-xs-3 nav-item nav-link nav-button mx-auto" onClick={() => setSelect("experience")}>Experiencia</button>
                    <button className="col-12 col-sm-3 col-md-3 col-xs-3 nav-item nav-link nav-button mx-auto" onClick={() => setSelect("proyects")}>Portafolio</button>
                    <button className="col-12 col-sm-3 col-md-3 col-xs-3 nav-item nav-link nav-button mx-auto" onClick={() => setSelect("achievements")}>Más información</button>
                </div>
            </div>
        </nav>
    )
}