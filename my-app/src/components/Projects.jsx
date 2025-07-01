import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Metro App in Java",
      description: "User can view stations, map, shortest distances, travel costs, and times.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&h=300&fit=crop",
      technologies: ["Java"],
      codeLink: "https://github.com/BudhijaUday/Metro-App-in-java",
      liveLink: null
    },
    {
      id: 2,
      title: "Sorting Visualizer",
      description: "Interactive visualization of sorting algorithms with animations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript"],
      codeLink: "https://github.com/BudhijaUday/Sorting-Visualizer",
      liveLink: "https://budhijauday.github.io/Sorting-Visualizer/"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Work</h2>
        <div>
          {projects.map((project) => (
            <div key={project.id} className="project">
              <div className="project-image">
                <div className="browser-mockup">
                  <div className="browser-dots">
                    <div className="dot-red"></div>
                    <div className="dot-yellow"></div>
                    <div className="dot-green"></div>
                    <div className="dot-bar"></div>
                  </div>
                </div>
                <div className="browser-content">
                  <img src={project.image} alt={project.title} className="project-img" />
                </div>
                <div className="project-links">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                      <ExternalLink size={16} /> Try it
                    </a>
                  )}
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    <Code size={16} /> View Code
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div>
                  <h4 className="tech-title">Technologies used</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
