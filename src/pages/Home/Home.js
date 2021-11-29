import React from "react";
import useTitle from "../../hooks/useTitle";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

function Home() {
  useTitle("Home");

  return (
    <>
      <Breadcrumb title="Home" parent="Home" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Home</h5>
          </div>
          <div className="card-body">
            <div className="clearfix"></div>
            <div className="product-physical"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
