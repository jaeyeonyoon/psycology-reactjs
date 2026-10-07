import { useTranslation } from "react-i18next";
import Footer from '../Footer';
import About from './About';
import Banner, { type BannerProp } from './Banner';
import Navbar from './Navbar';
import Skills from './Skills';

function Home() {
  const { t } = useTranslation();

  const bannerProp: BannerProp = {
    imgUrl: './src/assets/vase.jpg',
    title: 'jicelle_bendico',
    subTitle: 'registered_psychologist',
  };

  return (
    <>
      <Navbar />
      <Banner bannerProp={bannerProp} />
      <About />
      <Skills />
      {/* TODO: Treatment approach from https://www.psychologytoday.com/ca/therapists/jicelle-bendico-edmonton-ab/1571134*/}
      {/* TODO: Contact page */}
      <Footer />
    </>
  );
}

export default Home;