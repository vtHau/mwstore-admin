import React, { useState, useEffect } from "react";
import useTitle from "./../../hooks/useTitle";
import brandApi from "./../../apis/brandApi";
import response from "./../../constants/response";
import Breadcrumb from "./../../components/common/breadcrumb";

function UserList() {
  useTitle("User list");

  useEffect(() => {}, []);

  return (
    <>
      <Breadcrumb title="User List" parent="Users" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>User Details</h5>
          </div>
          <div className="card-body">
            <div className="clearfix"></div>
            <div className="product-physical">
              <table className="table-custom">
                <thead>
                  <tr>
                    <th>Invoice</th>
                    <th>Company</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href="#">INV__1001</a>
                    </td>
                    <td>Paragon</td>
                    <td>1/5/2021</td>
                    <td>
                      <p className="status status-unpaid">Unpaid</p>
                    </td>
                    <td>$520.18</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#">INV__1002</a>
                    </td>
                    <td>Sonic</td>
                    <td>1/4/2021</td>
                    <td>
                      <p className="status status-paid">Paid</p>
                    </td>
                    <td>$415.25</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserList;
