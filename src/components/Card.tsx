export type CardProp = {
  title: string;
  description?: string;
  imgLink?: string;
  imgAlt?: string;
};

function Card({ cardProp } : { cardProp: CardProp }) {
  return (
    <div className="overflow-hidden">
      <img className="w-full" src="{cardProp.imgLink}" alt="{cardProp.imgAlt}" />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{cardProp.title}</h2>
        <p className="text-gray-700 text-base">{cardProp.description}</p>
      </div>
    </div>
  );
}

export default Card;