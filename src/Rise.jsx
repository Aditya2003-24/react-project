import Card from "react-bootstrap/Card";
import img from "./IMAGES/download.jpeg"
function BasicExample() {
  return (
    <>
      <div className="rise" data-aos="zoom-out">
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title style={{ color: "red", height: "100px" }}>
                #1 in SUVs with revenuemarket share at 23%,up 200 bps,SUV
                volumes up 20% in Q3.
              </Card.Title>
            </Card.Body>
            <Card.Img variant="top" src={img} style={{ height: "400px" }} />
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title style={{ color: "red", height: "100px" }}>
                #1 in Tractor: market share at 44.2%,up 240 bps.
              </Card.Title>
            </Card.Body>
            <Card.Img variant="top" src={img} style={{ height: "400px" }} />
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title style={{ color: "red", height: "100px" }}>
                Tech Mahindra EBIT up 480 bps, continued focus on margin
                expansion.
              </Card.Title>
            </Card.Body>
            <Card.Img variant="top" src={img} style={{ height: "400px" }} />
          </Card>
        </div>
        {/* <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>#1 in SUVs with revenue</Card.Title>
            </Card.Body>
          </Card>
        </div> */}
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title style={{ color: "red", height: "100px" }}>
                Mahindra Lifespaces residential pre-sales of Rs 334 cr.
              </Card.Title>
            </Card.Body>
            <Card.Img variant="top" src={img} style={{ height: "400px" }} />
          </Card>
        </div>
      </div>
    </>
  );
}

export default BasicExample;
