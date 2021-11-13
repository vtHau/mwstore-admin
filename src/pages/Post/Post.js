import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useTitle from "../../hooks/useTitle";
import Breadcrumb from "../../components/Common/Breadcrumb";
import postApi from "../../apis/postApi";
import response from "../../constants/response";
import PostItem from "../../components/Post/PostItem";

function Post() {
  const [posts, setPosts] = useState([]);

  useTitle("Post list");

  const fetchAllPost = () => {
    postApi
      .getAllPost()
      .then((res) => {
        if (res.status === response.SUCCESS) {
          setPosts(res.posts);
        }
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchAllPost();
  }, []);

  return (
    <>
      <Breadcrumb title="Post List" parent="Post" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Post Details</h5>
          </div>
          <div className="card-body">
            <div className="clearfix"></div>
            <div className="product-physical">
              {posts.length ? (
                <Table className="table-custom">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th className="text-left">Title</th>
                      <th>Desc</th>
                      <th>Content</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map((post, key) => (
                      <PostItem
                        key={key}
                        index={key + 1}
                        post={post}
                        fetchAllPost={fetchAllPost}
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

export default Post;
