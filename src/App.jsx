import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "./component/header/HeaderComponent";
import FooterComponent from "./component/footer/FooterComponent";

const App = () => {
  return (
    <>
      <HeaderComponent />
      <main>
        <Outlet />
      </main>
      <FooterComponent />
    </>
  );
};

export default App;
