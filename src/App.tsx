import { Loader } from './components/Loader/Loader';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { MenuSection } from './components/MenuSection/MenuSection';
import { Footer } from './components/Footer/Footer';
import { menuData } from './data/menu';
import './App.css';

function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <div className="menu-sections-wrapper">
          {menuData.map((section) => {
            const sectionBg = section.id === 'cold-drinks' ? '#0d1117' : '#17120d';
            return (
              <div key={section.id} className={`menu-group menu-group--${section.id}`} style={{ background: sectionBg }}>
                <header className="group-header">
                  <h2 className="outlined-text">{section.title}</h2>
                </header>
                <div className="categories-grid">
                  {section.categories.map((category) => (
                    <MenuSection key={category.id} category={category} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
