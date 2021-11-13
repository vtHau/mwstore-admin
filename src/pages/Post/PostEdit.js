import React, { useEffect, useState } from "react";
import { CKEditor } from "ckeditor4-react";
import parse from "html-react-parser";
import { Button } from "antd";
import { useFormik } from "formik";
import { isEmpty } from "lodash";
import { useParams, Redirect } from "react-router-dom";
import { postUpdateValid } from "./../../helpers/validate";
import useTitle from "../../hooks/useTitle";
import Breadcrumb from "../../components/Common/Breadcrumb";
import postApi from "../../apis/postApi";
import response from "../../constants/response";
import { path } from "../../constants/path";
import WaveTopBottomLoading from "../../components/Loading/WaveTopBottomLoading";
import toast from "../../helpers/toast";

function PostEdit() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [redirectPost, setRedirectPost] = useState(false);

  useTitle("Post Edit");

  useEffect(() => {
    postApi
      .getPost({ id })
      .then((res) => {
        if (res.status === response.SUCCESS) {
          setPost(res.post);
        } else {
          setRedirectPost(true);
        }
      })
      .catch((err) => {
        setRedirectPost(true);
      });
  }, [id]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      product_id: post.product_id || "",
      title: post.title || "",
      content: post.content || "",
    },
    validationSchema: postUpdateValid,
    onSubmit: (value) => {
      setConfirmLoading(true);
      postApi
        .updatePost(value)
        .then((res) => {
          setConfirmLoading(false);
          if (res.status === response.SUCCESS) {
            toast.success("Success", "Update post success");
            return setRedirectPost(true);
          }
          return toast.success("Fail", "Update post fail");
        })
        .catch((err) => {
          setRedirectPost(false);
          return toast.success("Fail", "Update post fail");
        });
    },
  });

  if (redirectPost) {
    return <Redirect to={path.POST_LIST} />;
  }

  return (
    <>
      <Breadcrumb title="Post Edit" parent="Post" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Post Edit</h5>
          </div>
          <div className="card-body">
            <div className="clearfix"></div>
            {!isEmpty(post) ? (
              <div className="product-physical">
                <form className="form-custom" onSubmit={formik.handleSubmit}>
                  <div className="digital-add needs-validation">
                    <div className="form-group">
                      <label className="col-form-label pt-0">Name</label>
                      <input
                        readOnly
                        type="text"
                        className="form-control"
                        value={post.product.name}
                      />
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
                      Update
                    </Button>
                  </div>
                </form>
              </div>
            ) : (
              <WaveTopBottomLoading />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PostEdit;
