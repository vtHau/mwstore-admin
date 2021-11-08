import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as PATH_URL from "./../../../constants/apiUrl";

function UserMenu() {
  const admin = useSelector((state) => state.adminReducer.admin);

  return (
    <li className="onhover-dropdown">
      <div className="media align-items-center">
        <img
          className="rounded-shadow align-self-center pull-right img-50 rounded-circle blur-up lazyloaded"
          src={`${PATH_URL.ADMIN_AVATAR_IMAGE}${admin.image}`}
          alt={admin.name}
        />
        <div className="dotted-animation">
          <span className="animate-circle"></span>
          <span className="main-circle"></span>
        </div>
      </div>
      <ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
        <li>
          <Link to={`${process.env.PUBLIC_URL}/settings/profile`}>
            <i data-feather="user"></i>Edit Profile
          </Link>
        </li>
        <li>
          <a href="javascript:void(0)">
            <i data-feather="mail"></i>Inbox
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <i data-feather="lock"></i>Lock Screen
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <i data-feather="settings"></i>Settings
          </a>
        </li>
        <li>
          <Link to={`${process.env.PUBLIC_URL}/`}>
            <i data-feather="log-out"></i>Logout
          </Link>
        </li>
      </ul>
    </li>
  );
}

export default UserMenu;
