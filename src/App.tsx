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
        <div className="menu-categories-wrapper">
          {menuData.flatMap(section => section.categories).map((category) => (
            <MenuSection key={category.id} category={category} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
