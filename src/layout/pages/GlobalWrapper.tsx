import Toast from '../components/Toast';
import Welcome from './Welcome';

const GlobalWrapper = () => {
  return (
    <>
      <header>THIS IS MY HEADER</header>
      <nav>THIS IS MY NAV</nav>
      <main className='p-5'>
        <Toast />
        <Welcome />
      </main>
    </>
  );
};

export default GlobalWrapper;
