import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
// import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import MenuBar from "./components/MenuBar/MenuBar";
// import Sustainability from "./pages/Sustainability/Sustainability";
// import Communities from "./pages/Communities/Communities";
// import Offers from "./pages/Offers/Offers";

function App() {
  return (
    <Router>
      <div>
        <MenuBar />

        <div>
          <Routes>
            {/* <Route path="/offers" element={<Offers />}></Route>
            <Route path="/communities" element={<Communities />}></Route>
            <Route path="/sustainability" element={<Sustainability />}></Route>
            <Route path="/about" element={<About />}></Route> */}
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
