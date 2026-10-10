import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';
import Container from './Container';

function Navbar() {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <nav className="fixed inset-x-0 top-4 z-20 mx-auto flex w-[calc(100%-2rem)] max-w-7xl items-center justify-between rounded-full p-5 font-semibold shadow backdrop-blur-lg inset-ring inset-ring-white/70">
          <div className="flex">
            <HashLink smooth to="#home">
              {t('jb_psychology')}
            </HashLink>
          </div>

          {/* TODO: Collapse into menu based on media size */}
          {/* TODO: Make link text more visible */}
          <ul className="flex gap-6">
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
