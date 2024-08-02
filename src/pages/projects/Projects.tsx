import { Link } from 'react-router-dom'
import portafolio from '../../assets/portafolio-img.png.png'
import jorbandDashboard from '../../assets/jorbanddashboard-img.png'

const proyects = [
  {
    name: "Portfolio",
    urlDemo: "",
    urlSource: "https://github.com/AlvarzAbel/PersonalPortfolio",
    img: portafolio,
    description: "This project is one of my favorite projects I have worked in because is the way that I can show to the work the experience I have and some of the projects I have worked in before. In this Projects I have used some technologies like React JS, HTML, pure CSS and GCP to deploy this application."
  },
  {
    name: "Jorband Dashboard",
    urlDemo: "https://jorbanddashboardapp.uw.r.appspot.com/",
    urlSource: "https://github.com/AlvarzAbel/JorbanDashboard",
    img: jorbandDashboard,
    description: "Jorband Dashboard is a project that is inspired in a real project that i worked for a Musical Band, and its main porpuse is help to this band with the records of the songs they hade played and with this not repit the same music every time they play. During this application I apply differente technologies like: Frontend React JS, components Library like Primefaces, Axios, Hooks, CSS, and for Backend I used Node JS, Express, MongoDB and others. If you want to check the demo, use the credentials that I leave in the Login page when you make on Clink on Demo."
  },

]

const ProjectsPage = () => {

  return (
    <div id='projects' className='page-container'>
      <div className="project-page">
        <div className="header-page">
          <h1>/projects</h1>
          <p>Here some of the projects i have worked in</p>
        </div>

        <div className="projects-container">
          {
            proyects.map((project, index) => {
              return (
                <div className="project-box" key={index}>
                  <div className="box-header">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="project-box-link">
                      <Link to={project.urlDemo} target='_blank'>Demo</Link>
                      <Link to={project.urlSource} target='_blank'>Source</Link>
                    </div>
                  </div>
                  <div className="box-image-container">
                    <Link to={project.urlDemo} target='_blank'>
                      <img src={project.img} alt="" />
                    </Link>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
