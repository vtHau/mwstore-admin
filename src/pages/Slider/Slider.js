import React from "react";
import useTitle from "../../hooks/useTitle";
import SliderList from "../../components/Slider/SliderList";
import Breadcrumb from "../../components/common/breadcrumb";

function Slider() {
  useTitle("Slider list");

  return (
    <>
      <Breadcrumb title="Slider List" parent="Slider" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Slider Details</h5>
          </div>
          <div className="card-body">
            <div className="clearfix"></div>
            <div className="product-physical">
              <SliderList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
