export type CardProp = {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
};

function Card({ cardProp }: { cardProp: CardProp }) {
  return (
    <div className="max-w-2xs overflow-hidden justify-center bg-white p-4 shadow rounded inset-ring inset-ring-gray-950/5">
      <img className="w-full" src={cardProp.imgUrl} alt="Card Image" />
      <div className="px-6 py-4">
        <h3 className="text-xl text-black/80 font-bold">{cardProp.title}</h3>
        <p>{cardProp.description}</p>
      </div>
    </div>
  );
}

export default Card;
