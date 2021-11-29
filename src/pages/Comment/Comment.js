import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import commentApi from "../../apis/commentApi";
import response from "../../constants/response";
import useTitle from "../../hooks/useTitle";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import CommentItem from "./../../components/Comment/CommentItem";

function Comment() {
  const [comments, setComments] = useState([]);
  useTitle("Comment List");

  const fetchAllComment = () => {
    commentApi
      .getAllComment()
      .then((res) => {
        if (res.status === response.SUCCESS) {
          setComments(res.comments);
        }
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchAllComment();
  }, []);

  return (
    <>
      <Breadcrumb title="Comment List" parent="Comment" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Comment List</h5>
          </div>
          <div className="card-body">
            <div className="clearfix"></div>
            <div className="product-physical">
              {comments.length ? (
                <Table className="table-custom">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>User</th>
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
                      <CommentItem
                        key={key}
                        index={key}
                        comment={comment}
                        fetchAllComment={fetchAllComment}
                      />
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
