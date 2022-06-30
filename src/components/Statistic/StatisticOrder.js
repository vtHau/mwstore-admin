import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { Bar, Line } from "react-chartjs-2";
import response from "../../constants/response";
import statisticApi from "../../apis/statisticApi";

const handleDataLine = (data) => {
  const { date, sale, profit } = data;

  return {
    labels: date,
    datasets: [
      {
        label: "Sales (VND)",
        data: sale,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Profit (VND)",
        data: profit,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
};

const handleDataBar = (data) => {
  const { date, sale, profit } = data;

  return {
    labels: date,
    datasets: [
      {
        label: "Sales (VND)",
        data: sale,
        borderColor: " #194391",
        backgroundColor: " #194391",
        borderWidth: 2,
      },
      {
        label: "Profit (VND)",
        data: profit,
        borderColor: "#a5a5a5",
        backgroundColor: "#a5a5a5",
        borderWidth: 2,
      },
    ],
  };
};

const lineOptions = {
  maintainAspectRatio: false,
  animation: false,
  legend: {
    display: true,
  },
  scales: {
    xAxes: [
      {
        barPercentage: 0.7,
        categoryPercentage: 0.4,
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        barPercentage: 0.7,
        categoryPercentage: 0.4,
      },
    ],
  },
  tooltips: {
    callbacks: {
      beforeTitle: function (context) {},
      title: function (context) {
        return "Date: " + context[0].label;
      },
      afterTitle: function (context) {},
    },
    mode: "index",
    intersect: false,
    hover: {
      mode: "nearest",
      intersect: true,
    },
  },
};

function StatisticOrder(props) {
  const [typeChar, setTypeChar] = useState("BAR");
  const [dataBar, setDataBar] = useState({});
  const [dataLine, setDataLine] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [errorDay, setErrorDay] = useState(false);

  useEffect(() => {
    statisticApi
      .filterOther({ date_filter: "TODAY" })
      .then((res) => {
        if (res.status === response.SUCCESS) {
          setDataBar(handleDataBar(res.data));
          setDataLine(handleDataLine(res.data));
        }
      })
      .catch((err) => {});
  }, []);

  const handleChangeDate = (date, type) => {
    let isValid = true;
    let startFilter, endFilter;

    if (type === "START_FILTER") {
      setStartDate(date);
      isValid = date < endDate;
      startFilter = moment(date).format("YYYY-MM-DD").toString();
      endFilter = moment(endDate).format("YYYY-MM-DD").toString();
    }

    if (type === "END_FILTER") {
      setEndDate(date);
      isValid = date > startDate;
      startFilter = moment(startDate).format("YYYY-MM-DD").toString();
      endFilter = moment(date).format("YYYY-MM-DD").toString();
    }
    setErrorDay(!isValid);

    if (isValid) {
      statisticApi
        .filterDate({ start_date: startFilter, end_date: endFilter })
        .then((res) => {
          if (res.status === response.SUCCESS) {
            setDataBar(handleDataBar(res.data));
            setDataLine(handleDataLine(res.data));
          }
        })
        .catch((err) => {});
    }
  };

  const handleChangeFilter = (e) => {
    statisticApi
      .filterOther({ date_filter: e.target.value })
      .then((res) => {
        if (res.status === response.SUCCESS) {
          setDataBar(handleDataBar(res.data));
          setDataLine(handleDataLine(res.data));
        }
      })
      .catch((err) => {});
  };

  const handleTypeChar = (e) => {
    setTypeChar(e.target.value);
  };

  return (
    <div className="col-12 xl-100">
      <div className="card">
        <div className="card-header">
          <h5>Order Detail</h5>
        </div>

        <div className="card-body">
          <div className="col-12">
            <div className="form-group">
              <div className="form-row">
                <div className="col-3">
                  <label className="col-form-label">Start filter</label>
                  <DatePicker
                    name="start_filter"
                    className="form-control"
                    selected={startDate}
                    dateFormat="yyyy-MM-dd"
                    onChange={(date) => handleChangeDate(date, "START_FILTER")}
                  />
                  {errorDay && (
                    <p className="error-field">
                      start filter not large end filter
                    </p>
                  )}
                </div>
                <div className="col-3">
                  <label className="col-form-label">End filter</label>
                  <DatePicker
                    name="end_filter"
                    className="form-control"
                    selected={endDate}
                    dateFormat="yyyy-MM-dd"
                    onChange={(date) => handleChangeDate(date, "END_FILTER")}
                  />
                  {errorDay && (
                    <p className="error-field">
                      end filter not small start filter
                    </p>
                  )}
                </div>
                <div className="col-3">
                  <label className="col-form-label">Orther filter</label>
                  <select
                    className="browser-default custom-select"
                    onChange={handleChangeFilter}
                  >
                    <option value="TODAY">Today</option>
                    <option value="YESTERDAY">Yesterday</option>
                    <option value="LAST_FIVE_DAYS">Last five days</option>
                    <option value="LAST_TEN_DAYS">Last ten days</option>
                    <option value="LAST_ONE_WEEK">Last one week</option>
                    <option value="LAST_ONE_MONTH">Last one month</option>
                    <option value="LAST_ONE_YEAR">Last one year</option>
                  </select>
                </div>
                <div className="col-3">
                  <label className="col-form-label">Type char</label>
                  <select
                    className="browser-default custom-select"
                    onChange={handleTypeChar}
                  >
                    <option value="BAR">Bar char</option>
                    <option value="LINE">Line char</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="market-chart">
            {typeChar === "BAR" ? (
              <Bar
                data={dataBar}
                options={lineOptions}
                width={778}
                height={308}
              />
            ) : (
              <Line
                data={dataLine}
                options={lineOptions}
                width={778}
                height={308}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatisticOrder;
