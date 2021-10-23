import React, { useState } from "react";
import { Modal, Popconfirm, Button } from "antd";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { brandValid } from "./../../helpers/validate";
import brandApi from "../../apis/brandApi";
import { fetchAllBrand } from "./../../actions/action";
import response from "../../constants/response";
import useToggle from "./../../hooks/useToggle";
import toast from "./../../helpers/toast";

function BrandItem(props) {
  const { index, brand } = props;
  const dispatch = useDispatch();
  const [openPop, togglePop] = useToggle(false);
  const [openModal, toggleModal] = useToggle(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: brand.name || "",
      description: brand.description || "",
    },
    validationSchema: brandValid,
    onSubmit: (value) => {
      value.id = brand.id;
      setConfirmLoading(true);

      brandApi
        .updateBrand(value)
        .then((res) => {
          toggleModal();
          setConfirmLoading(false);
          if (res.status === response.SUCCESS) {
            dispatch(fetchAllBrand());
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

    brandApi
      .deleteBrand({ id: brand.id })
      .then((res) => {
        togglePop();
        setConfirmLoading(false);
        if (res.status === response.SUCCESS) {
          dispatch(fetchAllBrand());
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
      <td>{index + 1}</td>
      <td>{brand.name}</td>
      <td>{brand.description}</td>
      <td>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={toggleModal}
          >
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
            <button
              type="button"
              className="btn btn-danger"
              onClick={togglePop}
            >
              Delete
            </button>
          </Popconfirm>
        </div>
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
                placeholder="Email người gửi..."
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
                placeholder="Nội dung phản hồi..."
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

export default BrandItem;
