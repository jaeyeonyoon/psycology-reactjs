import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-200 p-4 text-center">
        {t('copyright')}
    </footer>);
};

export default Footer;