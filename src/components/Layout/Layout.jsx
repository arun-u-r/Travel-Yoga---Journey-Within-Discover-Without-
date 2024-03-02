import React, { useEffect, useState } from "react";
import Routers from "../../router/Routers.js";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
// import RibbonContent from '../Ad/RibbonContent.jsx';
// import { useLocation } from 'react-router-dom';
import Loader from "../Loader/Loading.jsx";

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Cleanup function
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader /> // Display loader if loading
      ) : (
        <>
          <Header />
          <Routers />
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
