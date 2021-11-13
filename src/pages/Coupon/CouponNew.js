import React, { useState } from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import response from "../../constants/response";
import toast from "../../helpers/toast";
import { fetchAllCoupon } from "./../../actions/action";
import couponApi from "../../apis/couponApi";
import { couponNewValid } from "../../helpers/validate";
import useTitle from "../../hooks/useTitle";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { Redirect } from "react-router-dom";
import { path } from "../../constants/path";

function CouponNew() {
  const dispatch = useDispatch();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [startDate] = useState(new Date());

  useTitle("Coupon new");

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      code: "",
      quantity: 1,
      percent: 1,
      start_coupon: startDate,
      end_coupon: startDate,
    },
    validationSchema: couponNewValid,
    onSubmit: (value) => {
      const newCoupon = {
        ...value,
        start_coupon: moment(value.start_coupon)
          .format("YYYY-MM-DD")
          .toString(),
        end_coupon: moment(value.end_coupon).format("YYYY-MM-DD").toString(),
      };
      setConfirmLoading(true);
      couponApi
        .newCoupon(newCoupon)
        .then((res) => {
          setConfirmLoading(false);
          if (res.status === response.SUCCESS) {
            dispatch(fetchAllCoupon());
            setRedirect(true);
            return toast.success("Success", "Update coupon success");
          }
          if (res.status === response.COUPON_EXIST) {
            formik.setFieldError("code", "Coupon code exist");
            return toast.success("Fail", "Coupon code exist");
          }
          return toast.success("Fail", "Save coupon fail");
        })
        .catch((err) => {
          setConfirmLoading(false);
          return toast.success("Fail", "Update coupon fail");
        });
    },
  });

  if (redirect) {
    return <Redirect to={path.COUPON_LIST} />;
  }

  return (
    <>
      <Breadcrumb title="Coupon New" parent="Coupon" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Coupon new</h5>
          </div>
          <div className="card-body">
            <div className="clearfix"></div>
            <div className="product-physical">
              <form className="form-custom" onSubmit={formik.handleSubmit}>
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
                        {formik.errors.start_coupon &&
                          formik.touched.start_coupon && (
                            <p className="error-field">
                              {formik.errors.start_coupon}
                            </p>
                          )}
                      </div>
                      <div className="col-6">
                        <label className="col-form-label">End coupon</label>
                        <DatePicker
                          name="end_coupon"
                          className="form-control"
                          selected={formik.values.end_coupon}
                          dateFormat="yyyy-MM-dd"
                          onChange={(date) =>
                            formik.setFieldValue("end_coupon", date)
                          }
                          onBlur={formik.handleBlur}
                        />
                        {formik.errors.end_coupon &&
                          formik.touched.end_coupon && (
                            <p className="error-field">
                              {formik.errors.end_coupon}
                            </p>
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
                    Save
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CouponNew;
