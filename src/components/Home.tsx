import { useTranslation } from "react-i18next";
import Cards, { type CardsProp } from './Cards';
import Banner, { type BannerProp } from './Banner';

function Home() {
  const { t } = useTranslation();
  const cardPropTest: CardsProp = {
    title: 'Test CardProp',
    description: 'This is a test description',
    imgLink: './src/assets/osmanthus.png',
    imgAlt: 'Osmanthus',
  };

  const bannerProp: BannerProp = {
    bgUrl: './src/assets/big-picture.jpg',
  };

  // TODO: Fill homepage with content
  return (
    <>
      <Banner bannerProp={bannerProp} />
      <div className="container mx-auto max-w-7xl bg-blue-400">
        <Cards cardsProp={cardPropTest} />
      </div>
    </>
  );
}

export default Home;