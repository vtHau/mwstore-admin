import React from "react";
import { WaveTopBottomLoading as WT } from "react-loadingg";

function WaveTopBottomLoading() {
  const loading = {
    position: "relative",
    margin: "0 auto",
    width: "30px",
  };

  return (
    <div style={loading}>
      <WT size="small" color="#5985ff" speed={0.5} />
    </div>
  );
}

export default WaveTopBottomLoading;
