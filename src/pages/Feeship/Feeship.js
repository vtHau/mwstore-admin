import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Divider } from "antd";
import useTitle from "../../hooks/useTitle";
import Breadcrumb from "../../components/common/breadcrumb";
import feeshipApi from "../../apis/feeshipApi";
import AddressSelect from "./../../components/Address/AddressSelect";
import response from "../../constants/response";
import FeeshipItem from "./../../components/Feeship/FeeshipItem";

function Feeship() {
  const [feeships, setFeeships] = useState([]);
  useTitle("Feeship list");

  const fetchAllFeeship = () => {
    feeshipApi
      .getAllFeeship()
      .then((res) => {
        if (res.status === response.SUCCESS) {
          setFeeships(res.feeships);
        }
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchAllFeeship();
  }, []);

  return (
    <>
      <Breadcrumb title="Feeship List" parent="Feeship" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Feeship Details</h5>
          </div>
          <div className="card-body">
            <div className="clearfix"></div>
            <div className="product-physical">
              <AddressSelect fetchAllFeeship={fetchAllFeeship} />
              <Divider />
              <h4>List Feeship</h4>
              <Table className="table-custom">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>City</th>
                    <th>Province</th>
                    <th>Village</th>
                    <th>Feeship</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {feeships.map((feeship, key) => (
                    <FeeshipItem
                      feeship={feeship}
                      key={key}
                      index={key}
                      fetchAllFeeship={fetchAllFeeship}
                    />
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feeship;
