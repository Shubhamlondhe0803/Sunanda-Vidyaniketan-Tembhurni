import { useEffect, useRef } from "react"
import Hero from "../Components/Hero"
import About from "../Components/About"
import Events from "../Components/Events"
import Technology from "../Components/Technology"
import Sports from "../Components/Sports"
import Gallery from "../Components/Gallery"
import Contact from "../Components/Contacts"
import Videos from "../Components/Videos"
import "./Home.css"

const Home = () => {
  const homeRef = useRef(null)

  useEffect(() => {
    // Add animation classes with delay
    const sections = document.querySelectorAll('.section')
    sections.forEach((section, index) => {
      section.style.animationDelay = `${index * 0.1}s`
    })

    // Create floating particles
    const createParticles = () => {
      const particlesContainer = document.createElement('div')
      particlesContainer.className = 'particles-container'
      document.body.appendChild(particlesContainer)

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.left = `${Math.random() * 100}%`
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`
        particle.style.animationDelay = `${Math.random() * 5}s`
        particle.style.width = `${Math.random() * 5 + 2}px`
        particle.style.height = particle.style.width
        particlesContainer.appendChild(particle)
      }
    }

    createParticles()

    return () => {
      const particles = document.querySelector('.particles-container')
      if (particles) particles.remove()
    }
  }, [])

  return (
    <div className="home-container" ref={homeRef}>
      <Hero />
      <div className="wave-separator">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <About />
      <Events />
      <Technology />
      <Sports />
      <Gallery />
      <Videos />
      <Contact />
    </div>
  )
}

export default Home