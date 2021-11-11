import React, { useState } from "react";
import { Button, Popconfirm } from "antd";
import adminApi from "../../apis/adminApi";
import response from "../../constants/response";
import toast from "../../helpers/toast";
import useToggle from "../../hooks/useToggle";
import * as PATH_URL from "../../constants/apiUrl";
import AdminEditModal from "./AdminEditModal";

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
      <td>
        {admin.roles.map((role, key) => (
          <span key={key} className="badge badge-success">
            {role.name}
          </span>
        ))}
      </td>
      <td>{admin.description}</td>
      <td>
        <div className="btn-group">
          <Button type="primary" onClick={toggleModal}>
            Edit
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
      <AdminEditModal
        admin={admin}
        openModal={openModal}
        toggleModal={toggleModal}
        fetchAllAdmin={fetchAllAdmin}
      />
    </tr>
  );
}

export default AdminItem;
