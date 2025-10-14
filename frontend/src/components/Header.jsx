import React from "react";

function Header({ title, subtitle, backgroundColor = "#282c34", color = "white" }) {
  const headerStyle = {
    backgroundColor,
    color,
    padding: "20px",
    textAlign: "center",
  };

  return (
    <header style={headerStyle}>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
}

export default Header;
