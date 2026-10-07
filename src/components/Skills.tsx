import Cards, { type CardsProp } from "./Cards";
import Container from "./Container";

function Skills() {
  const cardsProp: CardsProp = {
      title: 'specialties_and_expertise',
      description: 'how_i_can_help',
    };

  return (
    <Container>
      <div id="skills">
        <Cards cardsProp={cardsProp} />
      </div>
    </Container>
  );
}

export default Skills;