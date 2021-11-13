import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/Common/Breadcrumb";
import response from "../../constants/response";
import statisticApi from "../../apis/statisticApi";
import StatisticOrder from "./../../components/Statistic/StatisticOrder";
import StatisticDevice from "./../../components/Statistic/StatisticDevice";
import StatisticVisitor from "./../../components/Statistic/StatisticVisitor";
import StatisticGeneral from "./../../components/Statistic/StatisticGeneral";
import StatisticHeader from "./../../components/Statistic/StatisticHeader";
import TopProduct from "./../../components/Statistic/TopProduct";

const handldeDoughnut = (data) => ({
  labels: ["Brand ", "Product ", "Coupon ", "User ", "Order ", "Comment "],
  datasets: [
    {
      data,
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
});

function Statistic() {
  const [dataHeader, setDataHeader] = useState({});
  const [dataDoughnut, setDataDoughnut] = useState({});

  useEffect(() => {
    statisticApi
      .countGeneral()
      .then((res) => {
        if (res.status === response.SUCCESS) {
          setDataHeader(res.data);
          setDataDoughnut(handldeDoughnut(res.data));
        }
      })
      .catch((err) => {});
  }, []);

  return (
    <>
      <Breadcrumb title="Statistic" parent="Statistic" />
      <div className="container-fluid">
        <div className="row">
          <StatisticHeader dataHeader={dataHeader} />
          <StatisticOrder />
        </div>
        <div className="row">
          <StatisticVisitor />
        </div>
        <div className="row">
          <StatisticGeneral dataDoughnut={dataDoughnut} />
          <StatisticDevice />
        </div>
        <div className="row">
          <TopProduct />
        </div>
      </div>
    </>
  );
}

export default Statistic;
