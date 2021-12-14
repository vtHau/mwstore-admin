import React, { useState } from "react";
import { Plus } from "react-feather";
import productApi from "../../apis/productApi";
import response from "../../constants/response";
import { fetchAllProduct } from "./../../actions/action";
import toast from "../../helpers/toast";
import { formatPrice, formatString } from "../../helpers/formats";
import { useDispatch } from "react-redux";
import { Spin } from "antd";

function ProductItemCrawl(props) {
  const { product } = props;
  const [confirmLoading, setConfirmLoading] = useState(false);
  const dispatch = useDispatch();

  const addProduct = () => {
    setConfirmLoading(true);
    const {
      name,
      price,
      desc: description,
      brand: brand_id,
      image: src,
    } = product;
    const newProduct = {
      name,
      price,
      description,
      brand_id,
      src,
    };

    productApi
      .newProductCrawl(newProduct)
      .then((res) => {
        setConfirmLoading(false);

        if (res.status === response.SUCCESS) {
          dispatch(fetchAllProduct());
          return toast.success("Success", "Add product success");
        }
        if (res.message === response.PRODUCT_EXIST) {
          return toast.warning("Warning", "Product exist");
        }
        return toast.error("Fail", "Add product fail");
      })
      .catch((err) => {
        setConfirmLoading(false);
        return toast.error("Fail", "Add product fail");
      });
  };

  return (
    <div className="col-xl-3 col-sm-6">
      <div className="card card-shadow">
        <div className="products-admin">
          <div className="card-body product-box">
            <div className="img-wrapper">
              <div className="front">
                <div className="bg-size">
                  <img
                    className="img-fluid blur-up bg-img lazyloaded"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div className="product-hover">
                  <ul>
                    <li>
                      {!confirmLoading && (
                        <button
                          className="btn"
                          type="button"
                          onClick={addProduct}
                        >
                          <Plus className="editBtn" />
                        </button>
                      )}
                      {confirmLoading && <Spin spinning={confirmLoading} />}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="product-detail">
              <div>
                <h6>{product.name}</h6>
              </div>
              <h4>{formatPrice(product.price)}</h4>
              <p>{formatString(product.desc, 40)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItemCrawl;
