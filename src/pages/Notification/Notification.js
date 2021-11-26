import React, { useState } from "react";
import useTitle from "../../hooks/useTitle";
import { Upload, Button } from "antd";
import { UploadOutlined, DownloadOutlined } from "@ant-design/icons";
import CouponList from "../../components/Coupon/CouponList";
import Breadcrumb from "../../components/Common/Breadcrumb";
import * as PATH_URL from "../../constants/apiUrl";
import importApi from "../../apis/importApi";
import toast from "../../helpers/toast";
import response from "../../constants/response";
import { fetchAllCoupon } from "../../actions/action";
import { useDispatch } from "react-redux";

function Notification() {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const dispatch = useDispatch();
  useTitle("Notification");

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
            <div className="product-physical"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notification;
