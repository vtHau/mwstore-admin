import React, { useState } from "react";
import useTitle from "../../hooks/useTitle";
import { Button, Modal } from "antd";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { Table } from "react-bootstrap";
import * as PATH_URL from "../../constants/apiUrl";
import notificationApi from "../../apis/notificationApi";
import toast from "../../helpers/toast";
import response from "../../constants/response";
import useToggle from "../../hooks/useToggle";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { notiValid } from "./../../helpers/validate";

function Notification() {
  const users = useSelector((state) => state.userReducer.users);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [openSendCoupon, toggleSendCoupon] = useToggle(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  useTitle("Notification");

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: "",
      body: "",
      image: "",
    },
    validationSchema: notiValid,
    onSubmit: (value) => {
      const { title, body, image } = value;
      setTitle(title);
      setBody(body);
      setImage(image);
      toggleSendCoupon();
    },
  });

  const handleSendUser = (user_id) => {
    const noti = { title, body, image, user_id, type: "ONE_USER" };

    notificationApi
      .newNotification(noti)
      .then((res) => {
        if (res.status === response.SUCCESS) {
          return toast.success("Thành công", "Gửi thông báo thành công");
        }
      })
      .catch((err) => {
        return toast.error("Thất bại", "Gửi thông báo thất bại");
      });
  };

  const handleSendAll = () => {
    setConfirmLoading(true);
    const noti = { title, body, image, type: "ALL_USER" };

    notificationApi
      .newNotification(noti)
      .then((res) => {
        if (res.status === response.SUCCESS) {
          setConfirmLoading(false);
          return toast.success("Thành công", "Gửi thông báo thành công");
        }
        setConfirmLoading(false);
      })
      .catch((err) => {
        setConfirmLoading(false);
        return toast.error("Thất bại", "Gửi thông báo thất bại");
      });
  };

  return (
    <>
      <Breadcrumb title="Notification" parent="Notification" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Notification</h5>
          </div>
          <div className="card-body">
            <div className="clearfix"></div>
            <div className="product-physical">
              <form className="form-custom" onSubmit={formik.handleSubmit}>
                <div className="digital-add needs-validation">
                  <div className="form-group">
                    <label className="col-form-label pt-0">Title</label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      value={formik.values.title}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      placeholder="Please input title..."
                    />
                    {formik.errors.title && formik.touched.title && (
                      <p className="error-field">{formik.errors.title}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="col-form-label pt-0">Content</label>
                    <input
                      type="text"
                      name="body"
                      className="form-control"
                      value={formik.values.body}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      placeholder="Please input body..."
                    />
                    {formik.errors.body && formik.touched.body && (
                      <p className="error-field">{formik.errors.body}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="col-form-label pt-0">
                      Image (no require)
                    </label>
                    <input
                      type="text"
                      name="image"
                      className="form-control"
                      value={formik.values.image}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      placeholder="Please input image link..."
                    />
                    {formik.errors.image && formik.touched.image && (
                      <p className="error-field">{formik.errors.image}</p>
                    )}
                  </div>
                </div>
                <div className="submit-box">
                  <Button type="primary" htmlType="submit">
                    Send notification
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Modal
        visible={openSendCoupon}
        onOk={toggleSendCoupon}
        onCancel={toggleSendCoupon}
        footer={null}
      >
        <p className="title-section">Send Notification</p>
        <Table
          className="table-custom"
          style={{ height: "430px", overflowY: "scroll", display: "block" }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => (
              <tr key={key}>
                <td>
                  <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left">
                        <img
                          className="rounded-circle border-circle"
                          src={PATH_URL.AVATAR_IMAGE + user.image}
                          alt={user.name}
                        />
                      </div>
                      <div className="widget-content-left flex2">
                        <div className="widget-heading">{user.name}</div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>
                  <Button
                    type="primary"
                    onClick={() => handleSendUser(user.id)}
                  >
                    Send
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            type="primary"
            shape="round"
            size="large"
            loading={confirmLoading}
            onClick={handleSendAll}
          >
            Send all
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default Notification;
