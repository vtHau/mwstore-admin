import React from "react";
import { useSelector } from "react-redux";
import * as PATH_URL from "./../../constants/apiUrl";
import TabProfile from "../../components/Profile/TabProfile";
import Breadcrumb from "../../components/Common/Breadcrumb";

function Profile() {
  const admin = useSelector((state) => state.adminReducer.admin);

  return (
    <>
      <Breadcrumb title="Profile" parent="Profile" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-4">
            <div className="card">
              <div className="card-body">
                <div className="profile-details text-center">
                  <img
                    src={`${PATH_URL.ADMIN_AVATAR_IMAGE}${admin.image}`}
                    className="img-fluid img-90 rounded-circle rounded-shadow blur-up lazyloaded"
                    alt={admin.name}
                  />
                  <h5 className="f-w-600 f-16 mb-0">{admin.name}</h5>
                  <span>{admin.email}</span>
                  <div className="social">
                    <div className="form-group btn-showcase">
                      <button className="btn social-btn btn-fb d-inline-block">
                        <i className="fa fa-facebook"></i>
                      </button>
                      <button className="btn social-btn btn-twitter d-inline-block">
                        <i className="fa fa-google"></i>
                      </button>
                      <button className="btn social-btn btn-google d-inline-block mr-0">
                        <i className="fa fa-twitter"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="project-status">
                  <h5 className="f-w-600 f-16">Admin Status</h5>
                  <div className="media">
                    <div className="media-body">
                      <h6>
                        Performance <span className="pull-right">80%</span>
                      </h6>
                      <div className="progress sm-progress-bar">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: "90%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-body">
                      <h6>
                        Overtime <span className="pull-right">60%</span>
                      </h6>
                      <div className="progress sm-progress-bar">
                        <div
                          className="progress-bar bg-secondary"
                          role="progressbar"
                          style={{ width: "60%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-body">
                      <h6>
                        Leaves taken <span className="pull-right">50%</span>
                      </h6>
                      <div className="progress sm-progress-bar">
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="card profile-card">
              <div className="card-body">
                <TabProfile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
