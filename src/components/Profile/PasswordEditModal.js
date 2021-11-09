import React, { useState } from "react";
import { Modal, Button } from "antd";
import { useFormik } from "formik";
import adminApi from "./../../apis/adminApi";
import response from "../../constants/response";
import toast from "./../../helpers/toast";
import { passwordValid } from "../../helpers/validate";

function PasswordEditModal(props) {
  const { openPassword, togglePassword } = props;
  const [confirmLoading, setConfirmLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      old_password: "",
      new_password: "",
      pre_password: "",
    },
    validationSchema: passwordValid,
    onSubmit: (value) => {
      setConfirmLoading(true);
      adminApi
        .updatePassword(value)
        .then((res) => {
          setConfirmLoading(false);
          if (res.status === response.SUCCESS) {
            togglePassword();
            toast.success("Success", "Update password success");
          } else {
            toast.error("Fail", "Update password fail");
            formik.setErrors({
              old_password: "Password current not correct",
            });
          }
        })
        .catch((err) => {
          setConfirmLoading(false);
          toast.error("Fail", "Update password fail");
        });
    },
  });

  return (
    <Modal visible={openPassword} onCancel={togglePassword} footer={null}>
      <form className="form-custom" onSubmit={formik.handleSubmit}>
        <p className="title-section">Update password</p>
        <div className="digital-add needs-validation">
          <div className="form-group">
            <label className="col-form-label pt-0">Password</label>
            <input
              type="passowrd"
              name="old_password"
              className="form-control"
              value={formik.values.old_password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Please input password..."
            />
            {formik.errors.old_password && formik.touched.old_password && (
              <p className="error-field">{formik.errors.old_password}</p>
            )}
          </div>
          <div className="form-group">
            <label className="col-form-label">New password</label>
            <input
              type="passowrd"
              name="new_password"
              className="form-control"
              value={formik.values.new_password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Please input password..."
            />
            {formik.errors.new_password && formik.touched.new_password && (
              <p className="error-field">{formik.errors.new_password}</p>
            )}
          </div>
          <div className="form-group">
            <label className="col-form-label">Confirm password</label>
            <input
              type="passowrd"
              name="pre_password"
              className="form-control"
              value={formik.values.pre_password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Please input password..."
            />
            {formik.errors.pre_password && formik.touched.pre_password && (
              <p className="error-field">{formik.errors.pre_password}</p>
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
  );
}

export default PasswordEditModal;
