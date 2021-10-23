import React from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import CouponItem from "./CouponItem";

function CouponList() {
  const coupons = useSelector((state) => state.couponReducer.coupons);

  return (
    <>
      {coupons.length ? (
        <Table className="table-custom">
          <thead>
            <tr>
              <th>#</th>
              <th className="text-center">Name</th>
              <th className="text-center">Code</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Percent</th>
              <th className="text-center">Start</th>
              <th className="text-center">End</th>
              <th className="text-center">Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon, key) => (
              <CouponItem key={key} index={key} coupon={coupon} />
            ))}
          </tbody>
        </Table>
      ) : (
        <h6 className="no-item">No item to show</h6>
      )}
    </>
  );
}

export default CouponList;
