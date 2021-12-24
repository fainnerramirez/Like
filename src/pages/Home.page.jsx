import { Container } from "react-bootstrap";
import CardComponent from "../components/Card.component";
import NavbarComponent from "../sections/Navbar.component";

const HomePage = () => {
  return (
    <Container>
      <NavbarComponent />;
      <CardComponent />
    </Container>
  );
};

export default HomePage;
