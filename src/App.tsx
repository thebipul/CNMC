import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./components/home/Home";
import Contact from "./components/Contact/Contact";
import Members from "./components/Members/Members";
import Events from "./components/events/Events";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <div className="App">
        <div className="navbar-tab">
          <Navbar />
        </div>
        <div className="body-tab">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/members" element={<Members />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </div>
        <div className="footer-tab">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
