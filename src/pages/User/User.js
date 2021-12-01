import React from "react";
import { Table } from "react-bootstrap";
import { Button } from "antd";
import useDownload from "../../hooks/useDownload";
import { DownloadOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import useTitle from "../../hooks/useTitle";
import * as PATH_URL from "../../constants/apiUrl";
import UserItem from "./../../components/User/UserItem";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

function User() {
  const users = useSelector((state) => state.userReducer.users);
  const [downloadFile, isDownloading, initFetch] = useDownload(
    PATH_URL.EXPORT_EXCEL_USER,
    "user"
  );
  useTitle("User List");

  return (
    <>
      <Breadcrumb title="User List" parent="Users" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>User List</h5>
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
                    <th>Phone</th>
                    <th>Status</th>
                    <th>Desc</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, key) => (
                    <UserItem user={user} key={key} index={key} />
                  ))}
                </tbody>
              </Table>
            </div>

            <div className="pull-right import-export">
              <Button
                type="primary"
                shape="round"
                size="large"
                disabled={initFetch}
                loading={isDownloading}
                icon={<DownloadOutlined />}
                onClick={downloadFile}
              >
                Export Excel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
