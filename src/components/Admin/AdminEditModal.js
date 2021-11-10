import React, { useState, useEffect } from "react";
import { Modal, Button, Select } from "antd";
import { useFormik } from "formik";
import { adminNormalUpdateValid } from "../../helpers/validate";
import adminApi from "../../apis/adminApi";
import roleApi from "../../apis/roleApi";
import response from "../../constants/response";
import toast from "../../helpers/toast";

const { Option } = Select;

function AdminEditModal(props) {
  const { admin, openModal, toggleModal, fetchAllAdmin } = props;
  const [roles, setRoles] = useState([]);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const adminRoles = admin.roles.map((role) => role.id);

  const formik = useFormik({
    validateOnChange: true,
    enableReinitialize: true,
    initialValues: {
      name: admin.name,
      email: admin.email,
      password: "",
      description: admin.description,
      roles: adminRoles,
      image: null,
    },
    validationSchema: adminNormalUpdateValid,
    onSubmit: (value) => {
      setConfirmLoading(true);
      const newAdmin = new FormData();
      newAdmin.append("id", admin.id);
      newAdmin.append("name", value.name);
      newAdmin.append("email", value.email);
      newAdmin.append("password", value.password);
      newAdmin.append("description", value.description);
      value.roles.forEach((role) => newAdmin.append("roles[]", role));

      if (value.image) {
        newAdmin.append("image", value.image);
      }

      adminApi
        .updateAdmin(newAdmin)
        .then((res) => {
          toggleModal();
          setConfirmLoading(false);
          if (res.status === response.SUCCESS) {
            fetchAllAdmin();
            return toast.success("Success", "Update admin success");
          }
          return toast.success("Fail", "Update admin fail");
        })
        .catch((err) => {
          toggleModal();
          setConfirmLoading(false);
          return toast.success("Fail", "Update admin fail");
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

  return (
    <Modal
      visible={openModal}
      onOk={toggleModal}
      onCancel={toggleModal}
      footer={null}
    >
      <form className="form-custom" onSubmit={formik.handleSubmit}>
        <p className="title-section">Update admin</p>
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
              placeholder="Please input product name..."
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
              placeholder="Please input product email..."
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
              placeholder="Please input product password..."
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
              defaultValue={adminRoles}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
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
              placeholder="Please input brand description..."
            ></textarea>
            {formik.errors.description && formik.touched.description && (
              <p className="error-field">{formik.errors.description}</p>
            )}
          </div>

          {/* <div className="form-group">
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
          </div> */}
        </div>
        <div className="submit-box">
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={confirmLoading}
          >
            Update
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default AdminEditModal;
