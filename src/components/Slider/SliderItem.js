import React, { useState } from "react";
import { Button, Popconfirm } from "antd";
import * as PATH_URL from "./../../constants/apiUrl";
import sliderApi from "../../apis/sliderApi";
import response from "../../constants/response";
import useToggle from "../../hooks/useToggle";
import toast from "../../helpers/toast";
import SliderEditModal from "./SliderEditModal";

function SliderItem(props) {
  const { index, slider, fetchAllSlider } = props;
  const [openPop, togglePop] = useToggle(false);
  const [openModal, toggleModal] = useToggle(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleDelete = () => {
    setConfirmLoading(true);

    sliderApi
      .deleteSlider({ id: slider.id })
      .then((res) => {
        togglePop();
        setConfirmLoading(false);
        if (res.status === response.SUCCESS) {
          fetchAllSlider();
          return toast.success("Success", "Delete slider success");
        }
        return toast.success("Fail", "Delete slider fail");
      })
      .catch((err) => {
        togglePop();
        setConfirmLoading(false);
        return toast.success("Fail", "Delete slider fail");
      });
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{slider.name}</td>
      <td className="text-left">
        <div className="widget-content p-0">
          <div className="widget-content-wrapper">
            <div className="widget-content-left mr-3">
              <img
                className="border-circle"
                src={PATH_URL.SLIDER_IMAGE + slider.image}
                alt={slider.product.name}
              />
            </div>
            <div className="widget-content-left flex2">
              <div className="widget-heading">{slider.product.name}</div>
            </div>
          </div>
        </div>
      </td>
      <td>
        {slider.show_hide === "1" ? (
          <span className="badge badge-success">Show</span>
        ) : (
          <span className="badge badge-danger">Hide</span>
        )}
      </td>
      <td>
        <div className="btn-group">
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
      <SliderEditModal
        slider={slider}
        openModal={openModal}
        toggleModal={toggleModal}
        fetchAllSlider={fetchAllSlider}
      />
    </tr>
  );
}

export default SliderItem;
