import React from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import BrandItem from "./BrandItem";

function BrandList() {
  const brands = useSelector((state) => state.brandReducer.brands);

  return (
    <>
      {brands.length ? (
        <Table className="table-custom">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((brand, key) => (
              <BrandItem key={key} index={key} brand={brand} />
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
