import React, { useState } from "react";
import { Popconfirm } from "antd";
import { useDispatch } from "react-redux";
import brandApi from "../../apis/brandApi";
import { fetchAllBrand } from "./../../actions/action";
import response from "../../constants/response";
import useToggle from "./../../hooks/useToggle";
import toast from "./../../helpers/toast";
import BrandEditModal from "./BrandEditModal";

function BrandItem(props) {
  const { index, brand } = props;
  const dispatch = useDispatch();
  const [openPop, togglePop] = useToggle(false);
  const [openModal, toggleModal] = useToggle(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleDelete = () => {
    setConfirmLoading(true);

    brandApi
      .deleteBrand({ id: brand.id })
      .then((res) => {
        togglePop();
        setConfirmLoading(false);
        if (res.status === response.SUCCESS) {
          dispatch(fetchAllBrand());
          return toast.success("Success", "Delete brand success");
        }
        return toast.success("Fail", "Delete brand fail");
      })
      .catch((err) => {
        togglePop();
        setConfirmLoading(false);
        return toast.success("Fail", "Delete brand fail");
      });
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{brand.name}</td>
      <td>{brand.description}</td>
      <td>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={toggleModal}
          >
            Edit
          </button>
          <Popconfirm
            title="Bạn có thật sự muốn xóa ?"
            visible={openPop}
            onConfirm={handleDelete}
            okButtonProps={{ loading: confirmLoading }}
            onCancel={togglePop}
            okText="Có chứ"
            cancelText="Không nha"
          >
            <button
              type="button"
              className="btn btn-danger"
              onClick={togglePop}
            >
              Delete
            </button>
          </Popconfirm>
        </div>
      </td>
      <BrandEditModal
        brand={brand}
        openModal={openModal}
        toggleModal={toggleModal}
      />
    </tr>
  );
}

export default BrandItem;
