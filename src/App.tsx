import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout/Layout';
import PageTransition from './components/PageTransition/PageTransition';
import Loader from './components/Loader/Loader';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

type Theme = 'light' | 'dark';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('theme');
    return (stored === 'light' || stored === 'dark') ? stored : 'light';
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    // Hide loader after 2.2s (matches animation duration + fade out)
    const timer = setTimeout(() => setIsLoaded(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <BrowserRouter>
      {!isLoaded && <Loader />}
      <Layout theme={theme} onToggleTheme={toggleTheme}>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;