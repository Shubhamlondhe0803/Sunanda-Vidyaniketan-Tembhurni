const sports = [
  "🏏 Cricket", "⚽ Football", "🏀 Basketball", 
  "🏸 Badminton", "🏃 Athletics", "🎾 Tennis",
  "🏊 Swimming", "🤼 Wrestling"
]

const Sports = () => {
  return (
    <section className="section" id="sports">
      <h2>🏆 Sports & Athletics 🏆</h2>
      <p>Excellence in sports with world-class facilities and coaching</p>
      <div className="cards">
        {sports.map((s,i)=>(
          <div key={i} className="card">
            <div style={{fontSize: '48px', marginBottom: '10px'}}>{s.split(' ')[0]}</div>
            <strong>{s}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Sports