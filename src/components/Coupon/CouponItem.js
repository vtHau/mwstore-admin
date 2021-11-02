import React, { useState } from "react";
import { Modal, Popconfirm, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import couponApi from "../../apis/couponApi";
import { fetchAllCoupon } from "../../actions/action";
import response from "../../constants/response";
import useToggle from "../../hooks/useToggle";
import toast from "../../helpers/toast";
import SendCouponItem from "./SendCouponItem";
import CouponEditModal from "./CouponEditModal";

function CouponItem(props) {
  const { index, coupon } = props;
  const users = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();
  const [openPop, togglePop] = useToggle(false);
  const [openModal, toggleModal] = useToggle(false);
  const [openSendCoupon, toggleSendCoupon] = useToggle(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleDelete = () => {
    setConfirmLoading(true);

    couponApi
      .deleteCoupon({ id: coupon.id })
      .then((res) => {
        togglePop();
        setConfirmLoading(false);
        if (res.status === response.SUCCESS) {
          dispatch(fetchAllCoupon());
          return toast.success("Success", "Delete brand success");
        }
        return toast.success("Fail", "Delete brand fail");
      })
      .catch((err) => {
        togglePop();
        setConfirmLoading(false);
        return toast.success("Fail", "Delete brand fail");
      });
  };

  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td>{coupon.name}</td>
      <td>{coupon.code}</td>
      <td>{coupon.quantity}</td>
      <td>{coupon.percent}</td>
      <td>{coupon.start_coupon}</td>
      <td>{coupon.end_coupon}</td>
      <td>
        {new Date(coupon.end_coupon) > new Date() ? (
          <span className="badge badge-success">Active</span>
        ) : (
          <span className="badge badge-danger">Deactive</span>
        )}
      </td>
      <td className="text-center text-muted">
        <div className="btn-group">
          <Button type="primary" onClick={toggleSendCoupon}>
            Send
          </Button>
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
      <CouponEditModal
        coupon={coupon}
        openModal={openModal}
        toggleModal={toggleModal}
      />
      <Modal
        visible={openSendCoupon}
        onOk={toggleSendCoupon}
        onCancel={toggleSendCoupon}
        footer={null}
      >
        <p className="title-section">Send coupon</p>
        <Table className="table-custom">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => (
              <SendCouponItem key={key} coupon={coupon} user={user} />
            ))}
          </tbody>
        </Table>
      </Modal>
    </tr>
  );
}

export default CouponItem;
