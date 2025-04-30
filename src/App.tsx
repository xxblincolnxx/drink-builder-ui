import { useLayoutEffect } from 'react';

function App() {
  // Set the theme based on the user's preference
  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <>
      <h1>Hello world</h1>
    </>
  );
}

export default App;
