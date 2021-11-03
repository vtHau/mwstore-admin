import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/common/breadcrumb";
import {
  Navigation,
  Box,
  MessageSquare,
  Users,
  Briefcase,
  CreditCard,
  ShoppingCart,
  Calendar,
} from "react-feather";
import CountUp from "react-countup";
import { Chart } from "react-google-charts";
import DatePicker from "react-datepicker";
import { Bar, Line } from "react-chartjs-2";
import response from "../../constants/response";
import {
  // lineOptions,
  buyOption,
  employeeData,
  employeeOptions,
} from "../../constants/chartData";
// image impoer
import user2 from "../../assets/images/dashboard/user2.jpg";
import user1 from "../../assets/images/dashboard/user1.jpg";
import man from "../../assets/images/dashboard/man.png";
import user from "../../assets/images/dashboard/user.png";
import designer from "../../assets/images/dashboard/designer.jpg";
import statisticApi from "../../apis/statisticApi";

const handleDataStatistic = (data) => {
  const { date, sale, profit, quantity, total } = data;

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
      beforeTitle: function (context) {
        // return "hello";
      },
      title: function (context) {
        return "Date: " + context[0].label;
      },
      afterTitle: function (context) {
        // return "Quantity: " + quantity[context[0]];
      },
    },
    mode: "index",
    intersect: false,
    hover: {
      mode: "nearest",
      intersect: true,
    },
  },
};

function Statistic() {
  const [statistics, setStatistics] = useState({});
  const [start_filter, setStartFilter] = useState(new Date());
  const [end_filter, setEndFilter] = useState(new Date());
  const [errorDay, setErrorDay] = useState(false);

  useEffect(() => {
    statisticApi
      .getStatistic()
      .then((res) => {
        if (res.status === response.SUCCESS) {
          setStatistics(handleDataStatistic(res.data));
        }
      })
      .catch((err) => {});
  }, []);

  const handleChangeDate = (date, type) => {
    let isValid = true;
    if (type === "START_FILTER") {
      setStartFilter(date);
      isValid = date < end_filter;
    }
    if (type === "END_FILTER") {
      setEndFilter(date);
      isValid = date > start_filter;
    }
    setErrorDay(!isValid);

    if (isValid) {
      console.log("holop ne");
    }
  };

  const handleChangeFilter = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <Breadcrumb title="Statistic" parent="Statistic" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-md-6 xl-50">
            <div className="card o-hidden widget-cards">
              <div className="bg-warning card-body">
                <div className="media static-top-widget row">
                  <div className="icons-widgets col-4">
                    <div className="align-self-center text-center">
                      <Navigation className="font-warning" />
                    </div>
                  </div>
                  <div className="media-body col-8">
                    <span className="m-0">Earnings</span>
                    <h3 className="mb-0">
                      $ <CountUp className="counter" end={6659} />
                      <small> This Month</small>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 xl-50">
            <div className="card o-hidden  widget-cards">
              <div className="bg-secondary card-body">
                <div className="media static-top-widget row">
                  <div className="icons-widgets col-4">
                    <div className="align-self-center text-center">
                      <Box className="font-secondary" />
                    </div>
                  </div>
                  <div className="media-body col-8">
                    <span className="m-0">Products</span>
                    <h3 className="mb-0">
                      $ <CountUp className="counter" end={9856} />
                      <small> This Month</small>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 xl-50">
            <div className="card o-hidden widget-cards">
              <div className="bg-primary card-body">
                <div className="media static-top-widget row">
                  <div className="icons-widgets col-4">
                    <div className="align-self-center text-center">
                      <MessageSquare className="font-primary" />
                    </div>
                  </div>
                  <div className="media-body col-8">
                    <span className="m-0">Messages</span>
                    <h3 className="mb-0">
                      $ <CountUp className="counter" end={893} />
                      <small> This Month</small>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 xl-50">
            <div className="card o-hidden widget-cards">
              <div className="bg-danger card-body">
                <div className="media static-top-widget row">
                  <div className="icons-widgets col-4">
                    <div className="align-self-center text-center">
                      <Users className="font-danger" />
                    </div>
                  </div>
                  <div className="media-body col-8">
                    <span className="m-0">New Vendors</span>
                    <h3 className="mb-0">
                      $ <CountUp className="counter" end={45631} />
                      <small> This Month</small>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 xl-100">
            <div className="card">
              <div className="card-header">
                <h5>Statistic order</h5>
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
                          selected={start_filter}
                          dateFormat="yyyy-MM-dd"
                          onChange={(date) =>
                            handleChangeDate(date, "START_FILTER")
                          }
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
                          selected={end_filter}
                          dateFormat="yyyy-MM-dd"
                          onChange={(date) =>
                            handleChangeDate(date, "END_FILTER")
                          }
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
                          <option value="1">Today</option>
                          <option value="12">Todayy</option>
                          <option value="1232">Todayy</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="market-chart">
                  <Bar
                    data={statistics}
                    options={lineOptions}
                    width={778}
                    height={308}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistic;
