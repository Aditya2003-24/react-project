
import Table1 from "./Table";
import Tailwind from "./Tailwind";
import Cards from "./Cards";
import UncontrolledExample from "./Carousel";
import Footer from "./Footer";
import NavScrollExample from "./Navbar"
import FillExample from "./Navbar2"
import BasicExample from "./Rise";







const Layout = () => {
  return (
    <>
      <NavScrollExample />

      <FillExample />
      <br />
      <br />

      <UncontrolledExample />
      <br/>
      {/* <Table1/> */}

      <br />
      <Cards />
      <br/>

      <Tailwind />
      <br />
      <BasicExample />
      <br />
      <Footer />
    </>
  );
}

export default Layout
