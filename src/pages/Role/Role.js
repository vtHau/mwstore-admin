import React, { useState, useEffect } from "react";
import useTitle from "../../hooks/useTitle";
import RoleItem from "../../components/Role/RoleItem";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { Table } from "react-bootstrap";
import { Upload, Button } from "antd";
import { UploadOutlined, DownloadOutlined } from "@ant-design/icons";
import * as PATH_URL from "../../constants/apiUrl";
import importApi from "../../apis/importApi";
import roleApi from "../../apis/roleApi";
import toast from "../../helpers/toast";
import response from "../../constants/response";
import { useDispatch } from "react-redux";

function Brand() {
  const dispatch = useDispatch();
  const [roles, setRoles] = useState([]);
  const [confirmLoading, setConfirmLoading] = useState(false);
  useTitle("Role List");

  const importBrand = async (options) => {
    setConfirmLoading(true);
    const { onSuccess, onError, file } = options;
    const fmData = new FormData();
    fmData.append("file", file);

    // importApi
    //   .importBrand(fmData)
    //   .then((res) => {
    //     setConfirmLoading(false);
    //     if (res.status === response.SUCCESS) {
    //       onSuccess("Success");
    //       dispatch(fetchAllBrand());
    //       toast.success("Success", "Import success");
    //     } else {
    //       toast.success("Fail", "Import fail");
    //     }
    //   })
    //   .catch((err) => {
    //     setConfirmLoading(false);
    //     onError("Fail");
    //     toast.success("Fail", "Import fail");
    //   });
  };

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
            <div className="pull-right import-export">
              <Upload customRequest={importBrand} showUploadList={false}>
                <Button
                  type="primary"
                  shape="round"
                  icon={<UploadOutlined />}
                  size="large"
                  loading={confirmLoading}
                >
                  Import Excel
                </Button>
              </Upload>
              <Button
                type="primary"
                shape="round"
                size="large"
                icon={<DownloadOutlined />}
                onClick={() => {
                  return window.open(PATH_URL.EXPORT_EXCEL_BRAND);
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

export default Brand;
