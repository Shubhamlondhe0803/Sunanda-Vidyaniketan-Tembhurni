const tech = [
  "💻 Computer Lab", "📽 Smart Classrooms", "🌐 Internet Facility",
  "🤖 AI Learning", "📚 Digital Library", "🔬 Science Lab",
  "🎨 Robotics Lab", "🧪 Innovation Hub"
]

const Technology = () => {
  return (
    <section className="section" id="tech">
      <h2>🚀 Technology & Labs 🚀</h2>
      <p>Cutting-edge technology for future-ready education</p>
      <div className="cards">
        {tech.map((t,i)=>(
          <div key={i} className="card">
            <div style={{fontSize: '48px', marginBottom: '10px'}}>{t.split(' ')[0]}</div>
            <strong>{t}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Technology