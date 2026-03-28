import { useState } from "react"
import Savidhanday from "../assets/images/26 Nov Savidhan.jpeg"
import Dec from "../assets/images/6 Dec 2.jpeg"
import Birthday_Celebration from "../assets/images/Birthday Celebration.jpeg"
import Building from "../assets/images/Building.jpeg"
import Cultral_Day from "../assets/images/Cultral day.jpeg"
import Main_Building from "../assets/images/Main Building.jpeg"
import New_year_Party from "../assets/images/New Year Party.jpeg"
import Rangoli_Sparda from "../assets/images/Rangoli Sparda.jpeg"
import Savitribai_Jayanti from "../assets/images/Savitribai Jayanti.jpeg"
import Sports_Day from "../assets/images/Sports day.jpeg"
import Students from "../assets/images/Students .jpeg"
import Students_Uphar from "../assets/images/Students J1 2.jpeg"
import Students_Uphar2 from "../assets/images/Students j1.jpeg"
import Yoga from "../assets/images/Yoga day.jpeg"
import Zade from "../assets/images/Zade Lava .jpeg"

const images = [
  { src: Savidhanday, title: "Constitution Day" },
  { src: Dec, title: "Students Day Celebration" },
  { src: Birthday_Celebration, title: "Birthday Celebration" },
  { src: Building, title: "School Building" },
  { src: Cultral_Day, title: "Cultural Day" },
  { src: Main_Building, title: "Main Campus" },
  { src: New_year_Party, title: "New Year Celebration" },
  { src: Rangoli_Sparda, title: "Rangoli Competition" },
  { src: Zade, title: "Tree Plantation" },
  { src: Sports_Day, title: "Sports Day" },
  { src: Yoga, title: "Yoga Day" },
  { src: Students, title: "Students Assembly" },
  { src: Students_Uphar, title: "Students Uphar" }

]

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section className="section" id="gallery">
      <h2>📸 Photo Gallery 📸</h2>
      <p>Memorable moments captured in our school</p>
      <div className="gallery">
        {images.map((img, i) => (
          <div key={i} className="img-card" onClick={() => setSelectedImage(img)}>
            <img src={img.src} alt={img.title} />
            <p>{img.title}</p>
          </div>
        ))}
      </div>
      
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage.src} alt={selectedImage.title} />
          <p>{selectedImage.title}</p>
        </div>
      )}
      
      <style>{`
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.9);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 2000;
          cursor: pointer;
        }
        .lightbox img {
          max-width: 90%;
          max-height: 80%;
          object-fit: contain;
          border-radius: 10px;
        }
        .lightbox p {
          color: white;
          margin-top: 20px;
          font-size: 18px;
        }
      `}</style>
    </section>
  )
}

export default Gallery