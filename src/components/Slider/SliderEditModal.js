import React, { useState } from "react";
import { Modal, Button } from "antd";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { sliderUpdateValid } from "./../../helpers/validate";
import sliderApi from "../../apis/sliderApi";
import response from "../../constants/response";
import toast from "./../../helpers/toast";

function SliderEditModal(props) {
  const { slider, openModal, toggleModal, fetchAllSlider } = props;
  const [confirmLoading, setConfirmLoading] = useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: slider.name,
      product_id: slider.product_id,
      show_hide: slider.show_hide,
      image: null,
    },
    validationSchema: sliderUpdateValid,
    onSubmit: (value) => {
      setConfirmLoading(true);
      const newSlider = new FormData();

      newSlider.append("id", slider.id);
      newSlider.append("name", value.name);
      newSlider.append("product_id", value.product_id);
      newSlider.append("show_hide", value.show_hide);

      if (value.image) {
        newSlider.append("image", value.image);
      }

      sliderApi
        .updateSlider(newSlider)
        .then((res) => {
          toggleModal();
          setConfirmLoading(false);
          if (res.status === response.SUCCESS) {
            fetchAllSlider();
            return toast.success("Success", "Update slider success");
          }
          return toast.success("Fail", "Update slider fail");
        })
        .catch((err) => {
          toggleModal();
          setConfirmLoading(false);
          return toast.success("Fail", "Update slider fail");
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
        <p className="title-section">Update slider</p>
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
              placeholder="Please input slider name..."
            />
            {formik.errors.name && formik.touched.name && (
              <p className="error-field">{formik.errors.name}</p>
            )}
          </div>

          <div className="form-group">
            <label className="col-form-label pt-0">Show /Hide</label>
            <select
              className="browser-default custom-select"
              name="show_hide"
              value={formik.values.show_hide}
              onBlur={formik.handleBlur}
              onChange={(e) =>
                formik.setFieldValue("show_hide", e.target.value)
              }
            >
              <option value="1">Show</option>
              <option value="0">Hide</option>
            </select>
            {formik.errors.show_hide && formik.touched.show_hide && (
              <p className="error-field">{formik.errors.show_hide}</p>
            )}
          </div>

          <div className="form-group">
            <label className="col-form-label">Image</label>
            <div className="custom-file">
              <input
                type="file"
                className="form-control"
                name="image"
                id="validatedCustomFile"
                onChange={(e) =>
                  formik.setFieldValue("image", e.target.files[0])
                }
                accept=".PNG, .JPEG, .JPG"
              />
              {formik.errors.image && formik.touched.image && (
                <p className="error-field">{formik.errors.image}</p>
              )}
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

export default SliderEditModal;
