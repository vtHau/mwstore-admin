import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Button } from "antd";
import response from "../../constants/response";
import toast from "../../helpers/toast";
import productApi from "../../apis/productApi";
import sliderApi from "../../apis/sliderApi";
import { sliderValid } from "../../helpers/validate";
import useTitle from "../../hooks/useTitle";
import Breadcrumb from "../../components/common/breadcrumb";
import { Redirect } from "react-router-dom";
import { path } from "../../constants/path";

function SliderNew() {
  const [products, setProducts] = useState([]);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useTitle("Slider list");

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      product_id: (products[0] && products[0].id) || "",
      show_hide: 1,
      image: null,
    },
    validationSchema: sliderValid,
    onSubmit: (value) => {
      setConfirmLoading(true);
      const slider = new FormData();

      slider.append("name", value.name);
      slider.append("product_id", value.product_id);
      slider.append("show_hide", value.show_hide);
      slider.append("image", value.image);

      sliderApi
        .newSlider(slider)
        .then((res) => {
          setConfirmLoading(false);
          if (res.status === response.SUCCESS) {
            toast.success("Success", "Save slider success");
            return setRedirect(true);
          }
          return toast.success("Fail", "Save slider fail");
        })
        .catch((err) => {
          setConfirmLoading(false);
          return toast.success("Fail", "Save slider fail");
        });
    },
  });

  useEffect(() => {
    productApi
      .getAllProduct()
      .then((res) => {
        if (res.status === response.SUCCESS) {
          setProducts(res.products);
        }
      })
      .catch((err) => {});
  }, []);

  if (redirect) {
    return <Redirect to={path.SLIDER_LIST} />;
  }

  return (
    <>
      <Breadcrumb title="Slider New" parent="Slider" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Slider new</h5>
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
                      placeholder="Please input slider name..."
                    />
                    {formik.errors.name && formik.touched.name && (
                      <p className="error-field">{formik.errors.name}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="col-form-label pt-0">Product</label>
                    <select
                      className="browser-default custom-select"
                      name="product_id"
                      value={formik.values.product_id}
                      onBlur={formik.handleBlur}
                      onChange={(e) =>
                        formik.setFieldValue("product_id", e.target.value)
                      }
                    >
                      {products.map((product, key) => (
                        <option key={key} value={product.id}>
                          {product.name}
                        </option>
                      ))}
                    </select>
                    {formik.errors.product_id && formik.touched.product_id && (
                      <p className="error-field">{formik.errors.product_id}</p>
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

export default SliderNew;
