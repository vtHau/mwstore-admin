import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Button, Select } from "antd";
import response from "../../constants/response";
import toast from "../../helpers/toast";
import adminApi from "../../apis/adminApi";
import { adminNormalValid } from "../../helpers/validate";
import useTitle from "../../hooks/useTitle";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { Redirect } from "react-router-dom";
import { path } from "../../constants/path";
import roleApi from "../../apis/roleApi";

const { Option } = Select;

function AdminNew() {
  const [roles, setRoles] = useState([]);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useTitle("Admin New");

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      email: "",
      password: "",
      description: "",
      roles: [],
      image: null,
    },
    validationSchema: adminNormalValid,
    onSubmit: (value) => {
      setConfirmLoading(true);
      const newAdmin = new FormData();
      newAdmin.append("name", value.name);
      newAdmin.append("email", value.email);
      newAdmin.append("password", value.password);
      newAdmin.append("description", value.description);
      value.roles.forEach((role) => newAdmin.append("roles[]", role));
      if (value.image) {
        newAdmin.append("image", value.image);
      }
      adminApi
        .newAdmin(newAdmin)
        .then((res) => {
          setConfirmLoading(false);
          if (res.status === response.SUCCESS) {
            toast.success("Success", "Save admin success");
            return setRedirect(true);
          }
          if (res.status === response.EMAIL_EXIST) {
            formik.setFieldError("email", "Email exist");
            return toast.success("Fail", "Save admin fail");
          }
          return toast.success("Fail", "Save admin fail");
        })
        .catch((err) => {
          setConfirmLoading(false);
          return toast.success("Fail", "Save admin fail");
        });
    },
  });

  useEffect(() => {
    roleApi
      .getAllRole()
      .then((res) => {
        if (res.status === response.SUCCESS) {
          setRoles(res.data);
        }
      })
      .catch((err) => {});
  }, []);

  if (redirect) {
    return <Redirect to={path.ADMIN_LIST} />;
  }

  return (
    <>
      <Breadcrumb title="Admin New" parent="Admin" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Admin new</h5>
          </div>
          <div className="card-body">
            <div className="clearfix"></div>
            <div className="product-physical">
              <form className="form-custom" onSubmit={formik.handleSubmit}>
                <div className="digital-add needs-validation">
                  <div className="form-group">
                    <label className="col-form-label pt-0">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={formik.values.name}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      placeholder="Please input name..."
                    />
                    {formik.errors.name && formik.touched.name && (
                      <p className="error-field">{formik.errors.name}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="col-form-label pt-0">Email</label>
                    <input
                      type="text"
                      name="email"
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
                    <label className="col-form-label pt-0">Password</label>
                    <input
                      type="text"
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

                  <div className="form-group">
                    <label className="col-form-label pt-0">Role</label>
                    <Select
                      mode="multiple"
                      name="roles"
                      allowClear
                      showSearch
                      onBlur={() => formik.setFieldTouched("roles")}
                      style={{ width: "100%" }}
                      placeholder="Please select role"
                      optionFilterProp="children"
                      defaultValue={[]}
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      onChange={(roles) => {
                        formik.setFieldValue("roles", roles);
                      }}
                    >
                      {roles.map((role) => (
                        <Option key={role.id} value={role.id}>
                          {role.name}
                        </Option>
                      ))}
                    </Select>
                    {formik.errors.roles && formik.touched.roles && (
                      <p className="error-field">{formik.errors.roles}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="col-form-label">Description</label>
                    <textarea
                      name="description"
                      rows="2"
                      cols="12"
                      className="form-control"
                      value={formik.values.description}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      placeholder="Please input description..."
                    ></textarea>
                    {formik.errors.description &&
                      formik.touched.description && (
                        <p className="error-field">
                          {formik.errors.description}
                        </p>
                      )}
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Avatar</label>
                    <div className="custom-file">
                      <input
                        type="file"
                        className="form-control"
                        name="image"
                        id="validatedCustomFile"
                        onChange={(e) =>
                          formik.setFieldValue("image", e.target.files[0])
                        }
                        accept=".PNG, .JPEG, .JPG"
                      />
                      {formik.errors.image && formik.touched.image && (
                        <p className="error-field">{formik.errors.image}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="submit-box">
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    loading={confirmLoading}
                  >
                    Save
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminNew;
