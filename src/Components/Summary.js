import React from "react"

export default function Summary(){
    return(
        <div>
            <div>
                <h1 className="text-center">¿Quién Soy?</h1>
                <p className="text-justify">
                    Mi nombre es Johann Cepeda, actualmente soy estudiante de 
                    Ingeniería de Sistemas en la Escuela Colombiana de Ingeniería
                    Julio Garavito. Me gusta inventar cosas nuevas; Pasar
                    de una idea a un producto completo. Por eso, el
                    desarrollo de Software es uno de mis hobbies preferidos. 
                    He tenido la oportunidad de liderar un grupo de interes para el
                    desarollo de Video Juegos. Soy una persona autonoma, ansioso por
                    aprender nuevas cosas y ponerlas en practica. <br/><br/>Mis Hobbies son: Programar, Jugar en linea, leer, hacer ejercicio.
                </p>
            </div>
            <div className="row w-100 mt-5">
                <div className="col-12 col-sm-4 col-md-4">
                    <h1 className="text-center">Fortalezas</h1>
                    <ul className="mx-auto">
                        <li className="list-item">Me considero un lider</li>
                        <li className="list-item">Soy entusiasta con mi trabajo</li>
                        <li className="list-item">Hago las cosas muy bien cuando me motivo</li>
                        <li className="list-item">Siempre busco una solución a los problemas</li>
                    </ul>
                </div>
                <div className="col-12 col-sm-4 col-md-4">
                    <h1 className="text-center">Debilidades</h1>
                    <ul className="mx-auto">
                        <li className="list-item">Desmotivación cuando no funciona</li>
                        <li className="list-item">Soy directo con las cosas</li>
                        <li className="list-item">Le tengo miedo al fracaso</li>
                        <li className="list-item">Soy indeciso y eso me complica algunas veces</li>
                    </ul>
                </div>
                <div className="col-12 col-sm-4 col-md-4">
                    <h1 className="text-center">Oportunidades</h1>
                    <ul className="mx-auto">
                        <li className="list-item">Crear mi emprendimiento en T.I</li>
                        <li className="list-item">Contar con experiencia laboral</li>
                        <li className="list-item">Tener conocimientos en varias áreas</li>
                        <li className="list-item">Desarrollar proyectos independientes</li>
                    </ul>
                </div>
            </div>

            <div className="mt-5">
                <h1 className="text-center">Educación</h1>
                <div className="row">
                    <div className="mx-auto text-center reference-box">
                        <h4>Bachiller Académico</h4>
                        <p>Graduado en 2016</p>
                        <strong><p>Colegio Casablanca</p></strong>
                    </div>
                    <div className="mx-auto text-center reference-box">
                        <h4>Carrera Universitaria</h4>
                        <p>Graduación en 2022-1</p>
                        <strong><p>Escuela Colombiana de Ingeniería Julio Garavito</p></strong>
                    </div>
                    <div className="mx-auto text-center reference-box">
                        <h4>Diplomado Marketing Digital</h4>
                        <p>Terminado en 2019</p>
                        <strong><p>Fundación Universitaria Taller 5</p></strong>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <h1 className="text-center">Proyectos publicados</h1>
                <div className="row w-100">
                    <div className="card mx-auto" style={{width: "18rem"}}>
                    <img className="card-img-top img-experience" src="https://firebasestorage.googleapis.com/v0/b/johanncepeda-8e965.appspot.com/o/logo.png?alt=media&token=bf29ce89-b682-4484-be13-85f25aa54b37" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title text-center">Indu App</h5>
                            <p className="card-text text-center">
                                Trabaje en equipo para desarollar una aplicación móvil
                                que usaba realidad aumentada (Vuforia) para una actividad 
                                en el día de la inducción. Esta aplicación fue comprada por
                                nuestra universidad y es usada para eventos dentro de la universidad.
                            </p>
                            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.GrupoVideoJuegosECI.InduApp" className="btn btn-primary center d-block">Saber más</a>
                        </div>
                    </div>
                    <div className="card mx-auto" style={{width: "18rem"}}>
                    <img className="card-img-top img-experience" src="https://firebasestorage.googleapis.com/v0/b/johanncepeda-8e965.appspot.com/o/Icon.png?alt=media&token=35ae9a9a-9088-41f8-81f2-47994a3dbb24"/>
                        <div className="card-body">
                            <h5 className="card-title text-center">Swapped Shots</h5>
                            <p className="card-text text-center">
                                Con ayuda de unos amigos, desarrollamos una aplicación para jugar
                                en reuniones. Nuestro objetivo era divertirnos y al final, fue una experiencia muy
                                interesante, asi que decidimos publicarla. Actualmente esta publicada en Play Store.
                            </p>
                            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.SurvivorsGames.Swapped" className="btn btn-primary center d-block">Saber más</a>
                        </div>
                    </div>
                    <div className="card mx-auto" style={{width: "18rem"}}>
                    <img className="card-img-top img-experience" src="https://firebasestorage.googleapis.com/v0/b/johanncepeda-8e965.appspot.com/o/BienAnimalLogo.png?alt=media&token=15b36e0f-f991-4b35-baa6-f475d3f29d82" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title text-center">Bien Animal</h5>
                            <p className="card-text text-center">
                                Este es un proyecto full stack que realicé para una Start Up que tenia
                                como objetivo tener una plataforma donde pudiera tener almacenada toda su información.
                                Durante el desarollo le agregamos muchas mas funciones como autenticación de usuarios.
                            </p>
                            <a target="_blank" href="https://alejapuppies-b5acb.web.app/" className="btn btn-primary center d-block">Saber más</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <h1 className="text-center">Referencias</h1>
                <div className="row w-100 mt-3 mx-auto">
                    <div className="reference-box col-12 col-sm-3 col-md-3 mx-auto">
                        <h5>Referencia #A</h5>
                        <label className="text-muted">Decano Ing. Sistemas</label>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                        <span>contacto@gmail.com</span>
                    </div>
                    <div className="reference-box col-12 col-sm-3 col-md-3 mx-auto">
                        <h5>Referencia #A</h5>
                        <label className="text-muted">Decano Ing. Sistemas</label>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                        <span>contacto@gmail.com</span>
                    </div>
                    <div className="reference-box col-12 col-sm-3 col-md-3 mx-auto">
                        <h5>Referencia #A</h5>
                        <label className="text-muted">Decano Ing. Sistemas</label>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                        <span>contacto@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <h1 className="text-center">Emprendimientos</h1>
                <p className="text-center">
                    Mi plan con Survivors Games es hacerlo una empresa multinacional en el sector tecnológico para el desarrollo de videojuegos
                    y productos de Software. Por el momento, requiero de experiencia para liderar un grupo de trabajo y emprender de manera correcta.
                    Presento Survivors Games como mi portafolio de trabajo, ya que cada uno de mis proyectos tiene la firma.
                </p>
                <a target="_blank" href="https://www.instagram.com/survivorsgames/"><img className="banner mx-auto" src="https://firebasestorage.googleapis.com/v0/b/johanncepeda-8e965.appspot.com/o/Banner.jpg?alt=media&token=77494874-e6f3-44ef-ad6b-e373c2daff33"/></a>
            </div>
            <div className="mt-5">
            </div>
        </div>
    )
}