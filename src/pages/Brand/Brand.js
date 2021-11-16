import React, { useState } from "react";
import useTitle from "../../hooks/useTitle";
import useDownload from "../../hooks/useDownload";
import BrandList from "./../../components/Brand/BrandList";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { Upload, Button } from "antd";
import { UploadOutlined, DownloadOutlined } from "@ant-design/icons";
import * as PATH_URL from "../../constants/apiUrl";
import importApi from "../../apis/importApi";
import toast from "../../helpers/toast";
import response from "../../constants/response";
import { useDispatch } from "react-redux";
import { fetchAllBrand } from "../../actions/action";

function Brand() {
  const dispatch = useDispatch();
  const [downloadFile, isDownloading] = useDownload(
    PATH_URL.EXPORT_EXCEL_BRAND,
    "brand"
  );
  const [confirmLoading, setConfirmLoading] = useState(false);
  useTitle("Brand List");

  const importBrand = async (options) => {
    setConfirmLoading(true);
    const { onSuccess, onError, file } = options;
    const fmData = new FormData();
    fmData.append("file", file);

    importApi
      .importBrand(fmData)
      .then((res) => {
        setConfirmLoading(false);
        if (res.status === response.SUCCESS) {
          onSuccess("Success");
          dispatch(fetchAllBrand());
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
      <Breadcrumb title="Brand List" parent="Brand" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Brand Details</h5>
          </div>
          <div className="card-body">
            <div className="clearfix"></div>
            <div className="product-physical">
              <BrandList />
            </div>
            <div className="pull-right import-export">
              <Upload customRequest={importBrand} showUploadList={false}>
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
                loading={isDownloading}
                icon={<DownloadOutlined />}
                onClick={downloadFile}
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

export default Brand;
