import React, { useState } from "react";
import { Modal, Button } from "antd";
import { useFormik } from "formik";
import { feeshipValid } from "../../helpers/validate";
import feeshipApi from "../../apis/feeshipApi";
import response from "../../constants/response";
import toast from "../../helpers/toast";

function FeeshipEditModal(props) {
  const { feeship, openModal, toggleModal, fetchAllFeeship } = props;
  const [confirmLoading, setConfirmLoading] = useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      feeship: feeship.feeship || "",
    },
    validationSchema: feeshipValid,
    onSubmit: (value) => {
      setConfirmLoading(true);
      const newFeeship = {
        ...feeship,
        feeship: value.feeship,
      };

      feeshipApi
        .newFeeship(newFeeship)
        .then((res) => {
          setConfirmLoading(false);
          if (res.status === response.SUCCESS) {
            fetchAllFeeship();
            toggleModal();
            return toast.success("Success", "Update feeship success");
          }
          return toast.error("Fail", "Update feeship fail");
        })
        .catch((err) => {
          setConfirmLoading(false);
          toggleModal();
          return toast.error("Fail", "Update feeship fail");
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
        <p className="title-section">Update feeship</p>
        <div className="digital-add needs-validation">
          <div className="form-group">
            <label className="col-form-label pt-0">Feeship (VND)</label>
            <input
              type="number"
              name="feeship"
              className="form-control"
              value={formik.values.feeship}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Please input feeship price..."
            />
            {formik.errors.feeship && formik.touched.feeship && (
              <p className="error-field">{formik.errors.feeship}</p>
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

export default FeeshipEditModal;
