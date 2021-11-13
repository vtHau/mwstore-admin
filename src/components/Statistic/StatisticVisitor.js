import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import { Table } from "react-bootstrap";
import response from "../../constants/response";
import visitorApi from "../../apis/visitorApi";

function StatisticVisitor() {
  const [visitor, setVisitor] = useState({});

  useEffect(() => {
    visitorApi
      .getCountVisitor()
      .then((res) => {
        if (res.status === response.SUCCESS) {
          setVisitor(res.data);
        }
      })
      .catch((err) => {});
  }, []);

  return (
    <>
      {!isEmpty(visitor) && (
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
      )}
    </>
  );
}

export default StatisticVisitor;
