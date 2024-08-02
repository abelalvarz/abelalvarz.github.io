import NavigationComponent from "./components/Navigation"
import HomePage from "./pages/home/HomePage"
import ContactPage from "./pages/contact/ContactPage"
import AboutPage from "./pages/about/AboutPage"
import ProjectsPage from "./pages/projects/Projects"
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "/node_modules/primeflex/primeflex.css"

//PAGES styles

import './pages/about/theme/aboutTheme.css'
import './pages/contact/theme/contactTheme.css'
import './pages/home/theme/homeTheme.css'
import './pages/projects/theme/projectTheme.css'
import { BrowserRouter } from "react-router-dom"

function AppPortfolio() {
  return (
    <BrowserRouter>
        <NavigationComponent />
        <HomePage/>
        <AboutPage/>
        <ProjectsPage/>
        <ContactPage/>
    </BrowserRouter>
    
  )
}

export default AppPortfolio
