import { useSelector } from "react-redux";
import { role } from "../constants/role";

function RoleAllow({ allowedRole, children }) {
  const admin = useSelector((state) => state.adminReducer.admin);
  const access =
    (allowedRole && admin.roles.includes(allowedRole)) ||
    admin.role === role.FULL_PERMISSION;
  return allowedRole === undefined ? children : access ? children : null;
}

export default RoleAllow;
