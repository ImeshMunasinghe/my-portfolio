import Hero from '../components/Hero/Hero';
import About from './About';
import Projects from '../components/Projects/Projects';
import Writing from '../components/Writing/Writing';
import Contact from './Contact';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import SideNav from '../components/SideNav/SideNav';
import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'writing', label: 'Blogs' },
  { id: 'contact', label: 'Contact' }
];

function Home() {
  useDocumentTitle('Imesh Munasinghe');
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section crosses the middle of the screen
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const sectionStyle = {
    minHeight: '100vh',
    scrollSnapAlign: 'start',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center'
  };

  return (
    <>
      <SideNav sections={sections} activeSection={activeSection} />
      <div id="hero" style={sectionStyle}><Hero /></div>
      <div id="about" style={sectionStyle}><About /></div>
      <div id="work" style={sectionStyle}><Projects /></div>
      <div id="writing" style={sectionStyle}><Writing /></div>
      <div id="contact" style={sectionStyle}><Contact /></div>
    </>
  );
}

export default Home;