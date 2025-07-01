import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SkillsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const skillSets = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "HTML5", icon: "🌐", color: "#ff6b35" },
        { name: "CSS3", icon: "🎨", color: "#264de4" },
        { name: "JavaScript", icon: "⚡", color: "#f0db4f" }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: "💻", color: "#00599c" },
        { name: "C++", icon: "🔧", color: "#f34b7d" },
        { name: "JavaScript", icon: "📱", color: "#61dafb" }
      ]
    },
    {
      title: "Modern Tools",
      skills: [
        { name: "TypeScript", icon: "🔷", color: "#007acc" },
        { name: "React", icon: "⚛️", color: "#61dafb" },
        { name: "Git", icon: "🔀", color: "#f1502f" }
      ]
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % skillSets.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + skillSets.length) % skillSets.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="carousel-container">
          <div className="carousel">
            <h3 className="carousel-title">{skillSets[currentSlide].title}</h3>
            <div className="skills-grid">
              {skillSets[currentSlide].skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon" style={{ backgroundColor: skill.color }}>{skill.icon}</div>
                  <h4 className="skill-name">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-nav prev" onClick={prevSlide}><ChevronLeft size={24} /></button>
          <button className="carousel-nav next" onClick={nextSlide}><ChevronRight size={24} /></button>
          <div className="carousel-dots">
            {skillSets.map((_, index) => (
              <button key={index} className={`dot ${index === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(index)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
