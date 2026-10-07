import { useTranslation } from 'react-i18next';
import type { CardProp } from './Card';
import Card from './Card';

export type CardsProp = {
  title: string;
  description: string;
};

function Cards({ cardsProp }: { cardsProp: CardsProp }) {
  const { t } = useTranslation();

  const cardprops: CardProp[] = [
    {
      id: 0,
      title: 'Anxiety',
      description: '',
      imgUrl: './src/assets/kite.JPG',
    },
    {
      id: 1,
      title: 'Behavioural Issues',
      description: '',
      imgUrl: './src/assets/kite.JPG',
    },
    {
      id: 2,
      title: 'Coping Skills',
      description: '',
      imgUrl: './src/assets/kite.JPG',
    },
    {
      id: 3,
      title: 'Depression',
      description: '',
      imgUrl: './src/assets/kite.JPG',
    },
    { id: 4, title: 'Grief', description: '', imgUrl: './src/assets/kite.JPG' },
    {
      id: 5,
      title: 'Life Transitions',
      description: '',
      imgUrl: './src/assets/kite.JPG',
    },
    {
      id: 6,
      title: 'Self Esteem',
      description: '',
      imgUrl: './src/assets/kite.JPG',
    },
    {
      id: 7,
      title: 'Sleep or Insomnia',
      description: '',
      imgUrl: './src/assets/kite.JPG',
    },
    {
      id: 8,
      title: 'Stress',
      description: '',
      imgUrl: './src/assets/kite.JPG',
    },
    {
      id: 9,
      title: "Women's Issues",
      description: '',
      imgUrl: './src/assets/kite.JPG',
    },
  ];

  return (
    <section className="flex flex-col p-8 items-center justify-center min-h-screen">
      <div className="mb-10">
        <h1 className="text-6xl md:text-7xl text-black font-semibold">
          {t(cardsProp.title)}
        </h1>
        <p className="text-xl text-black/80 font-bold w-1/2 min-w-90">
          {t(cardsProp.description)}
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
        {cardprops.map((card) => (
          <Card key={card.id} cardProp={card} />
        ))}
      </div>
    </section>
  );
}

export default Cards;
