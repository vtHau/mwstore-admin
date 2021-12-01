import React, { useState } from "react";
import { Popconfirm, Button, Rate } from "antd";
import commentApi from "../../apis/commentApi";
import response from "../../constants/response";
import useToggle from "../../hooks/useToggle";
import toast from "../../helpers/toast";
import * as PATH_URL from "./../../constants/apiUrl";
import ProductLink from "./../ProductLink";

function CommentItem(props) {
  const { index, comment, fetchAllComment } = props;
  const [openPop, togglePop] = useToggle(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleDelete = () => {
    setConfirmLoading(true);
    commentApi
      .deleteComment({ id: comment.id })
      .then((res) => {
        setConfirmLoading(false);
        togglePop();

        if (res.status === response.SUCCESS) {
          fetchAllComment();
          return toast.success("Success", "Delete comment success");
        }
        return toast.error("Fail", "Delete comment fail");
      })
      .catch((err) => {
        setConfirmLoading(false);
        togglePop();

        return toast.error("Fail", "Delete comment fail");
      });
  };

  const handleConfirm = () => {
    setConfirmLoading(true);
    commentApi
      .updateComment({ id: comment.id })
      .then((res) => {
        setConfirmLoading(false);
        if (res.status === response.SUCCESS) {
          fetchAllComment();
          return toast.success("Success", "Comfirm comment success");
        }
        return toast.error("Fail", "Comfirm comment fail");
      })
      .catch((err) => {
        setConfirmLoading(false);
        return toast.error("Fail", "Comfirm comment fail");
      });
  };

  return (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>
        <div className="widget-content p-0">
          <div className="widget-content-wrapper">
            <div className="widget-content-left">
              <img
                className="rounded-circle border-circle"
                src={PATH_URL.AVATAR_IMAGE + comment.user.image}
                alt={comment.user.name}
              />
            </div>
            <div className="widget-content-left flex2">
              <div className="widget-heading">{comment.user.name}</div>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="widget-content p-0">
          <div className="widget-content-wrapper">
            <div className="widget-content-left">
              <img
                className="border-circle"
                src={PATH_URL.PRODUCT_IMAGE + comment.product.image}
                alt={comment.product.name}
              />
            </div>
            <div className="widget-content-left flex2">
              <div className="widget-heading">
                <ProductLink
                  name={comment.product.name}
                  slug={comment.product.slug}
                />
              </div>
            </div>
          </div>
        </div>
      </td>
      <td>
        <Rate disabled value={comment.star} />
      </td>
      <td>{comment.comment}</td>
      <td>{comment.time}</td>
      <td>
        {comment.status === "0" ? (
          <span className="badge badge-danger">Not Confirm</span>
        ) : (
          <span className="badge badge-success">Confirm</span>
        )}
      </td>
      <td>
        <div className="btn-group">
          {comment.status === "0" && (
            <Button
              type="primary"
              onClick={handleConfirm}
              loading={confirmLoading}
            >
              Confirm
            </Button>
          )}

          <Popconfirm
            title="Bạn có thật sự muốn xóa ?"
            visible={openPop}
            onConfirm={handleDelete}
            okButtonProps={{ loading: confirmLoading }}
            onCancel={togglePop}
            okText="Có chứ"
            cancelText="Không nha"
          >
            <Button type="primary" onClick={togglePop} danger>
              Delete
            </Button>
          </Popconfirm>
        </div>
      </td>
    </tr>
  );
}

export default CommentItem;
