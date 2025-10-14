import React from "react";

function Footer({ title, subtitle, backgroundColor = "#282c34", color = "white" }) {
  const footerStyle = {
    backgroundColor,
    color,
    padding: "20px",
    textAlign: "center",
  };

  return (
    <footer style={footerStyle}>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </footer>
  );
}

export default Footer;
