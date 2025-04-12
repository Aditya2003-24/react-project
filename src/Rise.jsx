import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import img from "./IMAGES/OIP (2).jpeg";
import img1 from "./IMAGES/jeep-7853620_1280.webp";
import img2 from "./IMAGES/OIP.jpeg";
import img3 from "./IMAGES/OIP (1).jpeg";

function BasicExample() {
  return (
    <Container fluid className="rise py-4" data-aos="zoom-out">
      <Row className="justify-content-center g-4">
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title style={{ color: "red", height: "100px" }}>
                #1 in SUVs with revenue market share at 23%, up 200 bps, SUV
                volumes up 20% in Q3.
              </Card.Title>
            </Card.Body>
            <Card.Img
              variant="top"
              src={img1}
              style={{ height: "400px", objectFit: "cover" }}
            />
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title style={{ color: "red", height: "100px" }}>
                #1 in Tractor: market share at 44.2%, up 240 bps.
              </Card.Title>
            </Card.Body>
            <Card.Img
              variant="top"
              src={img2}
              style={{ height: "400px", objectFit: "cover" }}
            />
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title style={{ color: "red", height: "100px" }}>
                Tech Mahindra EBIT up 480 bps, continued focus on margin
                expansion.
              </Card.Title>
            </Card.Body>
            <Card.Img
              variant="top"
              src={img3}
              style={{ height: "400px", objectFit: "cover" }}
            />
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title style={{ color: "red", height: "100px" }}>
                Mahindra Lifespaces residential pre-sales of Rs 334 cr.
              </Card.Title>
            </Card.Body>
            <Card.Img
              variant="top"
              src={img}
              style={{ height: "400px", objectFit: "cover" }}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BasicExample;
