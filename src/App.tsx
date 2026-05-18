import { useState, useEffect } from 'react';
import { RiSunLine, RiMoonLine } from 'react-icons/ri';

type Theme = 'light' | 'dark';

function App() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === 'light' ? <RiMoonLine /> : <RiSunLine />}
      </button>
      <h1>Hello, Portfolio</h1>
    </div>
  );
}

export default App;