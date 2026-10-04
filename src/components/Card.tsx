export type CardProp = {
  id: number;
  title: string;
  description: string;
};

function Card({ cardProp }: { cardProp: CardProp }) {
  return (
    <div className="max-w-2xs overflow-hidden justify-center bg-white p-4 shadow rounded">
      <img
        className="w-full"
        src="./src/assets/osmanthus.png"
        alt="Card Image"
      />
      <div className="px-6 py-4">
        <h3>{cardProp.title}</h3>
        <p>{cardProp.description}</p>
      </div>
    </div>
  );
}

export default Card;
