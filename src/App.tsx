import { useLayoutEffect } from 'react';
import GlobalWrapper from './layout/pages/GlobalWrapper';

function App() {
  // Set the theme based on the user's preference
  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'; // TODO: get this from Dexie instead of localStorage - Not set up yet
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <>
      <GlobalWrapper />
    </>
  );
}

export default App;
