import React from "react";

const ComingSoonPage = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  };

  const contentStyle = {
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "24px",
    marginBottom: "10px",
  };

  const paragraphStyle = {
    fontSize: "16px",
  };

  const buttonStyle = {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#f4f4f4",
    margin: "10px",
    cursor: "pointer",
    borderRadius: "10px",
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>Information Coming Soon</h1>
        <p style={paragraphStyle}>
          We're currently working on this page. Do Check back soon for updates.
        </p>
        <button style={buttonStyle} onClick={goBack}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ComingSoonPage;
