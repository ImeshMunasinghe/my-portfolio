import { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Writing from "./components/Writing/Writing";

type Theme = "light" | "dark";

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem("theme");
    return stored === "light" || stored === "dark" ? stored : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Layout theme={theme} onToggleTheme={toggleTheme}>
      <Hero />
      <Projects />
      <Writing />
    </Layout>
  );
}

export default App;
