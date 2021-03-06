import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./navigation/Navigation";
import NavigationLinks from "./navigation/NavigationLinks";
import AddContact from "./pages/AddContact";

function App() {
  return (
    <Router>
      <Navigation name="Amber Contact List">
        <NavigationLinks index name="Home" to="/" />
        <NavigationLinks name="Add Contacts" to="/add-contact" />
      </Navigation>

        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/add-contact" element={<AddContact/>} />
        </Routes>
    </Router>
  );
}

export default App;
