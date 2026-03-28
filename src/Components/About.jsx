const About = () => {
  return (
    <section className="section" id="about">
      <h2>🏫 About Our School 🏫</h2>
      
      <div className="about-container">
        <div className="about-content">
          <p className="about-description">
            Sunanda Vidyaniketan & Vitthalrao Shinde Jr. College, Tembhurni is committed to providing 
            quality education with a perfect blend of modern technology, cultural values, and holistic 
            development. Our institution strives to nurture young minds into responsible, innovative, 
            and compassionate global citizens.
          </p>
          
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">25+</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Students Enrolled</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">20+</div>
              <div className="stat-label">Expert Faculty</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Passing Percentage</div>
            </div>
          </div>
          
          <div className="about-values">
            <h3>Our Core Values</h3>
            <div className="values-grid">
              <div className="value-item">
                <span className="value-icon">📚</span>
                <h4>Quality Education</h4>
                <p>Excellence in academics with innovative teaching methods</p>
              </div>
              <div className="value-item">
                <span className="value-icon">💡</span>
                <h4>Innovation</h4>
                <p>Encouraging creative thinking and problem-solving skills</p>
              </div>
              <div className="value-item">
                <span className="value-icon">🤝</span>
                <h4>Values & Ethics</h4>
                <p>Building strong moral character and social responsibility</p>
              </div>
              <div className="value-item">
                <span className="value-icon">🌍</span>
                <h4>Global Outlook</h4>
                <p>Preparing students for international opportunities</p>
              </div>
              <div className="value-item">
                <span className="value-icon">🏆</span>
                <h4>Excellence</h4>
                <p>Striving for the highest standards in all endeavors</p>
              </div>
              <div className="value-item">
                <span className="value-icon">🤗</span>
                <h4>Inclusivity</h4>
                <p>Welcoming students from all backgrounds with equal opportunities</p>
              </div>
            </div>
          </div>
          
          <div className="about-mission-vision">
            <div className="mission-card">
              <h3>🎯 Our Mission</h3>
              <p>To empower students with knowledge, skills, and values that enable them to become 
              responsible citizens and leaders of tomorrow. We strive to create a nurturing environment 
              that fosters academic excellence, personal growth, and social responsibility.</p>
            </div>
            <div className="vision-card">
              <h3>👁️ Our Vision</h3>
              <p>To be a center of educational excellence that transforms lives through quality education, 
              innovative teaching, and holistic development. We envision a future where every student 
              achieves their full potential and contributes meaningfully to society.</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: left;
        }
        
        .about-description {
          font-size: 18px;
          line-height: 1.8;
          color: #2c3e50;
          text-align: justify;
          margin-bottom: 40px;
          padding: 0 20px;
        }
        
        /* Stats Section */
        .about-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
          margin: 50px 0;
          padding: 0 20px;
        }
        
        .stat-card {
          background: linear-gradient(135deg, #f8f9ff, #ffffff);
          padding: 30px 20px;
          text-align: center;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          border: 1px solid rgba(0,212,255,0.1);
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.12);
          border-color: rgba(0,212,255,0.3);
        }
        
        .stat-number {
          font-size: 42px;
          font-weight: bold;
          background: linear-gradient(135deg, #00d4ff, #ec489a);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 10px;
        }
        
        .stat-label {
          font-size: 16px;
          color: #2c3e50;
          font-weight: 500;
        }
        
        /* Values Section */
        .about-values {
          margin: 50px 0;
          padding: 0 20px;
        }
        
        .about-values h3 {
          text-align: center;
          font-size: 32px;
          color: #0a2540;
          margin-bottom: 30px;
          position: relative;
          display: inline-block;
          width: 100%;
        }
        
        .about-values h3::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #00d4ff, #ec489a);
          border-radius: 3px;
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-top: 30px;
        }
        
        .value-item {
          background: white;
          padding: 25px;
          border-radius: 15px;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          border: 1px solid #e0e0e0;
        }
        
        .value-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.12);
          border-color: #00d4ff;
        }
        
        .value-icon {
          font-size: 48px;
          display: block;
          margin-bottom: 15px;
        }
        
        .value-item h4 {
          font-size: 20px;
          color: #0a2540;
          margin-bottom: 12px;
        }
        
        .value-item p {
          font-size: 14px;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }
        
        /* Mission Vision Section */
        .about-mission-vision {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          margin: 50px 0;
          padding: 0 20px;
        }
        
        .mission-card, .vision-card {
          padding: 35px;
          border-radius: 20px;
          transition: all 0.3s ease;
        }
        
        .mission-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        
        .vision-card {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
        }
        
        .mission-card:hover, .vision-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        }
        
        .mission-card h3, .vision-card h3 {
          font-size: 28px;
          margin-bottom: 20px;
          text-align: center;
        }
        
        .mission-card p, .vision-card p {
          font-size: 16px;
          line-height: 1.8;
          text-align: justify;
          margin: 0;
        }
        
        /* Responsive Design */
        @media (max-width: 1024px) {
          .about-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .about-description {
            font-size: 16px;
            line-height: 1.6;
            padding: 0 15px;
            text-align: left;
          }
          
          .about-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            padding: 0 15px;
          }
          
          .stat-number {
            font-size: 32px;
          }
          
          .stat-label {
            font-size: 14px;
          }
          
          .about-values h3 {
            font-size: 28px;
          }
          
          .values-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 0 10px;
          }
          
          .value-item {
            padding: 20px;
          }
          
          .value-item h4 {
            font-size: 18px;
          }
          
          .about-mission-vision {
            grid-template-columns: 1fr;
            gap: 25px;
            padding: 0 15px;
          }
          
          .mission-card, .vision-card {
            padding: 25px;
          }
          
          .mission-card h3, .vision-card h3 {
            font-size: 24px;
          }
          
          .mission-card p, .vision-card p {
            font-size: 14px;
            line-height: 1.6;
          }
        }
        
        @media (max-width: 480px) {
          .about-stats {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          
          .about-description {
            font-size: 14px;
            padding: 0 10px;
          }
          
          .value-item p {
            font-size: 13px;
          }
        }
        
        /* Animation for stats */
        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .stat-card {
          animation: countUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .stat-card:nth-child(1) { animation-delay: 0.1s; }
        .stat-card:nth-child(2) { animation-delay: 0.2s; }
        .stat-card:nth-child(3) { animation-delay: 0.3s; }
        .stat-card:nth-child(4) { animation-delay: 0.4s; }
        
        /* Text alignment improvements */
        .about-content {
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
        
        .about-description {
          word-spacing: normal;
          letter-spacing: normal;
        }
        
        /* Ensure proper text wrapping */
        .value-item p, 
        .mission-card p, 
        .vision-card p {
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
        }
      `}</style>
    </section>
  )
}

export default About