import Welcome from './Welcome';

const GlobalWrapper = () => {
  return (
    <>
      <header>THIS IS MY HEADER</header>
      <nav>THIS IS MY NAV</nav>
      <main>
        <Welcome />
      </main>
    </>
  );
};

export default GlobalWrapper;
