import { Loader } from './components/Loader/Loader';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { StatsMarquee } from './components/StatsMarquee/StatsMarquee';
import { MenuSection } from './components/MenuSection/MenuSection';
import { HighlightBanner } from './components/HighlightBanner/HighlightBanner';
import { Footer } from './components/Footer/Footer';
import { menuData } from './data/menu';
import './App.css';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


function App() {
  return (
    <>
      <Loader />
      <Navbar />

      <main>
        <Hero />
        <StatsMarquee />

        <div className="menu-sections-wrapper">
          {menuData.map((section, sectionIdx) => (
            <div key={section.id} className="menu-group">
              {section.categories.map((category, catIdx) => (
                <MenuSection 
                  key={category.id} 
                  category={category} 
                  index={catIdx}
                />
              ))}
              {/* Insert HighlightBanner after the first menu group (Hot Drinks) */}
              {sectionIdx === 0 && <HighlightBanner />}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}


export default App;
