import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";

function Navbar() {
  const { t } = useTranslation();

  return (
    <Router>
        <nav
          className="flex items-center justify-between px-4 py-4 bg-yellow-100"
          role="navigation"
        >
          <div className="flex">
            <img className="h-8 w-auto" src="./src/assets/osmanthus.png"></img>
            <Link to="/">{t('jb_psychology')}</Link>
          </div>

          {/* TODO: Collapse into menu based on media size */}
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
  );
}

export default Navbar;