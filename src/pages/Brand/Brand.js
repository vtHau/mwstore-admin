import React from "react";
import useTitle from "../../hooks/useTitle";
import BrandList from "./../../components/Brand/BrandList";
import Breadcrumb from "../../components/common/breadcrumb";

function Brand() {
  useTitle("Brand list");

  return (
    <>
      <Breadcrumb title="Brand List" parent="Brand" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Brand Details</h5>
          </div>
          <div className="card-body">
            <div className="clearfix"></div>
            <div className="product-physical">
              <BrandList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brand;
