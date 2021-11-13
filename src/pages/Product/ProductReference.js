import React, { useState } from "react";
import { Button, Select } from "antd";
import useTitle from "../../hooks/useTitle";
import ProductItemCrawl from "../../components/Product/ProductItemCrawl";
import Breadcrumb from "../../components/common/breadcrumb";
import productApi from "../../apis/productApi";
import response from "../../constants/response";
import toast from "../../helpers/toast";

const { Option } = Select;

function ProductCrawl() {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [brand, setBrand] = useState("samsung");
  const [products, setProducts] = useState([]);

  useTitle("Product Reference");

  const crawlProduct = () => {
    setConfirmLoading(true);
    productApi
      .productCrawl({ brand })
      .then((res) => {
        setConfirmLoading(false);
        if (res.status === response.SUCCESS) {
          setProducts(res.data);
          return toast.success("Success", "Crawl product success");
        }
        return toast.error("Fail", "Crawl product fail");
      })
      .catch((err) => {
        setConfirmLoading(false);
        return toast.error("Fail", "Crawl product fail");
      });
  };

  return (
    <>
      <Breadcrumb title="Product Reference" parent="Product" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Product Reference</h5>
          </div>
          <div className="card-body">
            <div className="clearfix"></div>
            <div className="product-physical">
              <div className="col-md-12 text-center">
                <h5>Select brand</h5>
                <Select
                  style={{ width: "30%", display: "block", margin: "0 auto" }}
                  showSearch
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                  value={brand}
                  onChange={(brand) => setBrand(brand)}
                >
                  <Option value="samsung">Samsung</Option>
                  <Option value="nokia">Nokia</Option>
                  <Option value="oppo">Oppo</Option>
                  <Option value="realme">Realme</Option>
                  <Option value="vivo">Vivo</Option>
                  <Option value="vsmart">Vsmart</Option>
                  <Option value="xiaomi">Xiaomi</Option>
                </Select>
                <Button
                  type="primary"
                  className="mt-2 btn btn-primary"
                  loading={confirmLoading}
                  onClick={crawlProduct}
                >
                  Get data
                </Button>
              </div>
            </div>
            <div className="product-list mt-5">
              <div className="row products-admin ratio_asos">
                {products.map((product, key) => (
                  <ProductItemCrawl key={key} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCrawl;
