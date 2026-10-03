import { useTranslation } from 'react-i18next';
import type { CardProp } from './Card';
import Card from './Card';

export type CardsProp = {
  title: string;
  description?: string;
  imgLink?: string;
  imgAlt?: string;
};

function Cards({ cardsProp }: { cardsProp: CardsProp }) {
  const { t } = useTranslation();

  const cardprops: CardProp[] = [
    { title: "Here is my title", description: "Here is a description" },
    { title: "Here is my title", description: "Here is a description" },
    { title: "Here is my title", description: "Here is a description" },
    { title: "Here is my title", description: "Here is a description" },
    { title: "Here is my title", description: "Here is a description" },
  ];

  return (
    <>
    {/* TODO: use cardProps */}
      <section className="flex flex-col h-screen w-screen p-8 items-center justify-center">
        <h1 className="text-6xl md:text-7xl text-white font-semibold w-1/2">
          Here are my traits 
        </h1>
        <p className="text-xl text-white/80 font-bold w-1/2 min-w-90">
          These be some traits.
        </p>
      </section>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
        {/* TODO: forloop of cardprops */}
        {/* <Card cardProp={} /> */}
      </div>
    </>
  );
}

export default Cards;
