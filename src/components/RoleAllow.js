import { useSelector } from "react-redux";

function RoleAllow({ allowedRole, children }) {
  const admin = useSelector((state) => state.adminReducer.admin);
  const access = allowedRole && admin.roles.includes(allowedRole.toLowerCase());
  return allowedRole === undefined ? children : access ? children : null;
}

export default RoleAllow;
