import React, { useEffect, useState } from "react";
import response from "../../constants/response";
import productApi from "../../apis/productApi";

function TopProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productApi
      .getTopProduct()
      .then((res) => {
        if (res.status === response.SUCCESS) {
          setProducts(res.data);
        }
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="col-12">
      <div className="card">
        <div className="card-header">
          <h5>Top product view</h5>
        </div>
        <div className="card-body">
          <ul className="list-group">
            {products.map((product, key) => (
              <a
                key={key}
                className="list-group-item list-group-item-action"
                href={`${process.env.REACT_APP_BASE_URL_USER}product/${product.slug}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {product.name} - {product.visit} <i className="fa fa-eye"></i>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopProduct;
