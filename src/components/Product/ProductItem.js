import React, { useState } from "react";
import { Button, Popconfirm } from "antd";
import * as PATH_URL from "./../../constants/apiUrl";
import productApi from "../../apis/productApi";
import response from "../../constants/response";
import { fetchAllProduct } from "./../../actions/action";
import useToggle from "../../hooks/useToggle";
import toast from "../../helpers/toast";
import { formatPrice, formatString } from "../../helpers/formats";
import ProductEditModal from "./ProductEditModal";
import { useDispatch } from "react-redux";
import { path } from "../../constants/path";
import { Link } from "react-router-dom";

function SliderItem(props) {
  const { index, product } = props;
  const dispatch = useDispatch();
  const [openPop, togglePop] = useToggle(false);
  const [openModal, toggleModal] = useToggle(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleDelete = () => {
    setConfirmLoading(true);

    productApi
      .deleteProduct({ id: product.id })
      .then((res) => {
        togglePop();
        setConfirmLoading(false);
        if (res.status === response.SUCCESS) {
          dispatch(fetchAllProduct());
          return toast.success("Success", "Delete product success");
        }
        return toast.success("Fail", "Delete product fail");
      })
      .catch((err) => {
        togglePop();
        setConfirmLoading(false);
        return toast.success("Fail", "Delete product fail");
      });
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td className="text-left">
        <div className="widget-content p-0">
          <div className="widget-content-wrapper">
            <div className="widget-content-left mr-3">
              <img
                className="border-circle"
                src={PATH_URL.PRODUCT_IMAGE + product.image}
                alt={product.name}
              />
            </div>
            <div className="widget-content-left flex2">
              <div className="widget-heading">{product.name}</div>
              <div className="widget-subheading opacity-7">
                {formatString(product.description, 100)}
              </div>
            </div>
          </div>
        </div>
      </td>
      <td>{formatPrice(product.price)}</td>
      <td>{product.brand.name}</td>
      <td>
        {product.feather === "1" ? (
          <span className="badge badge-success">Feather</span>
        ) : (
          <span className="badge badge-danger">Not Feather</span>
        )}
      </td>
      <td>
        <div className="btn-group">
          <Button type="primary">
            <Link
              to={{
                pathname: path.GALLERY_DETAIL + product.id,
                state: { productName: product.name },
              }}
            >
              Gallery
            </Link>
          </Button>
          <Button type="primary" onClick={toggleModal}>
            Edit
          </Button>
          <Popconfirm
            title="Bạn có thật sự muốn xóa ?"
            visible={openPop}
            onConfirm={handleDelete}
            okButtonProps={{ loading: confirmLoading }}
            onCancel={togglePop}
            okText="Có chứ"
            cancelText="Không nha"
          >
            <Button type="danger" onClick={togglePop}>
              Delete
            </Button>
          </Popconfirm>
        </div>
      </td>
      <ProductEditModal
        product={product}
        openModal={openModal}
        toggleModal={toggleModal}
      />
    </tr>
  );
}

export default SliderItem;
