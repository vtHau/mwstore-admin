import React, { useState, useEffect } from "react";
import useAuth from "./../../hooks/useAuth";
import { authToken } from "./../../actions/action";
import { ArrowLeft } from "react-feather";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import stats from "../../assets/images/dashboard/stats.png";
import LoginTabset from "./LoginTabset";
import { Redirect } from "react-router-dom";
import { path } from "../../constants/path";
import AuthLoading from "./../../components/Loading/AuthLoading";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
};

function SignIn() {
  const [isAuth, isLoading] = useAuth();

  if (!isLoading) {
    return <AuthLoading />;
  }

  if (isAuth) {
    return <Redirect to={path.HOME} />;
  }

  return (
    <>
      <div className="page-wrapper">
        <div className="authentication-box">
          <div className="container">
            <div className="row">
              <div className="col-md-5 p-0 card-left">
                <div className="card bg-primary">
                  <div className="svg-icon">
                    <img src={stats} className="Img-fluid" />
                  </div>
                  <Slider className="single-item" {...settings}>
                    <div>
                      <div>
                        <h3>Chào mừng đến với MWStore</h3>
                        <p>Trang quản trị của hệ thống MWStore.</p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <h3>Chào mừng đến với MWStore</h3>
                        <p>Trang quản trị của hệ thống MWStore.</p>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="col-md-7 p-0 card-right">
                <div className="card tab2-card">
                  <div className="card-body">
                    <LoginTabset />
                  </div>
                </div>
              </div>
            </div>
            <a
              href="https:mw-store.site"
              target="_blank"
              className="btn btn-primary back-btn"
            >
              <ArrowLeft />
              Trang chủ
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
