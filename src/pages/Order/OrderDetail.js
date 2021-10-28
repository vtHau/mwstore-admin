import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Divider } from "antd";
import { isEmpty } from "lodash";
import { useParams, useHistory, Redirect } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Breadcrumb from "../../components/common/breadcrumb";
import orderApi from "../../apis/orderApi";
import response from "../../constants/response";
import { formatPrice, formatPhone } from "./../../helpers/formats";
import { path } from "../../constants/path";
import WaveTopBottomLoading from "./../../components/Loading/WaveTopBottomLoading";
import * as PATH_URL from "../../constants/apiUrl";

function OrderDetail() {
  const { code } = useParams();
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const [user, setUser] = useState({});
  const [shipping, setShipping] = useState({});
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [couponPrice, setCouponPrice] = useState(0);
  const [feeshipPrice, setFeeshipPrice] = useState(25000);
  const [redirectOrder, setRedirectOrder] = useState(false);

  useTitle("Order Detail");

  useEffect(() => {
    orderApi
      .getOrderDetail({ code })
      .then((res) => {
        if (res.status === response.SUCCESS) {
          const { order } = res;
          const { user, shipping, order_details: products } = order;

          setTotalPrice(parseInt(order.total_order));
          setOrder(order);
          setUser(user);
          setShipping(shipping);
          setProducts(products);

          if (order.coupon !== null) {
            setCouponPrice(
              parseInt(order.total_order * (order.coupon.percent / 100))
            );
          }

          if (order.feeship !== null) {
            setFeeshipPrice(parseInt(order.feeship.feeship));
          }
        } else {
          setRedirectOrder(true);
        }
      })
      .catch((err) => {});
  }, [id]);

  if (redirectOrder) {
    return <Redirect to={path.ORDER_LIST} />;
  }

  return (
    <>
      <Breadcrumb title="Order Details" parent="Order" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Order Details</h5>
          </div>
          <div className="card-body">
            <div className="clearfix"></div>
            {!isEmpty(order) && !isEmpty(shipping) ? (
              <div className="product-physical">
                <h4>Info customer</h4>
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                    <Table className="table-custom">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Address</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{formatPhone(user.phone)}</td>
                          <td>
                            {user.address !== null
                              ? order.user.address
                              : "No Address"}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
                <Divider />
                <h4>Info Receice</h4>
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                    <Table className="table-custom">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Payment</th>
                          <th>Note</th>
                          <th>Address</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{shipping.name}</td>
                          <td>{shipping.email}</td>
                          <td>{formatPhone(shipping.phone)}</td>
                          <td>
                            {shipping.method === 0
                              ? "Cash"
                              : shipping.method === 1
                              ? "VN Pay"
                              : "Momo"}
                          </td>
                          <td>
                            {shipping.note !== null ? shipping.note : "No Note"}
                          </td>
                          <td>{shipping.address}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
                <Divider />

                <h4>Product Order</h4>
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                    <Table className="table-custom">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((product, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{product.product_name}</td>
                            <td>{formatPrice(product.product_price)}</td>
                            <td>{product.product_quantity}</td>
                            <td>{formatPrice(product.total_price)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </div>
                <Divider />

                <h4>Payment Info</h4>
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                    <Table className="table-custom">
                      <thead>
                        <tr>
                          <th>Temp money</th>
                          <th>Coupon</th>
                          <th>Feeship</th>
                          <th>Total</th>
                          <th>Print Order</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{formatPrice(totalPrice)}</td>
                          <td>{formatPrice(couponPrice)}</td>
                          <td>{formatPrice(feeshipPrice)}</td>
                          <td>
                            {formatPrice(
                              totalPrice + feeshipPrice - couponPrice
                            )}
                          </td>
                          <td>
                            <a
                              href={PATH_URL.PRINT_ORDER + order.code}
                              target="_blank"
                              rel="noreferrer"
                              className="btn"
                            >
                              Print order
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            ) : (
              <WaveTopBottomLoading />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetail;
