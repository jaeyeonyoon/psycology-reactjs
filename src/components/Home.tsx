import { useTranslation } from "react-i18next";
import Cards, { type CardsProp } from './Cards';
import Banner, { type BannerProp } from './Banner';
import About from './About';
import Navbar from './Navbar';
import Container from './Container';

function Home() {
  const { t } = useTranslation();
  const cardPropTest: CardsProp = {
    title: 'Test CardProp',
    description: 'This is a test description',
  };

  const bannerProp: BannerProp = {
    imgUrl: './src/assets/big-picture.jpg',
    title: 'welcome',
    subTitle: 'welcome_sub',
  };

  // TODO: Fill homepage with content
  return (
    <>
      <Navbar />
      <Banner bannerProp={bannerProp} />
      <Container>
        <Cards cardsProp={cardPropTest} />
      </Container>
      <About />
    </>
  );
}

export default Home;