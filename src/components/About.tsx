import { useTranslation } from "react-i18next";


function About() {
  const { t } = useTranslation();

  return (
    <div id="about">
      <h2>{t('about_page')}</h2>
      <p>This is the about page</p>
    </div>
  );
}

export default About;