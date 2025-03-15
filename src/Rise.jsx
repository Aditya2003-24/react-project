import Card from "react-bootstrap/Card";
import img from "./IMAGES/download.jpeg"
function BasicExample() {
  return (
    <>
      <div className="rise">
        <div>
          <Card style={{ width: "18rem"}}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>#1 in SUVs with revenue</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>#1 in SUVs with revenue</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>#1 in SUVs with revenue</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>#1 in SUVs with revenue</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default BasicExample;
