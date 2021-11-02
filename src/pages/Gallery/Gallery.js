import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { useFormik } from "formik";
import { values } from "lodash";
import { Table } from "react-bootstrap";
import { useParams, Redirect } from "react-router-dom";
import { galleryValid } from "../../helpers/validate";
import useTitle from "../../hooks/useTitle";
import Breadcrumb from "../../components/common/breadcrumb";
import galleryApi from "../../apis/galleryApi";
import response from "../../constants/response";
import GalleryItem from "./../../components/Gallery/GalleryItem";
import { path } from "../../constants/path";
import WaveTopBottomLoading from "../../components/Loading/WaveTopBottomLoading";
import toast from "../../helpers/toast";

function Gallery() {
  const { id } = useParams();
  const [gallerys, setGallerys] = useState({});
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useTitle("Gallery");

  const getGalleryProduct = () => {
    galleryApi
      .getGallery({ id })
      .then((res) => {
        if (res.status === response.SUCCESS) {
          setGallerys(res.gallerys);
        } else {
          setRedirect(true);
        }
      })
      .catch((err) => {
        setRedirect(true);
      });
  };

  useEffect(() => {
    getGalleryProduct();
  }, [id]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      image: null,
    },
    validationSchema: galleryValid,
    onSubmit: (value) => {
      setConfirmLoading(true);
      const images = values(value.image);
      const newGallery = new FormData();

      newGallery.append("product_id", id);
      images.forEach((image) => newGallery.append("image[]", image));

      galleryApi
        .newGallery(newGallery)
        .then((res) => {
          setConfirmLoading(false);
          if (res.status === response.SUCCESS) {
            getGalleryProduct();
            formik.setFieldValue("image", []);
            toast.success("Success", "Save gallery success");
          }
          return toast.success("Fail", "Save gallery fail");
        })
        .catch((err) => {
          return toast.success("Fail", "Save gallery fail");
        });
    },
  });

  if (redirect) {
    return <Redirect to={path.PRODUCT_LIST} />;
  }

  return (
    <>
      <Breadcrumb title="Gallery List" parent="Gallery" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Gallery List</h5>
          </div>
          <div className="card-body">
            <div className="clearfix"></div>

            {true ? (
              <div className="product-physical">
                <form className="form-custom" onSubmit={formik.handleSubmit}>
                  <div className="digital-add needs-validation">
                    <div className="form-group">
                      <label className="col-form-label">Image</label>
                      <div className="custom-file">
                        <input
                          type="file"
                          className="form-control"
                          name="image"
                          multiple
                          onChange={(e) => {
                            formik.setFieldValue("image", e.target.files);
                          }}
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
            ) : (
              <WaveTopBottomLoading />
            )}
            <div className="product-physical mt-4">
              {gallerys.length ? (
                <Table className="table-custom">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th className="text-left">Image</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gallerys.map((gallery, key) => (
                      <GalleryItem
                        gallery={gallery}
                        key={key}
                        index={key}
                        getGalleryProduct={getGalleryProduct}
                      />
                    ))}
                  </tbody>
                </Table>
              ) : (
                <h6 className="no-item">No item to show</h6>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
