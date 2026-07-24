import { ThemeProvider } from '@/context/ThemeContext';
import LoadingScreen from '@/components/LoadingScreen';
import StarCursor from '@/components/StarCursor';
import ScrollProgress from '@/components/ScrollProgress';
import FloatingPlanets from '@/components/FloatingPlanets';
import ThemeToggle from '@/components/ThemeToggle';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/sections/About';
import Gallery from '@/components/sections/Gallery';
import Letters from '@/components/sections/Letters';
import FavoriteThings from '@/components/sections/FavoriteThings';
import Dreams from '@/components/sections/Dreams';
import Music from '@/components/sections/Music';
import Timeline from '@/components/sections/Timeline';
import Footer from '@/components/Footer';

function App() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <ThemeProvider>
      <LoadingScreen />
      <StarCursor />
      <ScrollProgress />
      <ThemeToggle />
      <FloatingPlanets />
      <Navbar />
      <main className="relative">
        <Hero onExplore={() => scrollTo('about')} onMemories={() => scrollTo('timeline')} />
        <About />
        <Gallery />
        <Letters />
        <FavoriteThings />
        <Dreams />
        <Music />
        <Timeline />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
