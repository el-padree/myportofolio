import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import './App.css';
import './index.css';
import Navigation from './sections/Navigation';
import Home from './sections/Home';
import Biodata from './sections/Biodata';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Rubic from './sections/Rubic';
import Parallax from './sections/Parallax';
import ModalExample from './components/ModalExample';
import LoadingWave from './components/LoadingWave';
import Footer from './sections/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [isExit, setIsExit] = useState(false);
  const [language, setLanguage] = useState(() => localStorage.getItem('portfolio-language') || 'en');

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  const handleLanguageChange = (nextLanguage) => {
    localStorage.setItem('portfolio-language', nextLanguage);
    window.location.reload();
  };

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: false,
    });

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsExit(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleTransitionEnd = () => {
    if (isExit){
      setLoading(false);
    }
  }
  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.1 }
    );

    const revealItems = document.querySelectorAll('.fade-in-item');
    revealItems.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.08}s`;
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, [loading]);

  if (loading) {
    return (
      <div 
        className={`app-loading ${isExit ? 'slide-out' : ''}`}
        onTransitionEnd={handleTransitionEnd}    
      >
        <LoadingWave />
      </div>
    );
  }

  return (
    <React.Fragment>
      <title>Hanifadillah | Portfolio</title>
      <Navigation language={language} onLanguageChange={handleLanguageChange} />
      <Home id="home" language={language} />
      <Parallax language={language} />
      <Biodata id="about" language={language} />
      <Rubic language={language} />
      <Projects language={language} />
      <Experience language={language} />
      {/* <ModalExample /> */}
      <Footer language={language} />
    </React.Fragment>
  );
}

export default App;
