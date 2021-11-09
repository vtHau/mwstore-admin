import React, { useState } from "react";
import { Button, Popconfirm, Modal } from "antd";
import adminApi from "../../apis/adminApi";
import response from "../../constants/response";
import toast from "../../helpers/toast";
import useToggle from "../../hooks/useToggle";
import * as PATH_URL from "../../constants/apiUrl";

function AdminItem(props) {
  const { admin, index, fetchAllAdmin } = props;
  const [openPop, togglePop] = useToggle(false);
  const [openModal, toggleModal] = useToggle(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleDelete = () => {
    setConfirmLoading(true);

    adminApi
      .deleteAdmin({ id: admin.id })
      .then((res) => {
        togglePop();
        setConfirmLoading(false);
        if (res.status === response.SUCCESS) {
          fetchAllAdmin();
          return toast.success("Success", "Delete admin success");
        }
        return toast.success("Fail", "Delete admin fail");
      })
      .catch((err) => {
        togglePop();
        setConfirmLoading(false);
        return toast.success("Fail", "Delete admin fail");
      });
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td className="text-left">
        <div className="widget-content p-0">
          <div className="widget-content-wrapper">
            <div className="widget-content-left mr-3">
              <img
                className="rounded-circle border-circle"
                src={`${PATH_URL.ADMIN_AVATAR_IMAGE}${admin.image}`}
                alt={admin.name}
              />
            </div>
            <div className="widget-content-left flex2">
              <div className="widget-heading">{admin.name}</div>
            </div>
          </div>
        </div>
      </td>
      <td>{admin.email}</td>
      {/* <td>
        {admin.block < 5 ? (
          <span className="badge badge-success">Active</span>
        ) : (
          <span className="badge badge-danger">Blocked</span>
        )}
      </td> */}
      <td>{admin.roles.map((role) => role.name + " ")}</td>
      <td>{admin.description}</td>
      <td>
        <div className="btn-group">
          <Button type="primary">Edit</Button>
          <Popconfirm
            title="Bạn có thật sự muốn xóa ?"
            visible={openPop}
            onConfirm={handleDelete}
            okButtonProps={{ loading: confirmLoading }}
            onCancel={togglePop}
            okText="Có chứ"
            cancelText="Không nha"
          >
            <Button type="danger" onClick={togglePop}>
              Delete
            </Button>
          </Popconfirm>
        </div>
      </td>
      {/* <Modal
        visible={openModal}
        onOk={toggleModal}
        onCancel={toggleModal}
        footer={null}
      >
        <p className="title-section">Device</p>
        {admin.device === null ? (
          <p className="text-center">No info of device</p>
        ) : (
          <div className="row">
            <div className="col-6">
              <div className="card-device">
                <div className="card-device-title">
                  <i className="fa fa-desktop"></i>
                  <br />
                  Device
                </div>
                <div className="card-device-body">{admin.device.device}</div>
              </div>
            </div>
            <div className="col-6">
              <div className="card-device">
                <div className="card-device-title">
                  <i className="fa fa-windows"></i>
                  <br />
                  OS
                </div>
                <div className="card-device-body">{user.device.os}</div>
              </div>
            </div>
            <div className="col-6">
              <div className="card-device">
                <div className="card-device-title">
                  <i className="fa fa-chrome"></i>
                  <br />
                  Browser
                </div>
                <div className="card-device-body">{user.device.browser}</div>
              </div>
            </div>
            <div className="col-6">
              <div className="card-device">
                <div className="card-device-title">
                  <i className="fa fa-history"></i>
                  <br />
                  Last login
                </div>
                <div className="card-device-body">{user.device.last_login}</div>
              </div>
            </div>
          </div>
        )}
      </Modal> */}
    </tr>
  );
}

export default AdminItem;
