import React, { useState } from "react";
import { Modal, Popconfirm, Button } from "antd";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { brandValid } from "../../helpers/validate";
import couponApi from "../../apis/couponApi";
import { fetchAllCoupon } from "../../actions/action";
import response from "../../constants/response";
import useToggle from "../../hooks/useToggle";
import toast from "../../helpers/toast";

function CouponItem(props) {
  const { index, coupon } = props;
  const dispatch = useDispatch();
  const [openPop, togglePop] = useToggle(false);
  const [openModal, toggleModal] = useToggle(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: coupon.name || "",
      description: coupon.code || "",
    },
    validationSchema: brandValid,
    onSubmit: (value) => {
      value.id = coupon.id;
      setConfirmLoading(true);

      couponApi
        .updateCoupon(value)
        .then((res) => {
          toggleModal();
          setConfirmLoading(false);
          if (res.status === response.SUCCESS) {
            dispatch(fetchAllCoupon());
            return toast.success("Success", "Update brand success");
          }
          return toast.success("Fail", "Update brand fail");
        })
        .catch((err) => {
          toggleModal();
          setConfirmLoading(false);
          return toast.success("Fail", "Update brand fail");
        });
    },
  });

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
      <td>hehe</td>
      <td className="text-center text-muted">
        <button type="button" className="btn btn-primary" onClick={toggleModal}>
          Edit
        </button>
        <Popconfirm
          title="Bạn có thật sự muốn xóa ?"
          visible={openPop}
          onConfirm={handleDelete}
          okButtonProps={{ loading: confirmLoading }}
          onCancel={togglePop}
          okText="Có chứ"
          cancelText="Không nha"
        >
          <button type="button" className="btn btn-danger" onClick={togglePop}>
            Delete
          </button>
        </Popconfirm>
      </td>
      <Modal
        visible={openModal}
        onOk={toggleModal}
        onCancel={toggleModal}
        footer={null}
      >
        <form className="form-custom" onSubmit={formik.handleSubmit}>
          <p className="title-section">Update brand</p>
          <div className="digital-add needs-validation">
            <div className="form-group">
              <label className="col-form-label pt-0">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formik.values.name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="Please input brand name..."
              />
              {formik.errors.name && formik.touched.name && (
                <p className="error-field">{formik.errors.name}</p>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Description</label>
              <textarea
                name="description"
                rows="4"
                cols="12"
                className="form-control"
                value={formik.values.description}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="Please input brand description..."
              ></textarea>
              {formik.errors.description && formik.touched.description && (
                <p className="error-field">{formik.errors.description}</p>
              )}
            </div>
          </div>
          <div className="submit-box">
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              loading={confirmLoading}
            >
              Update
            </Button>
          </div>
        </form>
      </Modal>
    </tr>
  );
}

export default CouponItem;
