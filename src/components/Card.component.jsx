import { useContext } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { contextCharacter } from "../context/Context";

const CardComponent = () => {
  const { characterState } = useContext(contextCharacter);

  console.log(characterState);

  return (
    <Row xs={1} md={2} className="g-4">
      {characterState.length > 0 ? (
        <h1>Numero de personajes {characterState.length}</h1>
      ) : (
        <h1>0</h1>
      )}
      {characterState.map((character) => (
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src={character.image}
              alt={character.name}
            />
            <Card.Body>
              <Card.Title>{character.name}</Card.Title>
              <Card.Text>Specie: {character.species}</Card.Text>
              <Card.Text>Gender: {character.gender}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CardComponent;
