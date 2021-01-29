import React from "react"

export default function ProjectViewer(props){
    
    const title = props.title;
    const description = props.description;
    const img = props.img;

    return(
        <div>            
            <div className="modal fade" id="modal-game" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {description}
                    </div>
                    <img src={img}/>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-dark text-light">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}