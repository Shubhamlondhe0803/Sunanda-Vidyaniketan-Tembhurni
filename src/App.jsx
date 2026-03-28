import { useEffect } from "react"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Footer from "./Components/Footer"
import "./App.css"

function App() {
  useEffect(() => {
    // Scroll reveal observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" })

    // Observe all sections
    document.querySelectorAll('.section, .cards, .gallery, .video-grid').forEach(el => {
      observer.observe(el)
    })

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      })
    })

    // Parallax effect for hero
    window.addEventListener('scroll', () => {
      const hero = document.querySelector('.hero')
      if (hero) {
        const scrolled = window.pageYOffset
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px'
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App