import React, { useState } from "react";
import { Popconfirm, Button } from "antd";
import galleryApi from "../../apis/galleryApi";
import response from "../../constants/response";
import useToggle from "../../hooks/useToggle";
import toast from "../../helpers/toast";
import * as PATH_URL from "./../../constants/apiUrl";

function GalleryItem(props) {
  const { index, gallery, getGalleryProduct } = props;
  const [openPop, togglePop] = useToggle(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleDelete = () => {
    setConfirmLoading(true);
    galleryApi
      .deleteGallery({ id: gallery.id })
      .then((res) => {
        togglePop();
        setConfirmLoading(false);
        if (res.status === response.SUCCESS) {
          getGalleryProduct();
          return toast.success("Success", "Delete gallery success");
        }
        return toast.success("Fail", "Delete gallery fail");
      })
      .catch((err) => {
        togglePop();
        setConfirmLoading(false);
        return toast.success("Fail", "Delete gallery fail");
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
                src={PATH_URL.GALLERY_IMAGE + gallery.image}
                alt={gallery.id}
              />
            </div>
            <div className="widget-content-left flex2">
              <div className="widget-heading">{gallery.product.name}</div>
            </div>
          </div>
        </div>
      </td>
      <td>
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
      </td>
    </tr>
  );
}

export default GalleryItem;
