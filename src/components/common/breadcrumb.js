import React from "react";
import { Home } from "react-feather";
import { Link } from "react-router-dom";

function Breadcrumb(props) {
  const { title, parent } = props;

  return (
    <div className="container-fluid">
      <div className="page-header">
        <div className="row">
          <div className="col-lg-6">
            <div className="page-header-left">
              <h3>
                {title}
                <small>MWStore Admin panel</small>
              </h3>
            </div>
          </div>
          <div className="col-lg-6">
            <ol className="breadcrumb pull-right">
              <li className="breadcrumb-item">
                <Link to="mutikart-admin/dashboard">
                  <Home />
                </Link>
              </li>
              <li className="breadcrumb-item">{parent}</li>
              <li className="breadcrumb-item active">{title}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
