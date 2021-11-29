import React, { useEffect, useState } from "react";
import { Button, Checkbox } from "antd";
import { useFormik } from "formik";
import { Redirect } from "react-router-dom";
import { roleValid } from "../../helpers/validate";
import useTitle from "../../hooks/useTitle";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import roleApi from "../../apis/roleApi";
import permissionApi from "../../apis/permissionApi";
import response from "../../constants/response";
import { path } from "../../constants/path";
import toast from "../../helpers/toast";

function RoleEdit() {
  const [permissions, setPermissions] = useState([]);
  const [checkList, setCheckList] = useState([]);
  const [checkAll, setCheckAll] = useState([]);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [redirectRole, setRedirectRole] = useState(false);

  useTitle("Role New");

  useEffect(() => {
    permissionApi
      .getAllPermission()
      .then((res) => {
        if (res.status === response.SUCCESS) {
          setPermissions(res.data);
          const checkAll = res.data.map((permiss) => permiss.id);
          setCheckAll(checkAll);
        }
      })
      .catch((err) => {});
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: roleValid,
    onSubmit: (value) => {
      setConfirmLoading(true);
      const newRole = new FormData();

      newRole.append("name", value.name);
      newRole.append("description", value.description);
      checkList.forEach((item) => newRole.append("permissions[]", item));

      roleApi
        .newRole(newRole)
        .then((res) => {
          setConfirmLoading(false);
          if (res.status === response.SUCCESS) {
            toast.success("Success", "Save role success");
            return setRedirectRole(true);
          }
          return toast.success("Fail", "Save role fail");
        })
        .catch((err) => {
          setConfirmLoading(false);
          setRedirectRole(false);
          return toast.success("Fail", "Save role fail");
        });
    },
  });

  const handleChangeCheckbox = (value) => {
    setCheckList(value);
  };

  const handleCheckAll = (e) => {
    if (e.target.checked) {
      setCheckList(checkAll);
    } else {
      setCheckList([]);
    }
  };

  if (redirectRole) {
    return <Redirect to={path.ROLE_LIST} />;
  }

  return (
    <>
      <Breadcrumb title="Role New" parent="Role" />
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h5>Role New</h5>
          </div>
          <div className="card-body">
            <div className="clearfix"></div>
            <div className="product-physical">
              <form className="form-custom" onSubmit={formik.handleSubmit}>
                <div className="digital-add needs-validation">
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-6">
                        <label className="col-form-label pt-0">Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          value={formik.values.name}
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          placeholder="Please input role name..."
                        />
                        {formik.errors.name && formik.touched.name && (
                          <p className="error-field">{formik.errors.name}</p>
                        )}
                      </div>
                      <div className="col-6">
                        <label className="col-form-label pt-0">
                          Description
                        </label>
                        <input
                          type="text"
                          name="description"
                          className="form-control"
                          value={formik.values.description}
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          placeholder="Please input role description..."
                        />
                        {formik.errors.description &&
                          formik.touched.description && (
                            <p className="error-field">
                              {formik.errors.description}
                            </p>
                          )}
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="card-header">
                      <h5>All Permission</h5>
                    </div>
                    <div className="col-md-12">
                      <h6 className="card-title">
                        <Checkbox onChange={handleCheckAll}>
                          <h4>Check all</h4>
                        </Checkbox>
                      </h6>
                    </div>
                  </div>
                  <Checkbox.Group
                    onChange={handleChangeCheckbox}
                    value={checkList}
                  >
                    <div className="row">
                      {permissions.map((permission, key) => (
                        <div key={key} className="col-md-6 col-xl-4">
                          <div className="card mb-3 widget-content card-shadow">
                            <div className="widget-content-outer">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left">
                                  <div className="widget-heading">
                                    {permission.name}
                                  </div>
                                  <div className="widget-subheading">
                                    {permission.description}
                                  </div>
                                </div>
                                <div className="widget-content-right">
                                  <div className="widget-numbers text-success">
                                    <Checkbox value={permission.id} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Checkbox.Group>
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

export default RoleEdit;
