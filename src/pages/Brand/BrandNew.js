import React, { useState } from "react";
import { useFormik } from "formik";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import response from "../../constants/response";
import toast from "./../../helpers/toast";
import brandApi from "./../../apis/brandApi";
import { fetchAllBrand } from "./../../actions/action";
import { brandValid } from "./../../helpers/validate";
import useTitle from "../../hooks/useTitle";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { Redirect } from "react-router-dom";
import { path } from "./../../constants/path";

function BrandNew() {
  const dispatch = useDispatch();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useTitle("Brand list");

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: brandValid,
    onSubmit: (value) => {
      setConfirmLoading(true);

      brandApi
        .updateBrand(value)
        .then((res) => {
          setConfirmLoading(false);
          if (res.status === response.SUCCESS) {
            dispatch(fetchAllBrand());
            toast.success("Success", "Save brand success");
            return setRedirect(true);
          }
          return toast.success("Fail", "Save brand fail");
        })
        .catch((err) => {
          setConfirmLoading(false);
          return toast.success("Fail", "Save brand fail");
        });
    },
  });

  if (redirect) {
    return <Redirect to={path.BRAND_LIST} />;
  }

  return (
    <>
      <Breadcrumb title="Brand New" parent="Brand" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Brand new</h5>
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
                    {formik.errors.description &&
                      formik.touched.description && (
                        <p className="error-field">
                          {formik.errors.description}
                        </p>
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

export default BrandNew;
