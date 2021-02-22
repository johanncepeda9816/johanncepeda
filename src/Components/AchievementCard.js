import React from "react"

export default function AchievementCard(props){

    return(
        <div className="achievement m-1">
            <div className="achievement-content">
                <img className="achievement-icon d-block img-fluid img-responsive" src={props.img} />
            </div>
            <div className="achievement-title">
                <h4>{props.title}</h4>
            </div>
        </div>
    )
}