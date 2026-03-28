const events = [
  "🎭 Annual Day", "🎪 Cultural Festival", "🕉️ Jayanti Celebration",
  "🏅 Sports Day", "🤖 Tech Fest", "🎓 Graduation Day",
  "🌿 Green Day", "🎨 Art Exhibition"
]

const Events = () => {
  return (
    <section className="section" id="events">
      <h2>📅 Events & Functions 📅</h2>
      <p>Celebrating learning through vibrant events and activities</p>
      <div className="cards">
        {events.map((e,i)=>(
          <div key={i} className="card">
            <div style={{fontSize: '48px', marginBottom: '10px'}}>{e.split(' ')[0]}</div>
            <strong>{e}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Events