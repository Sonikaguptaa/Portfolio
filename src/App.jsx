
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import SocialLinks from "./components/SocialLinks"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Certification from "./components/Certification"



export default function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Certification />


      <Contact />

      <SocialLinks />
    </div>
  )
}