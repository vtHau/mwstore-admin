import React, { useState, useEffect } from "react";
import useTitle from "../../hooks/useTitle";
import RoleItem from "../../components/Role/RoleItem";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { Table } from "react-bootstrap";
import roleApi from "../../apis/roleApi";
import response from "../../constants/response";

function Brand() {
  const [roles, setRoles] = useState([]);
  useTitle("Role List");

  const fetchAllRole = () => {
    roleApi
      .getAllRole()
      .then((res) => {
        if (res.status === response.SUCCESS) {
          setRoles(res.data);
        }
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchAllRole();
  }, []);

  return (
    <>
      <Breadcrumb title="Role List" parent="Role" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Role Details</h5>
          </div>
          <div className="card-body">
            <div className="clearfix"></div>
            <div className="product-physical">
              {roles.length ? (
                <Table className="table-custom">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roles.map((role, key) => (
                      <RoleItem
                        key={key}
                        index={key}
                        role={role}
                        fetchAllRole={fetchAllRole}
                      />
                    ))}
                  </tbody>
                </Table>
              ) : (
                <h6 className="no-item">No item to show</h6>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brand;
