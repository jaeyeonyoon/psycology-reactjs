import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto max-w-7xl bg-blue-400">
      {/* TODO: Move Navbar to it's own component? Figure out how to make router behave when you call it from outside App.tsx (maybe nested routes?) */}
      <Router>
        <nav
          className="flex items-center justify-between py-4 bg-yellow-100"
          role="navigation"
        >
          <div className="flex">
            <img className="h-8 w-auto" src="./src/assets/osmanthus.png"></img>
            <Link to="/">{t('jb_psychology')}</Link>
          </div>

          <ul className="flex gap-6">
            <li>
              <Link to="/">{t('home')}</Link>
            </li>
            <li>
              <Link to="/about">{t('about')}</Link>
            </li>
            <li>
              <Link to="/contact">{t('contact')}</Link>
            </li>
          </ul>
        </nav>
        <div className="bg-green-400">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>

      {/* TODO: Footer with navigation? */}
      <footer className="bg-gray-200 p-4 text-center">
        © 2027 JB Psychology
      </footer>
    </div>
  );
}

export default App;
