import React, { useState } from "react";

function Website() {
  const [expanded, setExpanded] = useState(false);

  const handleButtonClick = () => {
    setExpanded(true);
  };

  return (
    <div style={containerStyles}>
      <div style={contentStyles}>
        {!expanded && (
          <button onClick={handleButtonClick} style={buttonStyles}>
            {"</>"}
          </button>
        )}
        {expanded && (
          <header style={headerStyles}>
            <h1 style={nameStyles}>ABHISHEK</h1>
            <div style={lineStyles} />
            <h1 style={nameStyles}>VALASSERI</h1>
          </header>
        )}
      </div>
    </div>
  );
}

const containerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
};

const contentStyles = {
  position: "relative",
};

const buttonStyles = {
  position: "absolute",
  fontSize: "36px",
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  backgroundColor: "#ffcc00",
  color: "white",
  border: "none",
  outline: "none",
  cursor: "pointer",
  transition: "all 0.5s",
};

const headerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "200px",
  transform: "rotate(90deg)",
  transition: "all 0.5s",
};

const nameStyles = {
  fontSize: "48px",
  margin: "0 10px",
};

const lineStyles = {
  width: "200px",
  height: "4px",
  backgroundColor: "#ffcc00",
  transform: "rotate(90deg)",
  transition: "all 0.5s",
};

export default Website;
