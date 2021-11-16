import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import visitorApi from "../../apis/visitorApi";
import response from "../../constants/response";
import useDownload from "../../hooks/useDownload";
import useTitle from "../../hooks/useTitle";
import Breadcrumb from "../../components/Common/Breadcrumb";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import * as PATH_URL from "../../constants/apiUrl";

function Visitor() {
  const [visitors, setVisitors] = useState([]);
  const [downloadFile, isDownloading] = useDownload(
    PATH_URL.EXPORT_EXCEL_VISITOR,
    "visitor"
  );

  useTitle("All Visitor");

  const fetchAllVisitor = () => {
    visitorApi
      .getAllVisitor()
      .then((res) => {
        if (res.status === response.SUCCESS) {
          setVisitors(res.visitors);
        }
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchAllVisitor();
  }, []);

  return (
    <>
      <Breadcrumb title="All Visitor" parent="Visitor" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Visitor Details</h5>
          </div>
          <div className="card-body">
            <div className="clearfix"></div>
            <div className="product-physical">
              {visitors.length ? (
                <Table className="table-custom">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>IP</th>
                      <th>Visit</th>
                      <th>OS</th>
                      <th>Device</th>
                      <th>Browser</th>
                      <th>Time</th>
                      <th>Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visitors.map((visitor, key) => (
                      <tr key={key}>
                        <td>{key + 1}</td>
                        <td>{visitor.ip}</td>
                        <td>{visitor.visit}</td>
                        <td>{visitor.os}</td>
                        <td>{visitor.device}</td>
                        <td>{visitor.browser}</td>
                        <td>{visitor.time}</td>
                        <td title={visitor.more_info}>
                          {visitor.more_info.substring(60) + "..."}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <h6 className="no-item">No item to show</h6>
              )}
            </div>
            <div className="pull-right import-export">
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

export default Visitor;
