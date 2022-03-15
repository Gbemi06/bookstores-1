import { Card, Row, Col, Container } from "react-bootstrap";
import books from "../data/sciFi.json";

const LatestRelease = () => {
  return (
    <Container>
      <Row>
        {books.map((book) => (
          <Col md={3} xs={12} key={book.asin}>
            <Card>
              <Card.Img
                className="image-class px-1"
                variant="top"
                src={book.img}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LatestRelease;
