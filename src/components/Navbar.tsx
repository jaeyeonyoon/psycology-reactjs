import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Container from './Container';

function Navbar() {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <nav
          className="flex items-center justify-between px-4 py-4 border-b text-black font-semibold"
          role="navigation"
        >
          <div className="flex">
            <Link to="/">{t('jb_psychology')}</Link>
          </div>

          {/* TODO: Collapse into menu based on media size */}
          <ul className="flex gap-6 text-black">
            <li>
              <HashLink to="/">{t('home')}</HashLink>
            </li>
            <li>
              <HashLink smooth to="#about">
                {t('about')}
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#skills">
                {t('skills')}
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#contact">
                {t('contact')}
              </HashLink>
            </li>
          </ul>
        </nav>
      </Container>
    </>
  );
}

export default Navbar;