import React from "react";
import Activity from "./component/activity/Activity";
import Contact from "./component/contact/Contact";
import Content from "./component/content/Content";
import Footer from "./component/footer/Footer";
import Menu from "./component/menu/Menu";
import Nav from "./component/nav/Nav";
import Order from "./component/order/Order";
import Team from "./component/team/Team";
import "./index.css";

const App = () => {
  return (
    <>
      <Nav />
      <Content />
      <Menu />
      <Activity />
      <Team />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
