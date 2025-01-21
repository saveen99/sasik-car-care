import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Booking from './pages/Booking';
import Error from './pages/Error';
import Team from './pages/Team';
import Testimonial from './pages/Testimonial';
import Header from './components/Header';
import Footer from './components/Footer';
import Cookies from './pages/Cookies';
import Help from './pages/Help';
import FAQs from './pages/FAQs';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/error" element={<Error />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/cookies" element={<Cookies/>} />
          <Route path="/help" element={<Help />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}


export default App;
