import React from "react";
import Navbar from "../Components/Navbar";
import Watchbanner from "../Components/Watchbanner";
import Factcountup from "../Components/FactCountup";
import Portfolio from "../Components/Portfolio";
import Clientcarousel from "../Components/Clientcarousel";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Watchbanner />
      <Factcountup />
      <Portfolio />
      <Clientcarousel />
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;
