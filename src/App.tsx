import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout/Layout';
import PageTransition from './components/PageTransition/PageTransition';
import Home from './pages/Home';
import Work from './pages/Work';
import WritingPage from './pages/WritingPage';
import About from './pages/About';

type Theme = 'light' | 'dark';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
        <Route path="/writing" element={<PageTransition><WritingPage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('theme');
    return (stored === 'light' || stored === 'dark') ? stored : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <BrowserRouter>
      <Layout theme={theme} onToggleTheme={toggleTheme}>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;