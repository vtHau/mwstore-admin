import React from "react";
import { LoopCircleLoading } from "react-loadingg";

const loading = {
  backgroundColor: "rgba(0, 0, 0, 0.02)",
  height: "100vh",
};

function AuthLoading() {
  return (
    <div style={loading}>
      <LoopCircleLoading color="#5985ff" speed={0.5} />
    </div>
  );
}

export default AuthLoading;
