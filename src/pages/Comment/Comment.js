import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Popconfirm, Button, Rate } from "antd";
import commentApi from "../../apis/commentApi";
import response from "../../constants/response";
import toast from "../../helpers/toast";
import useTitle from "../../hooks/useTitle";
import useToggle from "../../hooks/useToggle";
import Breadcrumb from "../../components/common/breadcrumb";
import * as PATH_URL from "./../../constants/apiUrl";

function Comment() {
  const [openPop, togglePop] = useToggle(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [comments, setComments] = useState([]);
  useTitle("Comment list");

  const fetchAllComment = () => {
    commentApi
      .getAllComment()
      .then((res) => {
        if (res.status === response.SUCCESS) {
          setComments(res.comments);
          console.log(res.comments);
        }
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchAllComment();
  }, []);

  const handleDelete = () => {
    setConfirmLoading(true);

    // couponApi
    //   .deleteCoupon({ id: coupon.id })
    //   .then((res) => {
    //     togglePop();
    //     setConfirmLoading(false);
    //     if (res.status === response.SUCCESS) {
    //       dispatch(fetchAllCoupon());
    //       return toast.success("Success", "Delete brand success");
    //     }
    //     return toast.success("Fail", "Delete brand fail");
    //   })
    //   .catch((err) => {
    //     togglePop();
    //     setConfirmLoading(false);
    //     return toast.success("Fail", "Delete brand fail");
    //   });
  };

  return (
    <>
      <Breadcrumb title="Comment List" parent="Comment" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Comment Details</h5>
          </div>
          <div className="card-body">
            <div className="clearfix"></div>
            <div className="product-physical">
              {comments.length ? (
                <Table className="table-custom">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Product</th>
                      <th>Star</th>
                      <th>Comment</th>
                      <th>Time</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comments.map((comment, key) => (
                      <tr key={key}>
                        <td>{key + 1}</td>
                        <td>
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left">
                                <img
                                  className="rounded-circle border-circle"
                                  src={
                                    PATH_URL.AVATAR_IMAGE + comment.user.image
                                  }
                                  alt={comment.user.name}
                                />
                              </div>
                              <div className="widget-content-left flex2">
                                <div className="widget-heading">
                                  {comment.user.name}
                                </div>
                                <div className="widget-subheading opacity-7" />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>{comment.product.name}</td>
                        <td>
                          <Rate disabled value={comment.star} />
                        </td>
                        <td>{comment.comment}</td>
                        <td>{comment.time}</td>
                        <td>
                          {comment.status === 0 ? (
                            <span className="badge badge-danger">
                              Not Confirm
                            </span>
                          ) : (
                            <span className="badge badge-success">Confirm</span>
                          )}
                        </td>
                        <td>
                          <div className="btn-group">
                            <Button type="primary">Confirm</Button>
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
                    ))}
                  </tbody>
                </Table>
              ) : (
                <h6 className="no-item">No item to show</h6>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;
