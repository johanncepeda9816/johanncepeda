import React from "react"

export default function PcProjects(){

    const gamesPc = [
        [
            {
                "id":1,
                "title":"Facilito Game",
                "description":"Es un videojuego multijugador online desarrollado para la semana de inducción en la Escuela Colombiana de Ingeniería Julio Garavito.",
                "img":"https://firebasestorage.googleapis.com/v0/b/johanncepeda-8e965.appspot.com/o/Facilito.PNG?alt=media&token=36682b97-2157-45bb-95c6-907c8c03bbed",
                "technologies":"Unity 2D, Cinemachine, Photon",
                "target":"https://ecigamedev.web.app/game"
            },
            {
                "id":2,
                "title":"After-Shift",
                "description":"Es un videojuego multijugador desarrollado durante el Game Jam Universitario en la Escuela Colombiana de Ingeniería Julio Garavito.",
                "img":"https://firebasestorage.googleapis.com/v0/b/johanncepeda-8e965.appspot.com/o/after-shift.png?alt=media&token=b51441a3-bf89-45b0-a2b5-e3bc0e9f0693",
                "technologies":"Unity 2D, Cinemachine",
                "href":"https://survivorsgames.itch.io/after-shift"
            },
            {
                "id":3,
                "title":"Naufradog",
                "description":"Videojuego realizado durante el Global Game Jam - 2019. La idea se basó en un perrito que debía rescatar sus recurdos hundidos en el mar.",
                "img":"https://ggj.s3.amazonaws.com/styles/game_sidebar__wide/featured_image/2019/01/149233/goodending.png?itok=m0RI4x82&timestamp=1548627754",
                "technologies":"Unity 2D",
                "href":"https://globalgamejam.org/2019/games/naufradog"
            }
        ],

        [
            {
                "id":1,
                "title":"Close Enough",
                "description":"Video juego multijugador desarrollado para el Global Game Jam 2018. Trata de sobrevivir a un apocalipsis zombie que se presenta en la ciudad. ",
                "img":"https://ggj.s3.amazonaws.com/styles/game_sidebar__wide/game/featured_image/juegoimagen.jpg?itok=JNkCYnC_&timestamp=1517179357",
                "technologies":"Unity 3D",
                "href":"https://globalgamejam.org/2018/games/close-enough"
            },
        ]
    ]

    return(
        <div className="mx-auto">
            <div id="pcControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
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
                                            <img className="img-fluid game-card-img" src={item.img}/>
                                            <strong className="d-block">Tecnologías:</strong>
                                            <label>{item.technologies}</label>
                                            <img />
                                            <a type="button" className="btn-md btn-block btn-dark text-light" href={item.href} target="_blank">Ver</a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div class="carousel-item">
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
                                            <img className="img-fluid game-card-img" src={item.img}/>
                                            <strong className="d-block">Tecnologías:</strong>
                                            <label>{item.technologies}</label>
                                            <img />
                                            <a type="button" className="btn-md btn-block btn-dark text-light" href={item.href} target="_blank">Ver</a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/*<div class="carousel-item">
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
                                            <img className="img-fluid game-card-img" src={item.img}/>
                                            <strong className="d-block">Tecnologías:</strong>
                                            <label>{item.technologies}</label>
                                            <img />
                                            <button type="button" className="btn-md btn-block btn-dark text-light" data-toggle="modal" data-target="#modal-game">Ver</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>*/}
                </div>
                <a class="carousel-control-prev" href="#pcControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#pcControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}