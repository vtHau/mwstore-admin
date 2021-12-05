import React, { useState } from "react";
import { Popconfirm, Button } from "antd";
import orderApi from "../../apis/orderApi";
import response from "../../constants/response";
import useToggle from "../../hooks/useToggle";
import toast from "../../helpers/toast";
import * as PATH_URL from "../../constants/apiUrl";
import { path } from "../../constants/path";
import { Link } from "react-router-dom";

function OrderItem(props) {
  const { order, fetchAllOrder } = props;
  const [openPop, togglePop] = useToggle(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleDelete = () => {
    setConfirmLoading(true);
    orderApi
      .deleteOrder({ code: order.code })
      .then((res) => {
        setConfirmLoading(false);
        togglePop();

        if (res.status === response.SUCCESS) {
          fetchAllOrder();
          return toast.success("Success", "Delete order success");
        }
        return toast.error("Fail", "Delete order fail");
      })
      .catch((err) => {
        setConfirmLoading(false);
        togglePop();

        return toast.error("Fail", "Delete order fail");
      });
  };

  const handleConfirm = () => {
    setConfirmLoading(true);
    orderApi
      .confirmOrder({ code: order.code })
      .then((res) => {
        setConfirmLoading(false);
        if (res.status === response.SUCCESS) {
          fetchAllOrder();
          return toast.success("Success", "Comfirm order success");
        }
        return toast.error("Fail", "Comfirm order fail");
      })
      .catch((err) => {
        setConfirmLoading(false);
        return toast.error("Fail", "Comfirm order fail");
      });
  };

  return (
    <tr>
      <td>{order.code}</td>
      <td className="text-left">
        <div className="widget-content p-0">
          <div className="widget-content-wrapper">
            <div className="widget-content-left">
              <img
                className="rounded-circle border-circle"
                src={PATH_URL.AVATAR_IMAGE + order.user.image}
                alt={order.user.name}
              />
            </div>
            <div className="widget-content-left flex2">
              <div className="widget-heading">{order.user.name}</div>
            </div>
          </div>
        </div>
      </td>
      <td>{order.user.email}</td>
      <td>{order.time}</td>
      <td>
        {order.status === 0 ? (
          <span className="badge badge-danger">Processing</span>
        ) : (
          <span className="badge badge-success">Processed</span>
        )}
      </td>
      <td>
        <div className="btn-group">
          {order.status === 1 && (
            <Button
              type="primary"
              onClick={handleConfirm}
              loading={confirmLoading}
            >
              Confirm
            </Button>
          )}
          <Button type="primary">
            <Link to={path.ORDER_DETAIL + order.code}>Detail</Link>
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
            <Button type="primary" onClick={togglePop} danger>
              Delete
            </Button>
          </Popconfirm>
        </div>
      </td>
    </tr>
  );
}

export default OrderItem;
