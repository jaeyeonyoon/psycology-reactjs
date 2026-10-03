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
      {/* <nav
        data-text-bright
        data-bg="slate"
        className="fixed w-[95vw] min-w-95 max-w-360 h-16 md:flex  p-4 mx-0 mt-2 top-0 left-1/2 -translate-x-1/2 rounded-full shadow-2xl group 
              data-[bg=stone]:bg-stone-600/40 
              data-[bg=slate]:bg-slate-900/60
              data-[bg=stone]:bg-stone-600/40               
              data-text-bright:**:text-white"
      > */}
      <div className="container mx-auto max-w-7xl bg-blue-400">
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
      </div>
    </Router>
  );
}

export default Navbar;