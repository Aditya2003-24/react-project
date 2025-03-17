import Card from "react-bootstrap/Card";
import image from "./IMAGES/lighthouse-9183463_1280.jpg"
import "./App.css"
import { GoArrowUpRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



function Cards() {

   useEffect(() => {
      AOS.init({
        duration: 800,
        once: false,
      });
    }, []);
  return (
    <>
      <div style={{ textAlign: "center", fontFamily:"initial" }} data-aos="fade-up">
        <h1>What we do</h1>
      </div>

      <div style={{ textAlign: "center",fontFamily:"initial" }} data-aos="fade-up">
        <h4>
          We bring together diverse, future-facing industries and communities to
          co-create a positive world, where one
          <br /> enables the other to Rise.
        </h4>
      </div>
      <div className="carsec" data-aos="fade-up">
        <div>
          <Card className="Card">
            <Card.Img src={image} alt="Card image" className="img" />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div>
          <Card className="Card">
            <Card.Img src={image} alt="Card image" className="img" />
            <Card.ImgOverlay>
              <Card.Text className="do">
                Action
                <GoArrowUpRight />
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div>
          <Card className="Card">
            <Card.Img src={image} alt="Card image" className="img" />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>

      {/* second div */}

      <div className="carsec" data-aos="fade-up">
        <div>
          <Card className="Card">
            <Card.Img src={image} alt="Card image" className="img" />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div>
          <Card className="Card">
            <Card.Img src={image} alt="Card image" className="img" />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div>
          <Card className="Card">
            <Card.Img src={image} alt="Card image" className="img" />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>

      <div style={{ textAlign: "center",fontFamily:"initial" }} data-aos="fade-up">
        <h1>Rise to create value</h1>
        <h5>Mahindra Group's Financial Highlights</h5>
      </div>




  

    </>
  );
}

export default Cards;
