import React, { useState } from "react";
import { Popconfirm, Button } from "antd";
import postApi from "../../apis/postApi";
import response from "../../constants/response";
import useToggle from "../../hooks/useToggle";
import toast from "../../helpers/toast";
import { formatString } from "./../../helpers/formats";
import * as PATH_URL from "../../constants/apiUrl";
import { path } from "../../constants/path";
import { Link } from "react-router-dom";

function PostItem(props) {
  const { post, index, fetchAllPost } = props;
  const [openPop, togglePop] = useToggle(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleDelete = () => {
    setConfirmLoading(true);
    postApi
      .deletePost({ id: post.id })
      .then((res) => {
        setConfirmLoading(false);
        togglePop();

        if (res.status === response.SUCCESS) {
          fetchAllPost();
          return toast.success("Success", "Delete post success");
        }
        return toast.error("Fail", "Delete post fail");
      })
      .catch((err) => {
        setConfirmLoading(false);
        togglePop();

        return toast.error("Fail", "Delete post fail");
      });
  };

  return (
    <tr>
      <td>{index}</td>
      <td className="text-left">
        <div className="widget-content p-0">
          <div className="widget-content-wrapper">
            <div className="widget-content-left mr-3">
              <img
                className="border-circle"
                src={PATH_URL.PRODUCT_IMAGE + post.product.image}
                alt={post.product.name}
              />
            </div>
            <div className="widget-content-left flex2">
              <div className="widget-heading">{post.product.name}</div>
            </div>
          </div>
        </div>
      </td>
      <td>{formatString(post.title, 30)}</td>
      <td>{formatString(post.content, 30)}</td>
      <td>
        <div className="btn-group">
          <Button type="primary">
            <Link to={path.POST_EDIT + post.id}>Edit</Link>
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
            <Button type="primary" onClick={togglePop} danger>
              Delete
            </Button>
          </Popconfirm>
        </div>
      </td>
    </tr>
  );
}

export default PostItem;
