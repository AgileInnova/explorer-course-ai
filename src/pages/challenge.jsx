import React from "react";
import Layout from "@theme/Layout";

export default function Hello() {
  return (
    <Layout title="Explorer Challenge" description="challenge React Page">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <p>Component Explorer Challenge</p>
      </div>
    </Layout>
  );
}
