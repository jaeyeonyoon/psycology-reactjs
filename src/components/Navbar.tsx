import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  const { t } = useTranslation();

  return (
    <>
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
              <HashLink to="/">{t('home')}</HashLink>
            </li>
            <li>
              <HashLink smooth to="#about">
                {t('about')}
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#contact">
                {t('contact')}
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;