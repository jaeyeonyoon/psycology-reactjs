import { useTranslation } from "react-i18next";
import Card, { type CardProp } from './Card';

function Home() {
  const { t } = useTranslation();
  const cardPropTest: CardProp = {
    title: 'Test CardProp',
    description: 'This is a test description',
    imgLink: './src/assets/osmanthus.png',
    imgAlt: 'Osmanthus',
  };

  // TODO: Fill homepage with content
  return (
    <div className="grid grid-cols-1 gap-6">
      <Card cardProp={cardPropTest} />
      <div className="bg-white p-4 shadow rounded">Card 1</div>
      <div className="bg-white p-4 shadow rounded">Card 1</div>
      <div className="bg-white p-4 shadow rounded">Card 1</div>
    </div>
  );
}

export default Home;