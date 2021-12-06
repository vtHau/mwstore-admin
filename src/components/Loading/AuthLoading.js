import React from "react";
import HashLoader from "react-spinners/HashLoader";

const loading = {
  backgroundColor: "rgba(0, 0, 0, 0.02)",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function AuthLoading() {
  return (
    <div style={loading}>
      <HashLoader color="#5985ff" speedMultiplier={1.5} size={80} />
    </div>
  );
}

export default AuthLoading;
