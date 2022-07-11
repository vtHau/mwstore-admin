import React, { useState } from "react";
import { Popconfirm, Button, Select } from "antd";
import orderApi from "../../apis/orderApi";
import response from "../../constants/response";
import useToggle from "../../hooks/useToggle";
import toast from "../../helpers/toast";
import { formatPrice } from "../../helpers/formats";
import { path } from "../../constants/path";
import { Link, useHistory } from "react-router-dom";

const { Option } = Select;

const orderTab = [
  {
    key: "all",
    name: "All",
  },
  {
    key: "awaiting_payment",
    name: "unpaid",
  },
  {
    key: "processing",
    name: "Processing",
  },
  {
    key: "transporting",
    name: "Transporting",
  },
  {
    key: "delivered",
    name: "Delivered",
  },
  {
    key: "canceled",
    name: "Canceled",
  },
];

const changeStatus = [
  {
    key: "processing",
    name: "Processing",
  },
  {
    key: "transporting",
    name: "Transporting",
  },
  {
    key: "delivered",
    name: "Delivered",
  },
  {
    key: "canceled",
    name: "Canceled",
  },
];

const statusText = orderTab.reduce((states, state) => {
  const { key, name } = state;
  return { ...states, [key]: name };
}, {});

function OrderItem(props) {
  const history = useHistory();
  const { order, fetchAllOrder } = props;
  const [openPop, togglePop] = useToggle(false);
  const [currentStatus, setCurrentStatus] = useState();
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
      .udpateStatus({ code: order.code, status: currentStatus })
      .then((res) => {
        setConfirmLoading(false);
        if (res.status === response.SUCCESS) {
          fetchAllOrder();
          toast.success("Success", "Update order success");
          return history.go(0);
        }
        return toast.error("Fail", "Update order fail");
      })
      .catch((err) => {
        setConfirmLoading(false);
        return toast.error("Fail", "Update order fail");
      });
  };

  const handleChangeStatus = (e) => {
    setCurrentStatus(e);
  };

  return (
    <tr>
      <td>{order.code}</td>
      <td className="text-left">
        <div className="widget-content p-0">
          <div className="widget-content-wrapper">
            <div className="widget-content-left flex2">
              <div className="widget-heading">{order.user.name}</div>
            </div>
          </div>
        </div>
      </td>
      <td>
        <span>{statusText[order.status]}</span>
      </td>
      <td>{formatPrice(order.total_money)}</td>
      <td>{order.time}</td>

      <td>
        <Select
          // showSearch
          // optionFilterProp="children"
          // value={currentProvince}
          onChange={handleChangeStatus}
        >
          {changeStatus &&
            changeStatus.length > 0 &&
            changeStatus.map((status) => {
              if (order.status !== status.key) {
                return (
                  <Option key={status.key} value={status.key}>
                    {status.name}
                  </Option>
                );
              }
            })}
        </Select>

        <Button type="primary" onClick={handleConfirm} loading={confirmLoading}>
          Confirm
        </Button>
      </td>
      <td>
        <div className="btn-group">
          {/* {order.status === "0" && ( */}

          {/* )} */}
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
