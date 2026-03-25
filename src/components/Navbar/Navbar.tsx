import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const { t } = useTranslation()

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
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
