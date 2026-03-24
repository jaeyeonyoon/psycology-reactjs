import { useTranslation } from "react-i18next";

const Navbar = () => {
    const { t } = useTranslation();

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo">
                    {t("jb_psycology")}
                </a>
            </div>
        </nav>
    );
};

export default Navbar;