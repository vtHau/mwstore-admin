import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/common/breadcrumb";
import { Box, MessageSquare, Users, Grid } from "react-feather";
import { isEmpty } from "lodash";
import { Table } from "react-bootstrap";
import moment from "moment";
import CountUp from "react-countup";
import DatePicker from "react-datepicker";
import { Bar, Doughnut } from "react-chartjs-2";
import response from "../../constants/response";
import statisticApi from "../../apis/statisticApi";
import visitorApi from "../../apis/visitorApi";
import productApi from "../../apis/productApi";

const handleDataStatistic = (data) => {
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

const doughnut = {
  labels: ["Brand ", "Product ", "Coupon ", "User ", "Order ", "Comment "],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
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
};

function Statistic() {
  const [statistics, setStatistics] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [products, setProducts] = useState([]);
  const [visitor, setVisitor] = useState({});
  const [dataHeader, setDataHeader] = useState({});
  const [dataDoughnut, setDataDoughnut] = useState({});
  const [endDate, setEndDate] = useState(new Date());
  const [errorDay, setErrorDay] = useState(false);

  useEffect(() => {
    productApi
      .getTopProduct()
      .then((res) => {
        if (res.status === response.SUCCESS) {
          setProducts(res.data);
        }
      })
      .catch((err) => {});

    statisticApi
      .filterOther({ date_filter: "TODAY" })
      .then((res) => {
        if (res.status === response.SUCCESS) {
          setStatistics(handleDataStatistic(res.data));
        }
      })
      .catch((err) => {});

    visitorApi
      .getCountVisitor()
      .then((res) => {
        if (res.status === response.SUCCESS) {
          setVisitor(res.data);
        }
      })
      .catch((err) => {});

    statisticApi
      .countGeneral()
      .then((res) => {
        if (res.status === response.SUCCESS) {
          const newData = doughnut;
          newData.datasets[0].data = res.data;
          setDataDoughnut(newData);
          setDataHeader(res.data);
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
            setStatistics(handleDataStatistic(res.data));
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
          setStatistics(handleDataStatistic(res.data));
        }
      })
      .catch((err) => {});
  };

  return (
    <>
      <Breadcrumb title="Statistic" parent="Statistic" />
      <div className="container-fluid">
        <div className="row">
          {!isEmpty(dataHeader) && (
            <>
              <div className="col-xl-3 col-md-6 xl-50">
                <div className="card o-hidden widget-cards">
                  <div className="bg-warning card-body">
                    <div className="media static-top-widget row">
                      <div className="icons-widgets col-4">
                        <div className="align-self-center text-center">
                          <Grid className="font-warning" />
                        </div>
                      </div>
                      <div className="media-body col-8">
                        <span className="m-0">Brand</span>
                        <h3 className="mb-0">
                          <CountUp className="counter" end={dataHeader[4]} />
                          <small> Brand</small>
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
                          <CountUp className="counter" end={dataHeader[1]} />
                          <small> Product</small>
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
                        <span className="m-0">User</span>
                        <h3 className="mb-0">
                          <CountUp className="counter" end={dataHeader[3]} />
                          <small> User</small>
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
                        <span className="m-0">Comment</span>
                        <h3 className="mb-0">
                          <CountUp className="counter" end={dataHeader[5]} />
                          <small> Comment</small>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

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
                          selected={endDate}
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
                          <option value="TODAY">Today</option>
                          <option value="YESTERDAY">Yesterday</option>
                          <option value="LAST_FIVE_DAYS">Last five days</option>
                          <option value="LAST_TEN_DAYS">Last ten days</option>
                          <option value="LAST_ONE_WEEK">Last one week</option>
                          <option value="LAST_ONE_MONTH">Last one month</option>
                          <option value="LAST_ONE_YEAR">Last one year</option>
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
        {!isEmpty(visitor) && (
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h5>Visitor Details</h5>
                </div>
                <div className="card-body">
                  <div className="clearfix"></div>
                  <div className="product-physical">
                    <Table className="table-custom">
                      <thead>
                        <tr>
                          <th>Today</th>
                          <th>Last Week</th>
                          <th>Last Month</th>
                          <th>Last Year</th>
                          <th>All</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{visitor.today}</td>
                          <td>{visitor.week}</td>
                          <td>{visitor.month}</td>
                          <td>{visitor.year}</td>
                          <td>{visitor.all}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="row">
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
          <div className="col-6">
            <div className="card">
              <div className="card-header">
                <h5>Top product view</h5>
              </div>
              <div className="card-body">
                <ul class="list-group">
                  {products.map((product, key) => (
                    <a
                      key={key}
                      className="list-group-item list-group-item-action"
                      href={`${process.env.REACT_APP_BASE_URL_USER}product/${product.slug}`}
                      target="_blank"
                    >
                      {product.name} - {product.visit} <i class="fa fa-eye"></i>
                    </a>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistic;
