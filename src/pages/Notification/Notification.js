import React, { useState } from "react";
import useTitle from "../../hooks/useTitle";
import { Upload, Button } from "antd";
import { UploadOutlined, DownloadOutlined } from "@ant-design/icons";
import CouponList from "../../components/Coupon/CouponList";
import Breadcrumb from "../../components/Common/Breadcrumb";
import * as PATH_URL from "../../constants/apiUrl";
import notificationApi from "../../apis/notificationApi";
import toast from "../../helpers/toast";
import response from "../../constants/response";
import { fetchAllCoupon } from "../../actions/action";
import { useDispatch } from "react-redux";

function Notification() {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  useTitle("Notification");

  const handleClickSendOneUser = () => {};

  const handleClickSendAllUser = () => {
    const noti = { title, body, type: "ALL_USER" };

    console.log("noti: ", noti);

    notificationApi
      .newNotification(noti)
      .then((res) => {
        if (res.status === response.SUCCESS) {
          toast.success("Thành công", "Gửi thông báo thành công");
        }
      })
      .catch((err) => {
        toast.error("Thất bại", "Gửi thông báo thất bại");
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
              <form className="form-custom">
                <div className="digital-add needs-validation">
                  <div className="form-group">
                    <label className="col-form-label pt-0">Title</label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Please input title..."
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label pt-0">Content</label>
                    <input
                      type="text"
                      name="body"
                      className="form-control"
                      onChange={(e) => setBody(e.target.value)}
                      placeholder="Please input content..."
                    />
                  </div>
                </div>
                <div className="submit-box">
                  <Button
                    type="primary"
                    style={{ marginRight: "4px" }}
                    onClick={handleClickSendAllUser}
                  >
                    Send All User
                  </Button>
                  <Button type="primary" onClick={handleClickSendOneUser}>
                    One user
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

export default Notification;
