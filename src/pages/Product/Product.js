import React from "react";
import useTitle from "../../hooks/useTitle";
import ProductList from "../../components/Product/ProductList";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

function Product() {
  useTitle("Product List");

  return (
    <>
      <Breadcrumb title="Product List" parent="Product" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Product List</h5>
          </div>
          <div className="card-body">
            <div className="clearfix"></div>
            <div className="product-physical">
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
