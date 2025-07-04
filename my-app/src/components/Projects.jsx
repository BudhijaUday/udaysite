import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import subdub from '../assets/projectimg/subdub.jpg';
import deploy from '../assets/projectimg/deploy.png';
import pdfq from '../assets/projectimg/pdfq.png';
import metro from '../assets/projectimg/metro.png';


export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "SubSnap",
      description: "Built a modular subscription management API using Node.js and Express.js that auto-parses email data to track renewal dates, pricing, and terms. • Integrated middleware, controllers, and services for a scalable backend • Designed efficient MongoDB schemas, improving query speed by 40 • Helped users avoid missed renewals through automated reminders ",
      // description: "Integrated middleware, controllers, and services for a scalable backend",
      image:subdub,
      // image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&h=300&fit=crop",
      technologies: ["Javascript", "Node JS", "MongoDB"],
      codeLink: "https://github.com/BudhijaUday/subscription_api",
      liveLink: null
    },
    {
      id: 1,
      title: "JamRoll.AI",
      description: "• Designed AI-driven feature rollout system to trigger smart rollbacks based on real-time metrics and user feedbacks • Integrated CI/CD pipelines using GitHub Actions and containerized using Docker",
      image: deploy,
      technologies: ["Python", "Pytorch", "React", "NodeJS"],
      codeLink: "src/assets/deploy.png",
      liveLink: null
    },
    {
      id: 2,
      title: "PDF Query App",
      description: "CLI tool that parses educational PDFs and answers questions in natural language,Converts raw PDFs into structured text enabling GPT-powered Q&A",
      image: pdfq,
      technologies: ["Python", "LangChain", "OpenAI"],
      codeLink: "https://github.com/BudhijaUday/PDFques",
      liveLink: null
    },
    {
      id: 2,
      title: "Metro Map",
      description: "Command-line system computing shortest path and fare between metro stations using Dijkstra’s algorithm, Designed graph-based city-scale navigation logic",
      image: metro,
      technologies: ["Java"],
      codeLink: "https://github.com/BudhijaUday/Metro-App-in-java",
      liveLink: null
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
