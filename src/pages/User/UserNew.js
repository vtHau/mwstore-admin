import React from "react";
import Breadcrumb from "../../components/common/breadcrumb";
import Tabset_user from "../../components/users/tabset-user";

function UserNew() {
  return (
    <>
      <Breadcrumb title="Create User" parent="Users" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5> Add User</h5>
              </div>
              <div className="card-body">
                <Tabset_user />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserNew;
