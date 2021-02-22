import React from "react"

export default function MobileProjects(){

    const gamesPc = [
        [
            {
                "id":1,
                "title":"Swapped Shots",
                "description":"Swapped shots es una aplicación de retos en diferentes modos, ya sea amigos, fiesta, match, o familia. Divertido para ocaciones especiales.",
                "img":"https://firebasestorage.googleapis.com/v0/b/johanncepeda-8e965.appspot.com/o/SwappedShots.png?alt=media&token=e2bd5868-4e10-4690-ab68-d6cb5a45f04b",
                "technologies":"Unity, Firebase, Admob",
                "href":"https://play.google.com/store/apps/details?id=com.SurvivorsGames.Swapped&hl=es_CO&gl=US"
            },
            {
                "id":2,
                "title":"Indu App",
                "description":"Aplicación que utiliza realidad aumentada para reconocimineto de codigos QR donde se brinda informacion acerca de los bloques en la ECI.",
                "img":"https://firebasestorage.googleapis.com/v0/b/johanncepeda-8e965.appspot.com/o/InduApp.jpeg?alt=media&token=8dbff155-35a9-4be0-b67d-9eb69c373a92",
                "technologies":"Unity, Vuforia",
                "href":"https://play.google.com/store/apps/details?id=com.GrupoVideoJuegosECI.InduApp&hl=es_CO&gl=US"
            },
            {
                "id":3,
                "title":"Space VR",
                "description":"Videojuego interactivo que utiliza realidad virtual para dispositivos móviles, se requiere un control conectado por Bluetooth y unas gafas especiales de VR BOX para celular.",
                "img":"https://firebasestorage.googleapis.com/v0/b/johanncepeda-8e965.appspot.com/o/VrBox.PNG?alt=media&token=162589b9-471c-408c-9cc9-d8171f8216a0",
                "technologies":"Unity 2D, VR Box",
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
            <div id="mobileControls" class="carousel slide" data-ride="carousel">
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
                    
                </div>
                {/*
                <a class="carousel-control-prev" href="#mobileControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#mobileControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>*/}
            </div>
        </div>
    )
}