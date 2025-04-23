
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
      <div
        style={{
          textAlign: "center",
          fontFamily: "initial",
          marginTop: "110px",
        }}
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
      <div id="rase"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          marginLeft: "170px",
          marginTop: "90px",
        }}
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-duration="650"
        data-aos-easing="ease-in-out"
      >
        <div 
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-duration="650"
          data-aos-easing="ease-in-out"
          data-aos-delay="100"
        >
          <div className="content">
            <p className="pera" style={{ display: "flex", marginTop: "80px" }}>
              Action{" "}
              <span style={{ marginTop: "4px", fontSize: "27px" }}>
                <GoArrowUpRight />
              </span>
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-duration="650"
          data-aos-easing="ease-in-out"
          data-aos-delay="400"
        >
          <div className="content1">
            <p className="pera" style={{ display: "flex", marginTop: "80px" }}>
              Action{" "}
              <span style={{ marginTop: "4px", fontSize: "27px" }}>
                <GoArrowUpRight />
              </span>
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-duration="650"
          data-aos-easing="ease-in-out"
          data-aos-delay="700"
        >
          <div className="content2">
            <p className="pera" style={{ display: "flex", marginTop: "80px" }}>
              Action{" "}
              <span style={{ marginTop: "4px", fontSize: "27px" }}>
                <GoArrowUpRight />
              </span>
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-duration="650"
          data-aos-easing="ease-in-out"
          data-aos-delay="100"
        >
          <div className="content3">
            <p className="pera" style={{ display: "flex", marginTop: "80px" }}>
              Action{" "}
              <span style={{ marginTop: "4px", fontSize: "27px" }}>
                <GoArrowUpRight />
              </span>
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-duration="650"
          data-aos-easing="ease-in-out"
          data-aos-delay="400"
        >
          <div className="content4">
            <p className="pera" style={{ display: "flex", marginTop: "80px" }}>
              Action{" "}
              <span style={{ marginTop: "4px", fontSize: "27px" }}>
                <GoArrowUpRight />
              </span>
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-duration="650"
          data-aos-easing="ease-in-out"
          data-aos-delay="700"
        >
          <div className="content5">
            <p className="pera" style={{ display: "flex", marginTop: "80px" }}>
              Action{" "}
              <span style={{ marginTop: "4px", fontSize: "27px" }}>
                <GoArrowUpRight />
              </span>
            </p>
          </div>
        </div>

        {/* second div */}

        <div
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-duration="650"
          data-aos-easing="ease-in-out"
          data-aos-delay="100"
        >
          <div className="content6">
            <p className="pera" style={{ display: "flex", marginTop: "80px" }}>
              Action{" "}
              <span style={{ marginTop: "4px", fontSize: "27px" }}>
                <GoArrowUpRight />
              </span>
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-duration="650"
          data-aos-easing="ease-in-out"
          data-aos-delay="400"
        >
          <div className="content8">
            <p className="pera" style={{ display: "flex", marginTop: "80px" }}>
              Action{" "}
              <span style={{ marginTop: "4px", fontSize: "27px" }}>
                <GoArrowUpRight />
              </span>
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-duration="650"
          data-aos-easing="ease-in-out"
          data-aos-delay="700"
        >
          <div className="content7">
            <p className="pera" style={{ display: "flex", marginTop: "80px" }}>
              Action{" "}
              <span style={{ marginTop: "4px", fontSize: "27px" }}>
                <GoArrowUpRight />
              </span>
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          fontFamily: "initial",
          marginTop: "110px",
        }}
        data-aos="fade-up"
      >
        <h1>Rise to create value</h1>
        <h5>Mahindra Group's Financial Highlights</h5>
      </div>
    </>
  );
}

export default Cards;
