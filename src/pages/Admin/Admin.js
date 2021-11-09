import React, { useState, useEffect } from "react";
import useTitle from "../../hooks/useTitle";
import { Table } from "react-bootstrap";
import Breadcrumb from "../../components/common/breadcrumb";
import { Upload, Button } from "antd";
import { UploadOutlined, DownloadOutlined } from "@ant-design/icons";
import * as PATH_URL from "../../constants/apiUrl";
import importApi from "../../apis/importApi";
import adminApi from "../../apis/adminApi";
import AdminItem from "./../../components/Admin/AdminItem";
import toast from "../../helpers/toast";
import response from "../../constants/response";
import { useDispatch } from "react-redux";
import { fetchAllBrand } from "../../actions/action";

function Admin() {
  const dispatch = useDispatch();
  const [admins, setAdmins] = useState([]);
  const [confirmLoading, setConfirmLoading] = useState(false);
  useTitle("Admin List");

  const importBrand = (options) => {
    setConfirmLoading(true);
    const { onSuccess, onError, file } = options;
    const fmData = new FormData();
    fmData.append("file", file);

    importApi
      .importBrand(fmData)
      .then((res) => {
        setConfirmLoading(false);
        if (res.status === response.SUCCESS) {
          onSuccess("Success");
          dispatch(fetchAllBrand());
          toast.success("Success", "Import success");
        } else {
          toast.success("Fail", "Import fail");
        }
      })
      .catch((err) => {
        setConfirmLoading(false);
        onError("Fail");
        toast.success("Fail", "Import fail");
      });
  };

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

            <div className="pull-right import-export">
              <Button
                type="primary"
                shape="round"
                size="large"
                icon={<DownloadOutlined />}
                onClick={() => {
                  return window.open(PATH_URL.EXPORT_EXCEL_USER);
                }}
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

export default Admin;
