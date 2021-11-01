import React, { useState } from "react";
import { Modal, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { productUpdateValid } from "../../helpers/validate";
import { fetchAllProduct } from "./../../actions/action";
import productApi from "../../apis/productApi";
import response from "../../constants/response";
import toast from "../../helpers/toast";

function SliderEditModal(props) {
  const { product, openModal, toggleModal } = props;
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.brandReducer.brands);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: product.name,
      price: product.price,
      brand_id: product.brand_id,
      feather: product.feather,
      description: product.description,
      image: null,
    },
    validationSchema: productUpdateValid,
    onSubmit: (value) => {
      setConfirmLoading(true);
      const newProduct = new FormData();

      newProduct.append("id", product.id);
      newProduct.append("name", value.name);
      newProduct.append("price", value.price);
      newProduct.append("brand_id", value.brand_id);
      newProduct.append("feather", value.feather);
      newProduct.append("description", value.description);

      if (value.image) {
        newProduct.append("image", value.image);
      }

      productApi
        .updateProduct(newProduct)
        .then((res) => {
          toggleModal();
          setConfirmLoading(false);
          if (res.status === response.SUCCESS) {
            dispatch(fetchAllProduct());
            return toast.success("Success", "Update product success");
          }
          return toast.success("Fail", "Update product fail");
        })
        .catch((err) => {
          toggleModal();
          setConfirmLoading(false);
          return toast.success("Fail", "Update product fail");
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
        <p className="title-section">Update product</p>
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
              placeholder="Please input product name..."
            />
            {formik.errors.name && formik.touched.name && (
              <p className="error-field">{formik.errors.name}</p>
            )}
          </div>

          <div className="form-group">
            <label className="col-form-label pt-0">Price</label>
            <input
              type="number"
              name="price"
              className="form-control"
              value={formik.values.price}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Please input product price..."
            />
            {formik.errors.price && formik.touched.price && (
              <p className="error-field">{formik.errors.price}</p>
            )}
          </div>

          <div className="form-group">
            <label className="col-form-label pt-0">Brand</label>
            <select
              className="browser-default custom-select"
              name="brand_id"
              value={formik.values.brand_id}
              onBlur={formik.handleBlur}
              onChange={(e) => formik.setFieldValue("brand_id", e.target.value)}
            >
              {brands.map((brand, key) => (
                <option key={key} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </select>
            {formik.errors.brand_id && formik.touched.brand_id && (
              <p className="error-field">{formik.errors.brand_id}</p>
            )}
          </div>

          <div className="form-group">
            <label className="col-form-label pt-0">Feather</label>
            <select
              className="browser-default custom-select"
              name="feather"
              value={formik.values.feather}
              onBlur={formik.handleBlur}
              onChange={(e) => formik.setFieldValue("feather", e.target.value)}
            >
              <option value="1">Feather</option>
              <option value="0">Not Feather</option>
            </select>
            {formik.errors.feather && formik.touched.feather && (
              <p className="error-field">{formik.errors.feather}</p>
            )}
          </div>

          <div className="form-group">
            <label className="col-form-label">Description</label>
            <textarea
              name="description"
              rows="3"
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
