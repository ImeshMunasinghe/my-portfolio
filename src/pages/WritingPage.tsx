import Writing from '../components/Writing/Writing';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

function WritingPage() {
  useDocumentTitle('Writing');
  return <Writing />;
}

export default WritingPage;