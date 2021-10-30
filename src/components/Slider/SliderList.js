import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import sliderApi from "./../../apis/sliderApi";
import response from "../../constants/response";
import SliderItem from "./SliderItem";

function BrandList() {
  const [sliders, setSliders] = useState([]);

  const fetchAllSlider = () => {
    sliderApi
      .getAllSlider()
      .then((res) => {
        if (res.status === response.SUCCESS) {
          setSliders(res.sliders);
        }
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchAllSlider();
  }, []);

  return (
    <>
      {sliders.length ? (
        <Table className="table-custom">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th className="text-left">Product</th>
              <th>Show /Hide</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sliders.map((slider, key) => (
              <SliderItem
                key={key}
                index={key}
                slider={slider}
                fetchAllSlider={fetchAllSlider}
              />
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
