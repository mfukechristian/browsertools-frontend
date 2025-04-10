import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "./component/header/HeaderComponent";
import FooterComponent from "./component/footer/FooterComponent";
import SubHeaderComponent from "./component/SubHeader/SubHeaderComponent";

const App = () => {
  return (
    <>
      <HeaderComponent />
      <SubHeaderComponent />
      <main>
        <Outlet />
      </main>
      <FooterComponent />
    </>
  );
};

export default App;
