import Card from "react-bootstrap/Card";
import image from "./IMAGES/lighthouse-9183463_1280.jpg"
import "./App.css"
import { GoArrowUpRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

{/* <h2
  class="heading font-regular aos-init aos-animate"
  data-aos="fade-up"
  data-aos-offset="100"
  data-aos-duration="650"
  data-aos-easing="ease-in-out"
>
  What we do
</h2>; */}



function Cards() {

   useEffect(() => {
      AOS.init({
        duration: 800,
        once: false,
      });
    }, []);
  return (
    <>
      <div
        style={{ textAlign: "center", fontFamily: "initial",marginTop:"110px" }}
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-duration="650"
        data-aos-easing="ease-in-out"
      >
        <h1>What we do</h1>
      </div>

      <div
        style={{ textAlign: "center", fontFamily: "initial" }}
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-duration="650"
        data-aos-easing="ease-in-out"
      >
        <h4>
          We bring together diverse, future-facing industries and communities to
          co-create a positive world, where one
          <br /> enables the other to Rise.
        </h4>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap:"wrap",
          gap: "15px",
          marginLeft:"170px",
          marginTop:"90px"
          
        }}
       data-aos="fade-up"
        data-aos-offset="100"
        data-aos-duration="650"
        data-aos-easing="ease-in-out"
      >
       <div>
          <div className="content">
        <p className="pera" style={{display:"flex",marginTop:"80px"}}>Action <span style={{marginTop:"4px",fontSize:"27px"}}><GoArrowUpRight /></span></p>
      </div>
        </div>
        <div>
          <div className="content">
        <p className="pera" style={{display:"flex",marginTop:"80px"}}>Action <span style={{marginTop:"4px",fontSize:"27px"}}><GoArrowUpRight /></span></p>
      </div>
        </div>
        <div>
          <div className="content">
        <p className="pera" style={{display:"flex",marginTop:"80px"}}>Action <span style={{marginTop:"4px",fontSize:"27px"}}><GoArrowUpRight /></span></p>
      </div>
        </div>

             <div>
          <div className="content">
        <p className="pera" style={{display:"flex",marginTop:"80px"}}>Action <span style={{marginTop:"4px",fontSize:"27px"}}><GoArrowUpRight /></span></p>
      </div>
        </div>
        <div>
          <div className="content">
        <p className="pera" style={{display:"flex",marginTop:"80px"}}>Action <span style={{marginTop:"4px",fontSize:"27px"}}><GoArrowUpRight /></span></p>
      </div>
        </div>
        <div>
          <div className="content">
        <p className="pera" style={{display:"flex",marginTop:"80px"}}>Action <span style={{marginTop:"4px",fontSize:"27px"}}><GoArrowUpRight /></span></p>
      </div>
        </div>

        {/* second div */}

        <div>
          <div className="content">
        <p className="pera" style={{display:"flex",marginTop:"80px"}}>Action <span style={{marginTop:"4px",fontSize:"27px"}}><GoArrowUpRight /></span></p>
      </div>
        </div>
       <div>
          <div className="content">
        <p className="pera" style={{display:"flex",marginTop:"80px"}}>Action <span style={{marginTop:"4px",fontSize:"27px"}}><GoArrowUpRight /></span></p>
      </div>
        </div>
        <div>
          <div className="content">
        <p className="pera" style={{display:"flex",marginTop:"80px"}}>Action <span style={{marginTop:"4px",fontSize:"27px"}}><GoArrowUpRight /></span></p>
      </div>
        </div>
      </div>

      <div
        style={{ textAlign: "center", fontFamily: "initial",marginTop:"110px" }}
        data-aos="fade-up"
      >
        <h1>Rise to create value</h1>
        <h5>Mahindra Group's Financial Highlights</h5>
      </div>

      
    </>
  );
}

export default Cards;
