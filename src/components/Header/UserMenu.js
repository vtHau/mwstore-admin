import React from "react";
import { Link } from "react-router-dom";
import { signOutReq } from "../../actions/action";
import { useSelector, useDispatch } from "react-redux";
import { path } from "../../constants/path";
import * as PATH_URL from "../../constants/apiUrl";

function UserMenu() {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.adminReducer.admin);

  const handleLogout = () => {
    dispatch(signOutReq());
  };

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
          <Link to={path.PROFILE}>
            <i data-feather="user"></i>Edit Profile
          </Link>
        </li>
        <li onClick={handleLogout}>
          <i data-feather="log-out"></i>Logout
        </li>
      </ul>
    </li>
  );
}

export default UserMenu;
