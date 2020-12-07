import React, { useState } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import FirstPage from "./components/FirstPage/FirstPage";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import NavBar from "./components/NavBar/NavBar";
import Clients from "./components/Clients/Clients";
import LogoClients from "./components/LogoClients/LogoClients";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
        <FirstPage />
        <NavBar toggleMenu={toggleMenu} />
        {menuOpen ? <Menu toggleMenu={toggleMenu} /> : null}
        <Clients />
        <LogoClients />
        <ContactForm />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
