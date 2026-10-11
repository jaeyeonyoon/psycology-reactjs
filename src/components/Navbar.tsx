import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';
import Container from './Container';

function Navbar() {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <nav className="fixed inset-x-0 top-4 z-20 mx-auto flex w-[calc(100%-2rem)] max-w-7xl items-center justify-between rounded-full p-5 font-semibold shadow-2xl bg-gray-600/50 backdrop-blur-lg inset-ring inset-ring-white/70">
          <div className="flex">
            <HashLink smooth to="#home">
              <p className="text-[#FEED9F] font-bold">{t('jb_psychology')}</p>
            </HashLink>
          </div>

          {/* TODO: Collapse into menu based on media size */}
          {/* TODO: Make link text more visible and change the color or add buttons? On hover? */}
          <ul className="flex gap-6">
            <li>
              <HashLink smooth to="#about">
                <p className="text-[#FEED9F] font-bold">{t('about')}</p>
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#skills">
                <p className="text-[#FEED9F] font-bold">{t('skills')}</p>
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#contact">
                <p className="text-[#FEED9F] font-bold">{t('contact')}</p>
              </HashLink>
            </li>
          </ul>
        </nav>
      </Container>
    </>
  );
}

export default Navbar;
