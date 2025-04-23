
import { useEffect } from 'react'
import './App.css'
import Cards from './Cards'
import UncontrolledExample from './Carousel'
import Footer from './Footer'
import Layout from './Layout'
import BasicExample from './Rise'
import AOS from 'aos'
import "aos/dist/aos.css"


import { Route, Routes } from 'react-router-dom'
import Example from './Signup'
import Login from "./Login";
import CarBooking from './Carbooking'
import Tailwind from './Tailwind'
import Table1 from './Table'
import Admin from './Admin_table'
// import { AuthProvider } from "./AuthContext";




function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <>
      
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<UncontrolledExample />} />
            <Route path="/card" element={<Cards />} />
            <Route path="/tailwind" element={<Tailwind />} />
            <Route path="/basicexample" element={<BasicExample />} />
            <Route path="/footer" element={<Footer />} />
          </Route>
          <Route path="/example" element={<Example />} />
          <Route path="/login" element={<Login />} />
          <Route path="/car" element={<CarBooking />} />
          <Route path="/tab" element={<Table1 />} />
          <Route path="/adm" element={<Admin />} />
        </Routes>
     

      {/* <Layout />
      <br />
      <br />

      <UncontrolledExample />
      <br />

      <Cards />
      <br />
      <Tailwind />
      <br />
      <BasicExample />
      <br />

      <Footer /> */}
    </>
  );
}

export default App
