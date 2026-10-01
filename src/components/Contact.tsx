import { useTranslation } from "react-i18next";


function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('contact_page')}</h1>
      <form>
        <label>
          {t('name')}
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          {t('email')}
          <input type="email" name="email" />
        </label>
      </form>
    </>
  );
}

export default Contact;