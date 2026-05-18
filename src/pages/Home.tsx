import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Writing from '../components/Writing/Writing';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

function Home() {
  useDocumentTitle('Home');

  return (
    <>
      <Hero />
      <Projects />
      <Writing />
    </>
  );
}

export default Home;