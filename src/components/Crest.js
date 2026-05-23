import React from "react";

export default function Crest({ className = "", width = "100%", height = "100%" }) {
  return (
    <img
      src="/crest.png"
      alt="Iron Forest FC Crest"
      width={width}
      height={height}
      className={className}
      style={{
        filter: "drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.45))",
        objectFit: "contain",
      }}
    />
  );
}

