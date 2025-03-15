
import { useEffect } from 'react'
import './App.css'
import Cards from './Cards'
import UncontrolledExample from './Carousel'
import Footer from './Footer'
import Layout from './Layout'
import BasicExample from './Rise'
import AOS from 'aos'
import "aos/dist/aos.css";









function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <>
      

      <Layout />
      <br />
      <br />

      <UncontrolledExample />
      <br />

      <Cards />
      <br />
      <BasicExample />
      <br />

      <Footer />
    </>
  );
}

export default App
