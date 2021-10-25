import React, { useEffect, useState } from "react";
import { Modal, Popconfirm, Button } from "antd";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { couponValid } from "../../helpers/validate";
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
  const [startDate, setStartDate] = useState(new Date(coupon.start_coupon));
  const [endDate, setEndDate] = useState(new Date(coupon.end_coupon));

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: coupon.name || "",
      code: coupon.code || "",
      quantity: coupon.quantity || "",
      percent: coupon.percent || "",
    },
    validationSchema: couponValid,
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

  const changeStartDate = (date) => {
    setStartDate(date);
  };

  const changeEndDate = (date) => {
    setEndDate(date);
  };

  useEffect(() => {
    console.log(moment(startDate).format("YYYY-MM-DD"));
  }, [startDate]);

  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td>{coupon.name}</td>
      <td>{coupon.code}</td>
      <td>{coupon.quantity}</td>
      <td>{coupon.percent}</td>
      <td>{coupon.start_coupon}</td>
      <td>{coupon.end_coupon}</td>
      <td>hii</td>
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
              <label className="col-form-label pt-0">Code</label>
              <input
                type="text"
                name="code"
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
                    className="form-control"
                    selected={startDate}
                    dateFormat="yyyy-MM-dd"
                    onChange={changeStartDate}
                    customInput={
                      <input
                        type="text"
                        id="validationCustom01"
                        placeholder="First name"
                      />
                    }
                  />
                </div>
                <div className="col-6">
                  <label className="col-form-label">End coupon</label>
                  <DatePicker
                    className="form-control"
                    selected={endDate}
                    dateFormat="yyyy-MM-dd"
                    onChange={changeEndDate}
                    customInput={
                      <input
                        type="text"
                        id="validationCustom01"
                        placeholder="First name"
                      />
                    }
                  />
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
    </tr>
  );
}

export default CouponItem;
