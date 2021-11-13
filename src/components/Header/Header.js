import React, { useState } from "react";
import SearchHeader from "./SearchHeader";
import Notification from "./Notification";
import { useSelector } from "react-redux";
import UserMenu from "./UserMenu";
import { path } from "../../constants/path";
import { AlignLeft, Maximize2, Bell, MoreHorizontal } from "react-feather";

import logo from "./../../assets/images/dashboard/mwstore-logo.png";
import { Redirect } from "react-router";

function Header() {
  const isAuth = useSelector((state) => state.adminReducer.isAuth);
  const [sidebar, setSidebar] = useState(true);
  const [navMenus, setNavMenus] = useState(true);

  const toggle = () => {
    setNavMenus((prevState) => !prevState.navMenus);
  };

  if (!isAuth) {
    return <Redirect to={path.SIGN_IN} />;
  }

  const goFull = () => {
    if (
      (document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  };

  const openCloseSidebar = () => {
    if (sidebar) {
      setSidebar(false);
      document.querySelector(".page-main-header").classList.add("open");
      document.querySelector(".page-sidebar").classList.add("open");
    } else {
      setSidebar(true);
      document.querySelector(".page-main-header").classList.remove("open");
      document.querySelector(".page-sidebar").classList.remove("open");
    }
  };

  return (
    <>
      <div className="page-main-header ">
        <div className="main-header-right row">
          <div className="main-header-left d-lg-none">
            <div className="logo-wrapper">
              <a href="index.html">
                <img className="blur-up lazyloaded" src={logo} alt="" />
              </a>
            </div>
          </div>
          <div className="mobile-sidebar">
            <div className="media-body text-right switch-sm">
              <label className="switch">
                <a onClick={openCloseSidebar}>
                  <AlignLeft />
                </a>
              </label>
            </div>
          </div>
          <div className="nav-right col">
            <ul className={"nav-menus " + (navMenus ? "open" : "")}>
              <li>
                <SearchHeader />
              </li>
              <li>
                <a onClick={goFull} className="text-dark" href="#!">
                  <Maximize2 />
                </a>
              </li>
              <li className="onhover-dropdown">
                <Bell />
                <span className="badge badge-pill badge-primary pull-right notification-badge">
                  3
                </span>
                <span className="dot"></span>
                <Notification />
              </li>
              <UserMenu />
            </ul>
            <div
              className="d-lg-none mobile-toggle pull-right"
              onClick={toggle}
            >
              <MoreHorizontal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
