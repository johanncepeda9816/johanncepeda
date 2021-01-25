import React, { useState } from "react"
import Content from "../Components/Content";
import Header from "../Components/Header"
import Menu from "../Components/Menu"

export default function Home(){
    const [select, setSelect] = useState("summary");

    return(
        <div className="fluid-container w-100">
            <div>
                <Header />
            </div>
            <div>
                <Menu setSelect = {setSelect}/>
            </div>
            <div>
                <Content content={select}/>
            </div>
        </div>
    )
}