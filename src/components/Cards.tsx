import { useTranslation } from 'react-i18next';
import type { CardProp } from './Card';
import Card from './Card';

export type CardsProp = {
  title: string;
  description?: string;
};

function Cards({ cardsProp }: { cardsProp: CardsProp }) {
  const { t } = useTranslation();

  const cardprops: CardProp[] = [
    { id: 0, title: 'Here is my title', description: 'Here is a description' },
    { id: 1, title: 'Here is my title', description: 'Here is a description' },
    { id: 2, title: 'Here is my title', description: 'Here is a description' },
  ];

  return (
    <>
      {/* TODO: use cardProps */}
      <section className="flex flex-col h-screen p-8 items-center justify-center">
        <h1 className="text-6xl md:text-7xl text-white font-semibold w-1/2">
          {cardsProp.title}
        </h1>
        <p className="text-xl text-white/80 font-bold w-1/2 min-w-90">
          {cardsProp.description}
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
          {cardprops.map((card) => (
            <Card key={card.id} cardProp={card} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Cards;
