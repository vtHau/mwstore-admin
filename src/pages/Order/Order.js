import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Divider } from "antd";
import useTitle from "../../hooks/useTitle";
import Breadcrumb from "../../components/Common/Breadcrumb";
import orderApi from "../../apis/orderApi";
import response from "../../constants/response";
import OrderItem from "../../components/Order/OrderItem";

function Order() {
  const [orders, setOrders] = useState([]);
  useTitle("Order list");

  const fetchAllOrder = () => {
    orderApi
      .getAllOrder()
      .then((res) => {
        if (res.status === response.SUCCESS) {
          setOrders(res.orders);
        }
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchAllOrder();
  }, []);

  return (
    <>
      <Breadcrumb title="Order List" parent="Order" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Order Details</h5>
          </div>
          <div className="card-body">
            <div className="clearfix"></div>
            <div className="product-physical">
              {orders.length ? (
                <Table className="table-custom">
                  <thead>
                    <tr>
                      <th>Code Order</th>
                      <th className="text-left">Name</th>
                      <th>Email</th>
                      <th>Time</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, key) => (
                      <OrderItem
                        key={key}
                        order={order}
                        fetchAllOrder={fetchAllOrder}
                      />
                    ))}
                  </tbody>
                </Table>
              ) : (
                <h6 className="no-item">No item to show</h6>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
