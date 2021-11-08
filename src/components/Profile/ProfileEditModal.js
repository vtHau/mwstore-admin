import React, { useState } from "react";
import { Modal, Button } from "antd";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { adminUpdateValid } from "../../helpers/validate";
import { authToken } from "../../actions/action";
import response from "../../constants/response";
import toast from "../../helpers/toast";
import adminApi from "../../apis/adminApi";

function ProfileEditModal(props) {
  const { admin, openModal, toggleModal } = props;
  const dispatch = useDispatch();
  const [confirmLoading, setConfirmLoading] = useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: admin.name || "",
      description: admin.description || "",
    },
    validationSchema: adminUpdateValid,
    onSubmit: (value) => {
      setConfirmLoading(true);

      adminApi
        .updateProfile(value)
        .then((res) => {
          toggleModal();
          setConfirmLoading(false);
          if (res.status === response.SUCCESS) {
            dispatch(authToken());
            return toast.success("Success", "Update profile success");
          }
          return toast.success("Fail", "Update profile fail");
        })
        .catch((err) => {
          toggleModal();
          setConfirmLoading(false);
          return toast.success("Fail", "Update profile fail");
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
        <p className="title-section">Update admin</p>
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
            <input
              type="text"
              name="description"
              className="form-control"
              value={formik.values.description}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Please input brand name..."
            />
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
  );
}

export default ProfileEditModal;
