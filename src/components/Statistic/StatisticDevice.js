import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import response from "../../constants/response";
import visitorApi from "../../apis/visitorApi";

const handleDataPie = (data) => {
  return {
    labels: ["Mobile", "Table", "Desktop"],
    datasets: [
      {
        data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
};

function StatisticDevice() {
  const [device, setDevice] = useState({});

  useEffect(() => {
    visitorApi
      .getDeviceVisitor()
      .then((res) => {
        if (res.status === response.SUCCESS) {
          setDevice(handleDataPie(res.data));
        }
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="col-6">
      <div className="card">
        <div className="card-header">
          <h5>Device Visit</h5>
        </div>
        <div className="card-body">
          <Pie height={200} data={device} />
        </div>
      </div>
    </div>
  );
}

export default StatisticDevice;
