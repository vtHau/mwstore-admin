import React from "react";
import { LoopCircleLoading } from "react-loadingg";

function CommonLoading() {
  const loading = {
    position: "relative",
    margin: "0 auto",
    width: "30px",
  };

  return (
    <div style={loading}>
      <LoopCircleLoading size="small" color="#5985ff" speed={0.5} />
    </div>
  );
}

export default CommonLoading;
