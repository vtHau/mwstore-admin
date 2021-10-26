import React, { useState } from "react";
import { Modal, Button } from "antd";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { couponValid } from "../../helpers/validate";
import couponApi from "../../apis/couponApi";
import { fetchAllCoupon } from "../../actions/action";
import response from "../../constants/response";
import toast from "../../helpers/toast";

function CouponEditModal(props) {
  const { coupon, openModal, toggleModal } = props;
  const dispatch = useDispatch();
  const [confirmLoading, setConfirmLoading] = useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: coupon.name || "",
      code: coupon.code || "",
      quantity: coupon.quantity || "",
      percent: coupon.percent || "",
      start_coupon: new Date(coupon.start_coupon),
      end_coupon: new Date(coupon.end_coupon),
    },
    validationSchema: couponValid,
    onSubmit: (value) => {
      const newCoupon = {
        ...value,
        id: coupon.id,
        code: coupon.code,
        start_coupon: moment(value.start_coupon)
          .format("YYYY-MM-DD")
          .toString(),
        end_coupon: moment(value.end_coupon).format("YYYY-MM-DD").toString(),
      };

      setConfirmLoading(true);
      couponApi
        .updateCoupon(newCoupon)
        .then((res) => {
          toggleModal();
          setConfirmLoading(false);
          if (res.status === response.SUCCESS) {
            dispatch(fetchAllCoupon());
            return toast.success("Success", "Update coupon success");
          }
          return toast.success("Fail", "Update coupon fail");
        })
        .catch((err) => {
          toggleModal();
          setConfirmLoading(false);
          return toast.success("Fail", "Update coupon fail");
        });
    },
  });

  return (
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
            <label className="col-form-label pt-0">Code</label>
            <input
              type="text"
              name="code"
              readOnly
              className="form-control"
              value={formik.values.code}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Please input brand name..."
            />
            {formik.errors.code && formik.touched.code && (
              <p className="error-field">{formik.errors.code}</p>
            )}
          </div>
          <div className="form-group">
            <label className="col-form-label pt-0">Quantity</label>
            <input
              type="number"
              name="quantity"
              min="1"
              max="100"
              className="form-control"
              value={formik.values.quantity}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Please input brand name..."
            />
            {formik.errors.quantity && formik.touched.quantity && (
              <p className="error-field">{formik.errors.quantity}</p>
            )}
          </div>
          <div className="form-group">
            <label className="col-form-label pt-0">Percent(%)</label>
            <input
              type="number"
              name="percent"
              min="1"
              max="100"
              className="form-control"
              value={formik.values.percent}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Please input brand name..."
            />
            {formik.errors.percent && formik.touched.percent && (
              <p className="error-field">{formik.errors.percent}</p>
            )}
          </div>

          <div className="form-group">
            <div className="form-row">
              <div className="col-6">
                <label className="col-form-label">Start coupon</label>
                <DatePicker
                  name="start_coupon"
                  className="form-control"
                  selected={formik.values.start_coupon}
                  dateFormat="yyyy-MM-dd"
                  onBlur={formik.handleBlur}
                  onChange={(date) =>
                    formik.setFieldValue("start_coupon", date)
                  }
                />
                {formik.errors.start_coupon && formik.touched.start_coupon && (
                  <p className="error-field">{formik.errors.start_coupon}</p>
                )}
              </div>
              <div className="col-6">
                <label className="col-form-label">End coupon</label>
                <DatePicker
                  name="end_coupon"
                  className="form-control"
                  selected={formik.values.end_coupon}
                  dateFormat="yyyy-MM-dd"
                  onChange={(date) => formik.setFieldValue("end_coupon", date)}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.end_coupon && formik.touched.end_coupon && (
                  <p className="error-field">{formik.errors.end_coupon}</p>
                )}
              </div>
            </div>
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
  );
}

export default CouponEditModal;
