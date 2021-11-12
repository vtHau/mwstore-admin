import React, { useState } from "react";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "./../../actions/action";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { User } from "react-feather";
import { useFormik } from "formik";
import response from "./../../constants/response";
import adminApi from "./../../apis/adminApi";
import { signInValid } from "../../helpers/validate";
import { path } from "../../constants/path";
import { Redirect } from "react-router-dom";

function LoginTabset() {
  const dispatch = useDispatch();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const isAuth = useSelector((state) => state.adminReducer.isAuth);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInValid,
    onSubmit: (values) => {
      setConfirmLoading(true);
      adminApi
        .signIn(values)
        .then((res) => {
          if (res.status === response.SIGN_IN_SUCCESS) {
            dispatch(signIn(res));
          } else {
            formik.setErrors({
              email: "Email or password wrong",
              password: "Email or password wrong",
            });
          }

          setConfirmLoading(false);
        })
        .catch((err) => {
          setConfirmLoading(false);
        });
    },
  });

  if (isAuth) {
    return <Redirect to={path.HOME} />;
  }

  return (
    <Tabs>
      <TabList className="nav nav-tabs tab-coupon">
        <Tab className="nav-link">
          <User />
          Sign In
        </Tab>
      </TabList>

      <TabPanel>
        <form
          onSubmit={formik.handleSubmit}
          className="form-horizontal auth-form"
        >
          <div className="form-group">
            <input
              name="email"
              type="email"
              className="form-control"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Please input email..."
            />
            {formik.errors.email && formik.touched.email && (
              <p className="error-field">{formik.errors.email}</p>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Please input password..."
            />
            {formik.errors.password && formik.touched.password && (
              <p className="error-field">{formik.errors.password}</p>
            )}
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
                Remember Me
              </label>
            </div>
          </div>
          <div className="form-button">
            <Button
              className="btn btn-primary"
              type="primary"
              htmlType="submit"
              size="large"
              loading={confirmLoading}
            >
              SignIn
            </Button>
          </div>
        </form>
      </TabPanel>
    </Tabs>
  );
}

export default LoginTabset;
