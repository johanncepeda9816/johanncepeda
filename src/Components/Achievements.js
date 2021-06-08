import React from "react"
import AchievementCard from "./AchievementCard"

export default function Achievements() {

    const list = [
        {
            "title": "Liderar un grupo de Desarrollo de Videojuegos",
            "img": "https://firebasestorage.googleapis.com/v0/b/johanncepeda-8e965.appspot.com/o/leader.png?alt=media&token=ac264fee-0336-47cc-ae36-7147e11c00b0"
        },
        {
            "title": "Diplomado en Marketing Digital",
            "img": "https://firebasestorage.googleapis.com/v0/b/johanncepeda-8e965.appspot.com/o/social-growth.png?alt=media&token=e9981025-72a9-447c-9b5e-8ccab468971a"
        },
        {
            "title": "Publicar mi primera Aplicación",
            "img": "https://firebasestorage.googleapis.com/v0/b/johanncepeda-8e965.appspot.com/o/publish.png?alt=media&token=1ce6ee94-202d-4a5a-906f-9f7223744fe6"
        },
        {
            "title": "Desarrollar videojuegos en Unity",
            "img": "https://firebasestorage.googleapis.com/v0/b/johanncepeda-8e965.appspot.com/o/playing-videogames.png?alt=media&token=5df8f8d8-3bf5-4f41-889b-d2242a3a87b1"
        },
    ]

    return (
        <div className="container">
            <h1 className="text-center">Maratones de desarrollo</h1>
            <hr className="hr mb-5" />
            <div className="mx-auto">
                <ul className="row w-100">
                    <li className="m-1 mx-auto">
                        <a>Game Jam 2017</a>
                    </li>
                    <li className="m-1 mx-auto">
                        <a>Game Jam 2018</a>
                    </li>
                    <li className="m-1 mx-auto">
                        <a>Game Jam 2019</a>
                    </li>
                    <li className="m-1 mx-auto">
                        <a>Game Jam Escuela Colombiana Ing.</a>
                    </li>
                </ul>
            </div>

            <h1 className="text-center">Logros personales</h1>
            <hr className="hr mb-5" />
            <div className="row w-100 mx-auto">
                {
                    list && list.map((item, i) => {
                        return (
                            <div className="mx-auto col-12 col-sm-10 col-xs-10 col-md-5 col-lg-4" key={i}>
                                <AchievementCard title={item.title} img={item.img} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}