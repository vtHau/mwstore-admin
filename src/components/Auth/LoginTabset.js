import React from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { User } from "react-feather";
import { useHistory } from "react-router-dom";
import { path } from "./../../constants/path";

function LoginTabset() {
  const history = useHistory();

  const routeChange = () => {
    history.push(path.HOME);
  };

  return (
    <Tabs>
      <TabList className="nav nav-tabs tab-coupon">
        <Tab className="nav-link">
          <User />
          Đăng nhập
        </Tab>
      </TabList>

      <TabPanel>
        <form className="form-horizontal auth-form">
          <div className="form-group">
            <input
              required=""
              name="login[username]"
              type="email"
              className="form-control"
              placeholder="Username"
              id="exampleInputEmail1"
            />
          </div>
          <div className="form-group">
            <input
              required=""
              name="login[password]"
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="form-terms">
            <div className="custom-control custom-checkbox mr-sm-2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customControlAutosizing"
              />
              <label className="d-block">
                <input
                  className="checkbox_animated"
                  id="chk-ani2"
                  type="checkbox"
                />
                Nhớ tài khoản tôi
              </label>
            </div>
          </div>
          <div className="form-button">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={routeChange}
            >
              Đăng nhập
            </button>
          </div>
          <div className="form-footer">
            <span>Đăng nhập với các nền tảng khác</span>
            <ul className="social">
              <li>
                <a className="fa fa-facebook" href=""></a>
              </li>
              <li>
                <a className="fa fa-twitter" href=""></a>
              </li>
              <li>
                <a className="fa fa-instagram" href=""></a>
              </li>
              <li>
                <a className="fa fa-pinterest" href=""></a>
              </li>
            </ul>
          </div>
        </form>
      </TabPanel>
    </Tabs>
  );
}

export default LoginTabset;
