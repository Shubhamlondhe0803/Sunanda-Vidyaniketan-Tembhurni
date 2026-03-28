import { useState, useEffect } from "react"
import logo from "../assets/images/School Logo.jpeg"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo-container" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <img src={logo} alt="school logo" className="logo-img"/>
        <div className="logo">
          Sunanda Vidyaniketan & Vitthalrao Shinde Jr.College Tembhurni
        </div>
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li><a href="#home" onClick={()=>setOpen(false)}>🏠 Home</a></li>
        <li><a href="#about" onClick={()=>setOpen(false)}>📖 About</a></li>
        <li><a href="#events" onClick={()=>setOpen(false)}>🎉 Events</a></li>
        <li><a href="#tech" onClick={()=>setOpen(false)}>💻 Technology</a></li>
        <li><a href="#sports" onClick={()=>setOpen(false)}>⚽ Sports</a></li>
        <li><a href="#gallery" onClick={()=>setOpen(false)}>📸 Gallery</a></li>
        <li><a href="#contact" onClick={()=>setOpen(false)}>📞 Contact</a></li>
      </ul>

      <style>{`
        .navbar.scrolled {
          background: rgba(10, 37, 64, 0.98);
          box-shadow: 0 5px 20px rgba(0,0,0,0.3);
          backdrop-filter: blur(15px);
        }
        
        .logo-container {
          cursor: pointer;
        }
      `}</style>
    </nav>
  )
}

export default Navbar