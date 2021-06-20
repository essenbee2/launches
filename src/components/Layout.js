import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <br />
      {props.children}
      <br />
      <Footer />
    </div>
  );
};

export default Layout;
