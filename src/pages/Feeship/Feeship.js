import React from "react";
import useTitle from "../../hooks/useTitle";
import BrandList from "../../components/Brand/BrandList";
import Breadcrumb from "../../components/common/breadcrumb";
import commentApi from "../../apis/commentApi";
import AddressSelect from "./../../components/Address/AddressSelect";

function Brand() {
  useTitle("Feeship list");

  return (
    <>
      <Breadcrumb title="Feeship List" parent="Feeship" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Feeship Details</h5>
          </div>
          <div className="card-body">
            <div className="clearfix"></div>
            <div className="product-physical">
              <AddressSelect />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brand;
