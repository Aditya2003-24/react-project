import Carousel from "react-bootstrap/Carousel";
import img from "./IMAGES/jeep-7577598_1280.jpg";
import img2 from "./IMAGES/vehicle-3206929_1280.jpg";
import img1 from "./IMAGES/car-604019_1280.jpg";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={img} alt="" style={{ width: "100%", height: "700px" }} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} alt="" style={{ width: "100%", height: "700px" }} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img1} alt="" style={{ width: "100%", height: "700px" }} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
