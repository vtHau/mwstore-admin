import React, { useState } from "react";
import useTitle from "../../hooks/useTitle";
import { Upload, Button } from "antd";
import { UploadOutlined, DownloadOutlined } from "@ant-design/icons";
import CouponList from "../../components/Coupon/CouponList";
import Breadcrumb from "../../components/common/breadcrumb";
import * as PATH_URL from "../../constants/apiUrl";
import importApi from "../../apis/importApi";
import toast from "../../helpers/toast";
import response from "../../constants/response";
import { fetchAllCoupon } from "../../actions/action";
import { useDispatch } from "react-redux";

function Coupon() {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const dispatch = useDispatch();

  useTitle("Coupon list");

  const importCoupon = (options) => {
    setConfirmLoading(true);
    const { onSuccess, onError, file } = options;
    const fmData = new FormData();
    fmData.append("file", file);

    importApi
      .importCoupon(fmData)
      .then((res) => {
        setConfirmLoading(false);
        if (res.status === response.SUCCESS) {
          onSuccess("Success");
          dispatch(fetchAllCoupon());
          toast.success("Success", "Import success");
        } else {
          toast.success("Fail", "Import fail");
        }
      })
      .catch((err) => {
        setConfirmLoading(false);
        onError("Fail");
        toast.success("Fail", "Import fail");
      });
  };

  return (
    <>
      <Breadcrumb title="Coupon List" parent="Coupon" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Coupon Details</h5>
          </div>
          <div className="card-body">
            <div className="clearfix"></div>
            <div className="product-physical">
              <CouponList />
            </div>
            <div className="pull-right import-export">
              <Upload customRequest={importCoupon} showUploadList={false}>
                <Button
                  type="primary"
                  shape="round"
                  icon={<UploadOutlined />}
                  size="large"
                  loading={confirmLoading}
                >
                  Import Excel
                </Button>
              </Upload>
              <Button
                type="primary"
                shape="round"
                size="large"
                icon={<DownloadOutlined />}
                onClick={() => {
                  return window.open(PATH_URL.EXPORT_EXCEL_COUPON);
                }}
              >
                Export Excel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coupon;
