import React, { useState } from "react";
import { Popconfirm, Button } from "antd";
import roleApi from "../../apis/roleApi";
import response from "../../constants/response";
import useToggle from "./../../hooks/useToggle";
import toast from "./../../helpers/toast";
import { path } from "../../constants/path";
import { Link } from "react-router-dom";

function RoleItem(props) {
  const { index, role, fetchAllRole } = props;
  const [openPop, togglePop] = useToggle(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleDelete = () => {
    setConfirmLoading(true);

    roleApi
      .deleteRole({ id: role.id })
      .then((res) => {
        togglePop();
        setConfirmLoading(false);
        if (res.status === response.SUCCESS) {
          fetchAllRole();
          return toast.success("Success", "Delete role success");
        }
        return toast.success("Fail", "Delete role fail");
      })
      .catch((err) => {
        togglePop();
        setConfirmLoading(false);
        return toast.success("Fail", "Delete role fail");
      });
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{role.name}</td>
      <td>{role.description}</td>
      <td>
        <div className="btn-group">
          <Button type="primary">
            <Link to={path.ROLE_EDIT + role.id}>Edit</Link>
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
    </tr>
  );
}

export default RoleItem;
