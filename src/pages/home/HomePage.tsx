import Link from "../../styled-components/Link"


const HomePage = () => {
  return (
    <div id="home" className="page-container">
      <div className="home-container">
        <div className="home-content">
          <div className="presentation">
            <h3>Hi, i'm</h3>
            <h1>Abel Alvarez,</h1>
            <h2>Full-Stack Software Developer</h2>
          </div>
          <div className="options">
            <ul>
              <Link to="about">ABOUT ME</Link>
              <Link to="projects">PROJECTS</Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
