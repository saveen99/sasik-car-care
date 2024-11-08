import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Booking from "./pages/Booking";
import Error from "./pages/Error";
import Team from "./pages/Team";
import Testimonial from "./pages/Testimonial";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/error" element={<Error/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/testimonial" element={<Testimonial/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
