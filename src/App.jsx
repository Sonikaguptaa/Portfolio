
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import SocialLinks from "./components/SocialLinks"
import About from "./components/About"

import Experience from "./components/Experience"
import Contact from "./components/Contact"



export default function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Contact />

      <SocialLinks />
    </div>
  )
}