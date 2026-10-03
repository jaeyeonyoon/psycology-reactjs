export type CardProp = {
  title: string;
  description: string;
};

function Card({ cardProp }: { cardProp: CardProp }) {
  return (
    <div>
      <div className="justify-center bg-white p-4 shadow rounded">
        <h3>{cardProp.title}</h3>
        <p>{cardProp.description}</p>
      </div>
    </div>
  );
}

export default Card;
