
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import RedirectedPage from "./reDirectedPage";
import NavBar from "./Components/NavBar/NavBar.js";
import ProductDetailsPage from "./Components/Details/Details.js" ;
import Info from "./Components/Info/info.js";
import Cart from "./Components/Cart/Cart.js"

const App = () => {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/redirected-page" element={<RedirectedPage />} />
        {/* <Route path="/redirected-page" element={RedirectedPage} /> */}
        <Route path="/product/:productId" element={<ProductDetailsPage />} />
        <Route path="/product/:productId/info" element={<Info />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
