import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SkillsCarousel from './components/SkillsCarousel';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <SkillsCarousel />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
