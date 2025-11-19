import Hero from '../components/Hero';

const Home = () => {
  return (
    <main>
      <section className="parallax-hero" style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 2,
      }}>
        <Hero />
      </section>
    </main>
  );
};

export default Home;
