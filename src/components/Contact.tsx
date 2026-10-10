import { useTranslation } from "react-i18next";
import Container from './Container';
import EmailRounded from '@mui/icons-material/EmailRounded';
import LocalPhoneRounded from '@mui/icons-material/LocalPhoneRounded';
import HomeRounded from '@mui/icons-material/HomeRounded';

export type ContactProp = {
  title: string;
  info: string;
  icon: React.ReactElement;
};

function Contact() {
  const { t } = useTranslation();

  const contactProps: ContactProp[] = [
    { title: 'email', info: 'email@email.ca', icon: <EmailRounded /> },
    { title: 'phone', info: '(780) 111-2222', icon: <LocalPhoneRounded /> },
    { title: 'address', info: '1234 Test Street', icon: <HomeRounded /> },
  ];

  return (
    <div className="w-full bg-[#FEED9F]">
      <Container>
        <section
          id="contact"
          className="flex flex-col p-8 items-center justify-center min-h-screen"
        >
          <div className="mb-10">
            <h1 className="text-6xl md:text-7xl text-black font-semibold">
              {t('contact_me')}
            </h1>
          </div>

          <div className="flex flex-col">
            {contactProps.map((contactInfo) => (
              <div className="flex flex-row items-center m-3">
                <div className="rounded-full bg-[#F7D327] p-4">
                  {contactInfo.icon}
                </div>
                <div className="flex-col ml-5">
                  <p className="text-xl font-bold">{t(contactInfo.title)}:</p>
                  <p className="text-xl">{contactInfo.info}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}

export default Contact;