import React, { useState } from "react";
import { Popconfirm, Button } from "antd";
import feeshipApi from "../../apis/feeshipApi";
import response from "../../constants/response";
import useToggle from "../../hooks/useToggle";
import toast from "../../helpers/toast";
import FeeshipEditModal from "./FeeshipEditModal";
import { formatPrice } from "../../helpers/formats";

function FeeshipItem(props) {
  const { index, feeship, fetchAllFeeship } = props;
  const { city, province, village } = feeship;
  const [openPop, togglePop] = useToggle(false);
  const [openModal, toggleModal] = useToggle(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleDelete = () => {
    setConfirmLoading(true);
    feeshipApi
      .deleteFeeship({ id: feeship.id })
      .then((res) => {
        togglePop();
        setConfirmLoading(false);
        if (res.status === response.SUCCESS) {
          fetchAllFeeship();
          return toast.success("Success", "Delete feeship success");
        }
        return toast.success("Fail", "Delete feeship fail");
      })
      .catch((err) => {
        togglePop();
        setConfirmLoading(false);
        return toast.success("Fail", "Delete feeship fail");
      });
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{city.name}</td>
      <td>{province.name}</td>
      <td>{village.name}</td>
      <td>{formatPrice(feeship.feeship)}</td>
      <td>
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
        <FeeshipEditModal
          feeship={feeship}
          fetchAllFeeship={fetchAllFeeship}
          openModal={openModal}
          toggleModal={toggleModal}
        />
      </td>
    </tr>
  );
}

export default FeeshipItem;
