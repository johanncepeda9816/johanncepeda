import React from "react"

export default function WebProyects() {

    const gamesPc = [
        [
            {
                "id": 1,
                "title": "U-Matching",
                "description": "Aplicación full stack con interacciones en tiempo real y chat",
                "img": "https://firebasestorage.googleapis.com/v0/b/johanncepeda-8e965.appspot.com/o/u-match.PNG?alt=media&token=accf0020-d05e-468a-8b00-b6206b3a5714",
                "technologies": "Spring boot, Firebase, Web sockets, React JS",
                "href": "https://u-matching.web.app/"
            },
            {
                "id": 2,
                "title": "EciGameDev",
                "description": "Aplicación web que muestra la informacion del grupo de desarrollo de videojuegos",
                "img": "https://firebasestorage.googleapis.com/v0/b/johanncepeda-8e965.appspot.com/o/ecigamedev.PNG?alt=media&token=a9e849bb-0b07-43a6-bdec-f859cc0e0839",
                "technologies": "React Js, Firebase, Unity WebGL",
                "href": "https://ecigamedev.web.app/"
            },
            {
                "id": 3,
                "title": "Bien Animal",
                "description": "Aplicación web que facilita el sector administrativo de una veterinaria.",
                "img": "https://firebasestorage.googleapis.com/v0/b/johanncepeda-8e965.appspot.com/o/bienanimal.PNG?alt=media&token=381eca8d-9199-4ed2-9f5d-e0a46322b958",
                "technologies": "React Js, Firebase, Axios",
                "href": "https://bienanimalvet-a354a.firebaseapp.com/"
            }
        ],

        [
            {
                "id": 1,
                "title": "Survivors Games",
                "description": "Aplicación web para Survivors Games donde se visualizan los proyectos de la empresa",
                "img": "https://firebasestorage.googleapis.com/v0/b/johanncepeda-8e965.appspot.com/o/Banner.jpg?alt=media&token=77494874-e6f3-44ef-ad6b-e373c2daff33",
                "technologies": "React Js, Firebase",
                "href": "https://www.instagram.com/survivorsgames/"
            },
        ]
    ]

    return (
        <div className="mx-auto">
            <div id="webControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row w-100 mx-auto">
                            {
                                gamesPc[0].map((item) => {
                                    return (
                                        <div className="game-card mx-auto" key={item.id}>
                                            <h2 className="">{item.title}</h2>
                                            <strong className="d-block">Descripción:</strong>
                                            <p className="">
                                                {item.description}
                                            </p>
                                            <img className="img-fluid game-card-img" src={item.img} />
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
                    <div className="carousel-item">
                        <div className="row w-100 mx-auto">
                            {
                                gamesPc[1].map((item) => {
                                    return (
                                        <div className="game-card mx-auto" key={item.id}>
                                            <h2 className="">{item.title}</h2>
                                            <strong className="d-block">Descripción:</strong>
                                            <p className="">
                                                {item.description}
                                            </p>
                                            <img className="img-fluid game-card-img" src={item.img} />
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
                <a className="carousel-control-prev control-left" href="#webControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next control-right" href="#webControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}