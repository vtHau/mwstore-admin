import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../../hooks/useTitle";
import brandApi from "../../apis/brandApi";
import response from "../../constants/response";
import Breadcrumb from "../../components/common/breadcrumb";

function BrandList() {
  const [brands, setBrands] = useState([]);
  useTitle("Brand list");

  useEffect(() => {
    brandApi.getAllBrand().then((res) => {
      if (res.status === response.SUCCESS) {
        setBrands(res.brands);
      }
    });
  }, []);

  const handleDelete = () => {
    toast.success("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "color",
    });
  };

  return (
    <>
      <Breadcrumb title="Brand List" parent="Brand" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Brand Details</h5>
          </div>
          <div className="card-body">
            <div className="clearfix"></div>
            <div className="product-physical">
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
                      <tr key={key}>
                        <td>{key + 1}</td>
                        <td>{brand.name}</td>
                        <td>{brand.description}</td>
                        <td>
                          <div className="btn-group">
                            <button type="button" className="btn btn-primary">
                              Edit
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={handleDelete}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <h6 className="no-item">
                  Không có thương hiện nào để hiển thị
                </h6>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer theme="dark" />
    </>
  );
}

export default BrandList;
