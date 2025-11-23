import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
