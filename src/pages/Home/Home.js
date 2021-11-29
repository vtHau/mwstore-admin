import React from "react";
import { useSelector } from "react-redux";
import useTitle from "../../hooks/useTitle";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

function Home() {
  const admin = useSelector((state) => state.adminReducer.admin);

  useTitle("Home");

  return (
    <>
      <Breadcrumb title="Home" parent="Home" />
      <div className="container-fluid" style={{ height: "500px" }}>
        <div className="card" style={{ height: "100%" }}>
          <div className="card-body">
            <h3 className="title-hello text-center">
              Chào <b>{admin.name}</b> đã quay trở lại trang quản trị <br />
              <b>MW Store</b>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
