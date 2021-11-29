import React, { useState } from "react";
import { Button, Popconfirm, Modal } from "antd";
import ActivityModal from "./ActivityModal";
import useToggle from "../../hooks/useToggle";
import * as PATH_URL from "./../../constants/apiUrl";

function UserItem(props) {
  const { user, index } = props;
  const [openPop, togglePop] = useToggle(false);
  const [openModal, toggleModal] = useToggle(false);
  const [openActivity, toggleActivity] = useToggle(false);
  const [confirmLoading] = useState(false);

  const handleDelete = () => {};

  return (
    <tr>
      <td>{index + 1}</td>
      <td className="text-left">
        <div className="widget-content p-0">
          <div className="widget-content-wrapper">
            <div className="widget-content-left mr-3">
              <img
                className="rounded-circle border-circle"
                src={PATH_URL.AVATAR_IMAGE + user.image}
                alt={user.name}
              />
            </div>
            <div className="widget-content-left flex2">
              <div className="widget-heading">{user.name}</div>
            </div>
          </div>
        </div>
      </td>
      <td>{user.email}</td>
      <td>{user.phone || "Unknow"}</td>
      <td>
        {user.block < 5 ? (
          <span className="badge badge-success">Active</span>
        ) : (
          <span className="badge badge-danger">Blocked</span>
        )}
      </td>
      <td>{user.status || "Unknow"}</td>
      <td>{user.address || "Unknow"}</td>
      <td>
        <div className="btn-group">
          <Button type="primary" onClick={toggleActivity}>
            Activity
          </Button>
          <Button type="primary" onClick={toggleModal}>
            Device
          </Button>
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
      <Modal
        visible={openModal}
        onOk={toggleModal}
        onCancel={toggleModal}
        footer={null}
      >
        <p className="title-section">Device</p>
        {user.device === null ? (
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
                <div className="card-device-body">{user.device.device}</div>
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
      </Modal>
      <ActivityModal
        user={user}
        openActivity={openActivity}
        toggleActivity={toggleActivity}
      />
    </tr>
  );
}

export default UserItem;
