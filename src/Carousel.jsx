import Carousel from "react-bootstrap/Carousel";
import img from "./IMAGES/Mahindra_BE-6&-XEV-9-Banner-Global-Premiere-Banner_REVISED.webp";
import img2 from "./IMAGES/pexels-imadclicks-7402641.jpg";
// import img1 from "./IMAGES/car-604019_1280.jpg";
import img5 from "./IMAGES/Mahindra-Home-Banner-XUV700-WT.webp"

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
        <img src={img5} alt="" style={{ width: "100%", height: "700px" }} />
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
      {/* <Carousel.Item>
        <img src={img1} alt="" style={{ width: "100%", height: "700px" }} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default UncontrolledExample;
