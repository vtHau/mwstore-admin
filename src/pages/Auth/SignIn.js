import React from "react";
import useAuth from "./../../hooks/useAuth";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import stats from "../../assets/images/dashboard/stats.png";
import LoginTabset from "./LoginTabset";
import { Redirect } from "react-router-dom";
import { path } from "../../constants/path";
import AuthLoading from "./../../components/Loading/AuthLoading";
import useTitle from "../../hooks/useTitle";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
};

function SignIn() {
  const [isAuth, isLoading] = useAuth();

  useTitle("Sign In");

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
                    <img src={stats} className="Img-fluid" alt="login" />
                  </div>
                  <Slider className="single-item" {...settings}>
                    <div>
                      <div>
                        <h3>Welcome to MWStore</h3>
                        <p>Admin page of system MWStore.</p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <h3>Welcome to MWStore</h3>
                        <p>Admin page of system MWStore.</p>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
