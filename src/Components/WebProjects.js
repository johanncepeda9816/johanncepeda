import React from "react"

export default function WebProyects() {

    const gamesPc = [
        [
            {
                "id":1,
                "title":"Survivors Games",
                "description":"Es un videojuego multijugador online desarrollado para la semana de inducción en la Escuela Colombiana de Ingeniería Julio Garavito.",
                "img":"https://firebasestorage.googleapis.com/v0/b/johanncepeda-8e965.appspot.com/o/Facilito.PNG?alt=media&token=36682b97-2157-45bb-95c6-907c8c03bbed",
                "technologies":"Unity 2D, Cinemachine, Photon"
            },
            {
                "id":2,
                "title":"EciGameDev",
                "description":"Es un videojuego multijugador desarrollado durante el Game Jam Universitario en la Escuela Colombiana de Ingeniería Julio Garavito.",
                "img":"https://firebasestorage.googleapis.com/v0/b/johanncepeda-8e965.appspot.com/o/after-shift.png?alt=media&token=b51441a3-bf89-45b0-a2b5-e3bc0e9f0693",
                "technologies":"Unity 2D, Cinemachine"
            },
            {
                "id":3,
                "title":"Bien Animal",
                "description":"Videojuego realizado durante el Global Game Jam - 2019. La idea se basó en un perrito que debía rescatar sus recurdos hundidos en el mar.",
                "img":"https://firebasestorage.googleapis.com/v0/b/johanncepeda-8e965.appspot.com/o/Facilito.PNG?alt=media&token=36682b97-2157-45bb-95c6-907c8c03bbed",
                "technologies":"Unity 2D, Cinemachine"
            }
        ],

        [
            {
                "id":1,
                "title":"Facilito Game 2",
                "description":"Es un videojuego multijugador online desarrollado para la semana de inducción en la Escuela Colombiana de Ingeniería Julio Garavito.",
                "img":"https://firebasestorage.googleapis.com/v0/b/johanncepeda-8e965.appspot.com/o/Facilito.PNG?alt=media&token=36682b97-2157-45bb-95c6-907c8c03bbed",
                "technologies":"Unity 2D, Cinemachine, Photon"
            },
            {
                "id":2,
                "title":"After-Shift 2",
                "description":"Es un videojuego multijugador desarrollado durante el Game Jam Universitario en la Escuela Colombiana de Ingeniería Julio Garavito.",
                "img":"https://firebasestorage.googleapis.com/v0/b/johanncepeda-8e965.appspot.com/o/Facilito.PNG?alt=media&token=36682b97-2157-45bb-95c6-907c8c03bbed",
                "technologies":"Unity 2D, Cinemachine"
            },
            {
                "id":3,
                "title":"Naufradog 2",
                "description":"Videojuego realizado durante el Global Game Jam - 2019. La idea se basó en un perrito que debía rescatar sus recurdos hundidos en el mar.",
                "img":"https://firebasestorage.googleapis.com/v0/b/johanncepeda-8e965.appspot.com/o/Facilito.PNG?alt=media&token=36682b97-2157-45bb-95c6-907c8c03bbed",
                "technologies":"Unity 2D, Cinemachine"
            }
        ]
    ]

    return(
        <div className="mx-auto">
            <div id="webControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row w-100 mx-auto">
                            {
                                gamesPc[0].map((item) => {
                                    return(
                                        <div className="game-card mx-auto" key={item.id}>
                                            <h2 className="">{item.title}</h2>
                                            <strong className="d-block">Descripción:</strong>
                                            <p className="">
                                                {item.description}
                                            </p>
                                            <img className="img-fluid" src={item.img}/>
                                            <strong className="d-block">Tecnologías:</strong>
                                            <label>{item.technologies}</label>
                                            <img />
                                            <button type="button" className="btn-md btn-block btn-dark text-light" data-toggle="modal" data-target="#modal-game">Ver</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row w-100 mx-auto">
                            {
                                gamesPc[1].map((item) => {
                                    return(
                                        <div className="game-card mx-auto" key={item.id}>
                                            <h2 className="">{item.title}</h2>
                                            <strong className="d-block">Descripción:</strong>
                                            <p className="">
                                                {item.description}
                                            </p>
                                            <img className="img-fluid" src={item.img}/>
                                            <strong className="d-block">Tecnologías:</strong>
                                            <label>{item.technologies}</label>
                                            <img />
                                            <button type="button" className="btn-md btn-block btn-dark text-light" data-toggle="modal" data-target="#modal-game">Ver</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="carousel-item">
                    <div className="row w-100 mx-auto">
                            {
                                gamesPc[1].map((item) => {
                                    return(
                                        <div className="game-card mx-auto" key={item.id}>
                                            <h2 className="">{item.title}</h2>
                                            <strong className="d-block">Descripción:</strong>
                                            <p className="">
                                                {item.description}
                                            </p>
                                            <img className="img-fluid" src={item.img}/>
                                            <strong className="d-block">Tecnologías:</strong>
                                            <label>{item.technologies}</label>
                                            <img />
                                            <button type="button" className="btn-md btn-block btn-dark text-light" data-toggle="modal" data-target="#modal-game">Ver</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev control-left" href="#webControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next control-right" href="#webControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}