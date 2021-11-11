import React, { useState, useEffect } from "react";
import useTitle from "../../hooks/useTitle";
import { Table } from "react-bootstrap";
import Breadcrumb from "../../components/common/breadcrumb";
import adminApi from "../../apis/adminApi";
import AdminItem from "./../../components/Admin/AdminItem";
import response from "../../constants/response";

function Admin() {
  const [admins, setAdmins] = useState([]);
  useTitle("Admin List");

  const fetchAllAdmin = () => {
    adminApi
      .getAllAdmin()
      .then((res) => {
        if (res.status === response.SUCCESS) {
          setAdmins(res.data);
        }
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchAllAdmin();
  }, []);

  return (
    <>
      <Breadcrumb title="Admin List" parent="Admin" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Admin Details</h5>
          </div>
          <div className="card-body">
            <div className="clearfix"></div>
            <div className="product-physical">
              <Table className="table-custom">
                <thead>
                  <tr>
                    <th>#</th>
                    <th className="text-left">Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {admins.map((admin, key) => (
                    <AdminItem
                      admin={admin}
                      key={key}
                      index={key}
                      fetchAllAdmin={fetchAllAdmin}
                    />
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
