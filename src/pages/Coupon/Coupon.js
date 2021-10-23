import React from "react";
import useTitle from "../../hooks/useTitle";
import CouponList from "../../components/Coupon/CouponList";
import Breadcrumb from "../../components/common/breadcrumb";

function Coupon() {
  useTitle("Coupon list");

  return (
    <>
      <Breadcrumb title="Coupon List" parent="Coupon" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Coupon Details</h5>
          </div>
          <div className="card-body">
            <div className="clearfix"></div>
            <div className="product-physical">
              <CouponList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coupon;
