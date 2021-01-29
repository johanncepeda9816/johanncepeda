import React, { useEffect, useState } from "react"

export default function Menu(props){
    const setSelect = props.setSelect;

    return(
        <div className="fluid-container d-block">
            <div className="w-100">
                <button className="col-3 nav-button mx-auto" onClick={() => setSelect("summary")}>Resumen</button>
                <button className="col-3 nav-button mx-auto" onClick={() => setSelect("experience")}>Experiencia</button>
                <button className="col-3 nav-button mx-auto" onClick={() => setSelect("proyects")}>Portafolio</button>
                <button className="col-3 nav-button mx-auto" onClick={() => setSelect("achievements")}>Logros</button>
            </div>
        </div>
    )
}