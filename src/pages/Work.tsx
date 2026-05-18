import Projects from '../components/Projects/Projects';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

function Work() {
  useDocumentTitle('Work');
  return <Projects />;
}

export default Work;