import { useTranslation } from 'react-i18next'
import '../../App.css'

const Navbar = () => {
  const { t } = useTranslation()

  return (
    <nav className="navbar" role="navigation">
      <div className="navbar-left">
        <img
          className="logo-image"
          src="./src/assets/osmanthus.png"
          alt="logo"
        ></img>
        <a href="/" className="logo-font">
          {t('jb_psycology')}
        </a>
      </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li>
            <a href="/about">{t('about')}</a>
          </li>
          <li>
            <a href="/contact">{t('contact')}</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
