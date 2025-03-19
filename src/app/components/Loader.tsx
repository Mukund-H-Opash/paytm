// src/components/Loader.tsx
import React from "react";

const Loader: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="circle"
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#022A72",
            margin: "0 5px",
            animation: "pulse 0.8s ease-in-out infinite", // Reduced to 0.8s for faster movement
          }}
        />
        <div
          className="circle"
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#022A72",
            margin: "0 5px",
            animation: "pulse 0.8s ease-in-out infinite",
            animationDelay: "0.16s", // Adjusted delays for 0.8s duration
          }}
        />
        <div
          className="circle"
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#022A72",
            margin: "0 5px",
            animation: "pulse 0.8s ease-in-out infinite",
            animationDelay: "0.32s",
          }}
        />
        <div
          className="circle"
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#00B8F6",
            margin: "0 5px",
            animation: "pulse 0.8s ease-in-out infinite",
            animationDelay: "0.48s",
          }}
        />
        <div
          className="circle"
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#00B8F6",
            margin: "0 5px",
            animation: "pulse 0.8s ease-in-out infinite",
            animationDelay: "0.64s",
          }}
        />
      </div>
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.5);
              opacity: 0.8;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;