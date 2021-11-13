import React from "react";
import { useSelector } from "react-redux";
import * as PATH_URL from "../../constants/apiUrl";

function UserPanel() {
  const admin = useSelector((state) => state.adminReducer.admin);

  return (
    <div className="sidebar-user text-center">
      <div>
        <img
          className="img-60 rounded-circle lazyloaded blur-up"
          src={`${PATH_URL.ADMIN_AVATAR_IMAGE}${admin.image}`}
          alt={admin.name}
        />
      </div>
      <h6 className="mt-3 f-14">{admin.name}</h6>
      <p>{admin.description}</p>
    </div>
  );
}

export default UserPanel;
