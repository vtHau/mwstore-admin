import React from "react";
import { Doughnut } from "react-chartjs-2";

function StatisticGeneral(props) {
  const { dataDoughnut } = props;

  return (
    <div className="col-6">
      <div className="card">
        <div className="card-header">
          <h5>General Details</h5>
        </div>
        <div className="card-body">
          <Doughnut height={200} data={dataDoughnut} />
        </div>
      </div>
    </div>
  );
}

export default StatisticGeneral;
