import React from "react";
import { Spin } from "antd";

export default function LoadingSpinner() {
  return (
    <div
      style={{
        width: "100vh",
        height: "100vh",
        textAlign: "center",
        marginTop: "50vh",
      }}
    >
      <Spin size='large' />
    </div>
  );
}
