import { useState, useEffect } from "react"
import heroBg from "../assets/images/Main Building.jpeg"

const Hero = () => {
  const [text, setText] = useState("")
  const phrases = ["Education", "Technology", "Culture", "Sports", "Values"]
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !reverse) {
      setReverse(true)
      return
    }

    if (reverse && subIndex === 0) {
      setReverse(false)
      setIndex((prev) => (prev + 1) % phrases.length)
      return
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1))
    }, 200)

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse])

  useEffect(() => {
    setText(phrases[index].substring(0, subIndex))
  }, [subIndex, index, phrases])

  return (
    <section
      className="hero"
      id="home"
      style={{
        backgroundImage: `linear-gradient(rgba(10,37,64,0.6), rgba(10,37,64,0.7)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      <h1>Welcome to Smart School</h1>
      <p>✨ {text}<span className="cursor">|</span> ✨</p>
      <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
        Explore More
      </button>
    </section>
  )
}

export default Hero