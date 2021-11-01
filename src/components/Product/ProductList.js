import React from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import ProductItem from "./ProductItem";

function BrandList() {
  const products = useSelector((state) => state.productReducer.products);

  return (
    <>
      {products.length ? (
        <Table className="table-custom">
          <thead>
            <tr>
              <th>#</th>
              <th className="text-left">Name</th>
              <th>Price</th>
              <th>Brand</th>
              <th>Feather</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, key) => (
              <ProductItem key={key} index={key} product={product} />
            ))}
          </tbody>
        </Table>
      ) : (
        <h6 className="no-item">No item to show</h6>
      )}
    </>
  );
}

export default BrandList;
