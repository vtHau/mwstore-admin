import React from "react";
import { Box, MessageSquare, Users, Grid } from "react-feather";
import { isEmpty } from "lodash";
import CountUp from "react-countup";

function StatisticHeader(props) {
  const { dataHeader } = props;

  return (
    <>
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
                    <span className="m-0">Order</span>
                    <h3 className="mb-0">
                      <CountUp className="counter" end={dataHeader[4]} />
                      <small> Order</small>
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
    </>
  );
}

export default StatisticHeader;
