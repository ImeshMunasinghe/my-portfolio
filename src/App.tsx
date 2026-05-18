import { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Hero from './components/Hero/Hero';


type Theme = "light" | "dark";

function App() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Layout theme={theme} onToggleTheme={toggleTheme}>
      <Hero />
    </Layout>
  );
}

export default App;
