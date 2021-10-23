import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 footer-copyright">
              <p className="mb-0">
                Copyright 2021 © MWStore All rights reserved.
              </p>
            </div>
            <div className="col-md-6">
              <p className="pull-right mb-0">
                Creative team MWStore<i className="fa fa-heart"></i>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
