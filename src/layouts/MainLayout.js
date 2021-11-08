import React, { useState } from "react";
import useInitFetch from "../hooks/useInitFetch";
import Sidebar from "../components/common/Sidebar/Sidebar";
import RightSidebar from "../components/common/RightSidebar";
import Footer from "../components/common/Footer";
import Header from "../components/common/header_components/Header";
import Routes from "./../routes/routes";

function MainLayout(props) {
  const [divName, setDivName] = useState("RTL");

  useInitFetch();

  const changeRtl = () => {
    if (divName === "RTL") {
      document.body.classList.add("rtl");
      setDivName("LTR");
    } else {
      document.body.classList.remove("rtl");
      setDivName("RTL");
    }
  };
  return (
    <>
      <div className="page-wrapper">
        <Header />
        <div className="page-body-wrapper">
          <Sidebar />
          <RightSidebar />
          <div className="page-body">
            <Routes />
          </div>
          <Footer />
        </div>
      </div>
      <div className="btn-light custom-theme" onClick={changeRtl}>
        {divName}
      </div>
    </>
  );
}

export default MainLayout;
