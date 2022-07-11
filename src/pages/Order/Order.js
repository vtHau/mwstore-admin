import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useTitle from "../../hooks/useTitle";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import orderApi from "../../apis/orderApi";
import response from "../../constants/response";
import OrderItem from "../../components/Order/OrderItem";

function Order() {
  const [orders, setOrders] = useState([]);
  useTitle("Order List");

  const fetchAllOrder = () => {
    orderApi
      .getAllOrder()
      .then((res) => {
        if (res.status === response.SUCCESS) {
          setOrders(res.data);
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
            <h5>Order List</h5>
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
                      <th>Status</th>
                      <th>Money</th>
                      <th>Time</th>
                      <th>Update</th>
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
