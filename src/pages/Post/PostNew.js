import React, { useEffect, useState } from "react";
import { CKEditor } from "ckeditor4-react";
import parse from "html-react-parser";
import { Button } from "antd";
import { useFormik } from "formik";
import { Redirect } from "react-router-dom";
import { postUpdateValid } from "../../helpers/validate";
import useTitle from "../../hooks/useTitle";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import productApi from "../../apis/productApi";
import postApi from "../../apis/postApi";
import response from "../../constants/response";
import { path } from "../../constants/path";
import toast from "../../helpers/toast";

function PostNew() {
  const [products, setProducts] = useState([]);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [redirectPost, setRedirectPost] = useState(false);

  useTitle("Post New");

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      product_id: (products[0] && products[0].id) || "",
      title: "",
      content: "",
    },
    validationSchema: postUpdateValid,
    onSubmit: (value) => {
      setConfirmLoading(true);
      postApi
        .updatePost(value)
        .then((res) => {
          setConfirmLoading(false);
          if (res.status === response.SUCCESS) {
            toast.success("Success", "Save post success");
            return setRedirectPost(true);
          }
          return toast.success("Fail", "Save post fail");
        })
        .catch((err) => {
          setRedirectPost(false);
          return toast.success("Fail", "Save post fail");
        });
    },
  });

  useEffect(() => {
    productApi
      .getProductNotPost()
      .then((res) => {
        if (res.status === response.SUCCESS) {
          setProducts(res.data);
        }
      })
      .catch((err) => {});
  }, []);

  if (redirectPost) {
    return <Redirect to={path.POST_LIST} />;
  }

  return (
    <>
      <Breadcrumb title="Post New" parent="Post" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Post New</h5>
          </div>
          <div className="card-body">
            <div className="clearfix"></div>
            <div className="product-physical">
              <form className="form-custom" onSubmit={formik.handleSubmit}>
                <div className="digital-add needs-validation">
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
                    <label className="col-form-label">Title</label>
                    <CKEditor
                      name="title"
                      initData={parse(formik.values.title)}
                      onChange={(title) =>
                        formik.setFieldValue("title", title.editor.getData())
                      }
                    />
                    {formik.errors.title && formik.touched.title && (
                      <p className="error-field">{formik.errors.title}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Content</label>
                    <CKEditor
                      name="content"
                      initData={parse(formik.values.content)}
                      onChange={(content) =>
                        formik.setFieldValue(
                          "content",
                          content.editor.getData()
                        )
                      }
                    />
                    {formik.errors.content && formik.touched.content && (
                      <p className="error-field">{formik.errors.content}</p>
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

export default PostNew;
