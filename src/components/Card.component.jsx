import { useContext } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { contextCharacter } from "../context/Context";
//icons
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const CardComponent = () => {
  const { characterState, characters } = useContext(contextCharacter);

  console.log("characters", characters);

  return (
    <div>
      <div>
        {characterState.length > 0 ? (
          <h3>Número de personajes: {characterState.length}</h3>
        ) : (
          <h3>0</h3>
        )}
      </div>
      <Row xs={1} md={2} lg={4} className="g-4 m-auto">
        {characterState.map((character) => (
          <Col key={character.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={character.image}
                alt={character.name}
              />
              <Card.Body>
                <Card.Title className="text-center">
                  {character.name}
                </Card.Title>
                <Card.Text>Specie: {character.species}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <span className="d-flex justify-content-center">
                  <Button variant="primary m-2 text-center">
                    <span className="d-flex aling-items-center">
                      <span className="m-1">
                        <AiOutlineLike />
                      </span>
                      <span className="m-1">Like</span>
                    </span>
                  </Button>
                  <Button variant="primary m-2">Details</Button>
                </span>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardComponent;
