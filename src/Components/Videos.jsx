import JanBhashan from "../assets/videos/26 Jan Bhashan.mp4"
import Kavayat from "../assets/videos/26 jan Kavayat.mp4"

const videos = [
  { src: JanBhashan, title: "26 Jan Bhashan" },
  { src: Kavayat, title: "Kavayat" },
]

const Videos = () => {
  return (
    <section className="section" id="videos">
      <h2>Video Gallery</h2>
      <div className="video-grid">
        {videos.map((v, i) => (
          <div key={i} className="video-card">
            <video controls>
              <source src={v.src} type="video/mp4" />
            </video>
            <p>{v.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Videos