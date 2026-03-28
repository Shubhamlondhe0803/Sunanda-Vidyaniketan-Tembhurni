import { useState, useEffect } from "react"

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sunanda Vidyaniketan</h3>
          <p>Nurturing minds, building futures</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📍 Tembhurni, Maharashtra</p>
          <p>📞 +91 9860050030</p>
          <p>✉️ svt55@gmail.com</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" target="_blank">📘 Facebook</a>
            <a href="https://www.instagram.com/sunanda_vidyaniketan_tembhurni?igsh=MWNlMGs1OHd4dnB5NQ==" target="_blank">📸 Instagram</a>
            <a href="#" target="_blank">🐦 Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {year} Sunanda Vidyaniketan & Vitthalrao Shinde Jr.College | All Rights Reserved</p>
        <p className="design-credit">Designed with ❤️ for Education</p>
        <br />
        <p>Designed By : Shubham Londhe</p>
        <p>For More Info Contact : shubhamlondhe057@gmail.com</p>
      </div>
      
      <style>{`
        footer {
          background: linear-gradient(135deg, #0a2540, #144272);
          color: white;
          position: relative;
          overflow: hidden;
        }
        
        footer::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(0,212,255,0.05), transparent);
          animation: rotate 20s linear infinite;
          pointer-events: none;
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          position: relative;
          z-index: 1;
        }
        
        .footer-section h3, .footer-section h4 {
          margin-bottom: 15px;
          color: #00d4ff;
        }
        
        .footer-section ul {
          list-style: none;
          padding: 0;
        }
        
        .footer-section ul li {
          margin: 10px 0;
        }
        
        .footer-section ul li a {
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .footer-section ul li a:hover {
          color: #00d4ff;
          transform: translateX(5px);
          display: inline-block;
        }
        
        .social-links {
          display: flex;
          gap: 15px;
          flex-direction: column;
        }
        
        .social-links a {
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .social-links a:hover {
          color: #00d4ff;
          transform: translateX(5px);
        }
        
        .footer-bottom {
          text-align: center;
          padding: 20px;
          border-top: 1px solid rgba(255,255,255,0.1);
          position: relative;
          z-index: 1;
        }
        
        .design-credit {
          margin-top: 10px;
          font-size: 12px;
          opacity: 0.8;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .social-links {
            flex-direction: row;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer