import React from "react"
import Instagram from "../Assets/Icons/instagram.png"
import Facebook from "../Assets/Icons/facebook.png"

export default function Summary() {
    return (
        <div>
            <div>
                <h1 className="text-center title-primary">Perfil Profesional</h1>
                <p className="text-justify">
                    Ingenierio de Sistemas de la Escuela Colombiana de
                    Ingeniería Julio Garavito. Interesado en el desarrollo de Software,
                    aplicaciones móviles y, productos de tecnología.
                    Conozco el ciclo de vida de un proyecto de software, metodologías ágiles como SCRUM para organización de proyectos, y tecnologías como Azure Devops, Taiga, etc.
                    Lideré un grupo de interés para el desarrollo de
                    Video Juegos con Unity <a target="_blank" href="https://ecigamedev.web.app/">Ecigamedev</a> por dos años.
                    Soy una persona autónoma, con alta capacidad de planificación y solución de problemas.
                </p>
                <p>
                    Cuento con mi propia organización donde realizo proyectos independientes en React Native y despliego a tiendas
                    oficiales como Google Play y App Store, demostrando mi pasión por las fabricas de software y el desarrollo de productos.
                    Asi mismo, aportanto a toda la comunidad con aplicaciones de utilidad y servicios
                    <br />
                    <br />
                    <p>
                        Conoce mas en <a target="_blank" href="https://survivorslabs.com/">www.survivorslabs.com</a>
                    </p>
                </p>
            </div>

            <div className="mt-5 mx-auto">
                <h1 className="text-center title-primary">Tecnologías</h1>
                <hr className="hr mb-5" />
                <div className="row w-100 mx-auto">
                    <div className="col-12 col-sm-4 col-xs-4 col-md-4 mx-auto mb-3">
                        <h3>React Js</h3>
                        <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "85%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-xs-4 col-md-4 mx-auto mb-3">
                        <h3>React Native</h3>
                        <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-xs-4 col-md-4 mx-auto mb-3">
                        <h3>Firebase</h3>
                        <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-xs-4 col-md-4 mx-auto mb-3">
                        <h3>Unity</h3>
                        <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "65%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-xs-4 col-md-4 mx-auto mb-3">
                        <h3>Java</h3>
                        <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-xs-4 col-md-4 mx-auto mb-3">
                        <h3>C#</h3>
                        <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-xs-4 col-md-4 mx-auto mb-3">
                        <h3>Spring Boot</h3>
                        <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-4 col-xs-4 col-md-4 mx-auto mb-3">
                        <h3>PostgreSQL, Oracle</h3>
                        <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-4 col-xs-4 col-md-4 mx-auto mb-3">
                        <h3>Google Play - App Store</h3>
                        <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row w-100 mt-5">
                <div className="col-12 col-sm-4 col-md-4">
                    <hr className="hr" />
                    <h1 className="text-center title-primary">Fortalezas</h1>
                    <ul className="mx-auto">
                        <li className="list-item">Aptitudes de lider</li>
                        <li className="list-item">Entusiasta con mi trabajo</li>
                        <li className="list-item">Motiación laboral</li>
                        <li className="list-item">Solución de problemas</li>
                    </ul>
                </div>
                <div className="col-12 col-sm-4 col-md-4">
                    <hr className="hr" />
                    <h1 className="text-center title-primary">Debilidades</h1>
                    <ul className="mx-auto">
                        <li className="list-item">Impaciente</li>
                        <li className="list-item">Soy directo con las cosas</li>
                        <li className="list-item">Odio el fracaso</li>
                        <li className="list-item">Soy indeciso y eso me complica algunas veces</li>
                    </ul>
                </div>
                <div className="col-12 col-sm-4 col-md-4">
                    <hr className="hr" />
                    <h1 className="text-center title-primary">Oportunidades</h1>
                    <ul className="mx-auto">
                        <li className="list-item">Emprendedor</li>
                        <li className="list-item">Contar con experiencia laboral</li>
                        <li className="list-item">Tener conocimientos en varias áreas</li>
                        <li className="list-item">Desarrollar proyectos independientes</li>
                    </ul>
                </div>
            </div>

            <div className="mt-5">
                <h1 className="text-center title-primary">Formación académica</h1>
                <hr className="hr mb-5" />
                <div className="row w-100 mx-auto">
                    <div className="mx-auto text-center">
                        <h4>Pregrado Universitario</h4>
                        <strong><p>Escuela Colombiana de Ingeniería Julio Garavito</p></strong>
                        <p>Graduación en 2022-1</p>
                    </div>
                    <div className="mx-auto text-center">
                        <h4>Bachillerato Académico</h4>
                        <strong><p>Colegio Casablanca</p></strong>
                        <p>Graduado en 2016</p>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <h1 className="text-center title-primary">Otros estudios</h1>
                <hr className="hr mb-5" />
                <div className="row w-100 mx-auto">
                    <div className="mx-auto text-center">
                        <h4>Diplomado Marketing Digital</h4>
                        <strong><p>Fundación Universitaria Taller 5</p></strong>
                        <p>Terminado en 2020</p>
                    </div>
                    <div className="mx-auto text-center">
                        <h4>Curso React Native certificado</h4>
                        <strong><p>Udemy</p></strong>
                        <p>Terminado en 2020-1</p>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <h1 className="text-center title-primary">Membresías</h1>
                <hr className="hr mb-5" />
                <div className="row w-100 mx-auto">
                    <div className="mx-auto text-center">
                        <h4>Grupo Desarrollo de Videojuegos</h4>
                        <strong><p>Escuela Colombiana de Ingeniería Julio Garavito</p></strong>
                        <p>2017-2 - Actualmente Lider</p>
                    </div>
                </div>
            </div>

            <div className="mt-5 mx-auto">
                <h1 className="text-center title-primary">Proyectos recientes</h1>
                <hr className="hr mb-5" />
                <div className="row w-100 mx-auto">
                    <div className="card mx-auto" style={{ width: "18rem" }}>
                        <img className="card-img-top img-experience" src="https://firebasestorage.googleapis.com/v0/b/protegete-app-42322.appspot.com/o/assets%2Ficons%2FIcon.png?alt=media&token=7f626b66-88ca-4416-a22f-bdcac244cc3d" />
                        <div className="card-body">
                            <h5 className="card-title text-center">Protégete</h5>
                            <p className="card-text text-center">
                                Aplicación móvil para minimizar el acoso y aportar a la seguridad de las mujeres en el transporte
                            </p>
                            <a target="_blank" href="https://biolink.info/protegete" className="btn btn-danger center d-block">Saber más</a>
                        </div>
                    </div>

                    <div className="card mx-auto" style={{ width: "18rem" }}>
                        <img className="card-img-top img-experience" src="https://firebasestorage.googleapis.com/v0/b/johanncepeda-8e965.appspot.com/o/icon.png?alt=media&token=b161c165-9ae9-422f-b0a2-2f22f0a02cf4" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title text-center">Puppy Foundations</h5>
                            <p className="card-text text-center">
                                Aplicación móvil en desarrollo que permite publicar mascotas en adopción
                            </p>
                            <a href="#" className="btn btn-danger center d-block">En desarrollo...</a>
                        </div>
                    </div>

                    <div className="card mx-auto" style={{ width: "18rem" }}>
                        <img className="card-img-top img-experience" src="https://firebasestorage.googleapis.com/v0/b/johanncepeda-8e965.appspot.com/o/BienAnimalLogo.png?alt=media&token=15b36e0f-f991-4b35-baa6-f475d3f29d82" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title text-center">Bien Animal</h5>
                            <p className="card-text text-center">
                                Aplicación web para veterinaria. Contiene servicios de autenticación de usuarios.
                            </p>
                            <a target="_blank" href="https://bienanimalvet-a354a.web.app/" className="btn btn-danger center d-block">Saber más</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 mx-auto">
                <h1 className="text-center title-primary">Habilidades</h1>
                <hr className="hr mb-5" />
                <div className="row w-100 mx-auto">
                    <div className="col-12 col-sm-4 col-xs-4 col-md-4 mx-auto mb-3">
                        <h3>Front development</h3>
                        <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-xs-4 col-md-4 mx-auto mb-3">
                        <h3>Back development</h3>
                        <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "60%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-xs-4 col-md-4 mx-auto mb-3">
                        <h3>Game development</h3>
                        <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-xs-4 col-md-4 mx-auto mb-3">
                        <h3>Mobile development</h3>
                        <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-xs-4 col-md-4 mx-auto mb-3">
                        <h3>Work Team</h3>
                        <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "100%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-xs-4 col-md-4 mx-auto mb-3">
                        <h3>Leadership</h3>
                        <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "100%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <h1 className="text-center title-primary">Referencias</h1>
                <hr className="hr mb-5" />
                <div className="row w-100 mt-3 mx-auto">
                    <div className="reference-box col-12 col-sm-3 col-md-3 mx-auto">
                        <h5>Oswaldo Castillo</h5>
                        <label className="text-muted">Decano Ing. Sistemas ECI</label>
                        <a href="mailto:oswaldo.castillo@escuelaing.edu.co?Subject=Referencia%20Johann%20Cepeda"><span className="d-block">oswaldo.castillo@escuelaing.edu.co</span></a>
                    </div>
                    <div className="reference-box col-12 col-sm-3 col-md-3 mx-auto">
                        <h5>Jimmy Moya</h5>
                        <label className="text-muted">Lider del Grupo Ecigamedev</label>
                        <span className="d-block"><strong>Contacto:</strong> (+57) 321 2678099</span>
                    </div>
                    <div className="reference-box col-12 col-sm-3 col-md-3 mx-auto">
                        <h5>Eugenia Mateus</h5>
                        <label className="text-muted">Gerente Autos Cars</label>
                        <span className="d-block"><strong>Contacto:</strong> (+57) 311 4972196</span>
                    </div>
                </div>
            </div>

            {/*
            <div className="mt-5 mx-auto">
                <h1 className="text-center title-primary">Emprendimientos</h1>
                <hr className="hr mb-5"/>
                <h3 className="d-block">Survivors Games</h3>
                <div className="row w-100">
                    <p className="text-justify col-12 col-sm-6 col-xs-6 col-md-6 my-auto">
                        Mi plan con Survivors Games es hacerlo una empresa multinacional en el sector tecnológico para el desarrollo de videojuegos
                        y productos de Software. Por el momento, requiero de experiencia para liderar un grupo de trabajo y emprender de manera correcta.
                        Presento Survivors Games como mi portafolio de trabajo, ya que cada uno de mis proyectos tiene la firma.
                        <label className="d-block mt-5">Redes sociales:</label>
                        <div className="row w-100 mx-auto">
                            <a target="_blank" href="https://www.instagram.com/survivorsgames/"><img className="d-block icon-img " src={Instagram}/></a>
                            <a target="_blank" href="https://www.facebook.com/survivorsgamescol/"><img className="d-block icon-img " src={Facebook}/></a>
                        </div>
                    </p>
                    <div className="col-12 col-sm-6 col-xs-6 col-md-6">
                        <img className="img-fluid mx-auto" src="https://firebasestorage.googleapis.com/v0/b/johanncepeda-8e965.appspot.com/o/Banner.jpg?alt=media&token=77494874-e6f3-44ef-ad6b-e373c2daff33"/>
                    </div>
                </div>
            </div>
            */}
            <div className="mt-5">
                <h2 className="text-muted text-center font-italic">"Las grandes mentes no se burlan de las grandes ideas"</h2>
                <label className="d-block text-center text-muted">La Magia de pensar en grande -  David J. Schwartz</label>
            </div>
        </div>
    )
}