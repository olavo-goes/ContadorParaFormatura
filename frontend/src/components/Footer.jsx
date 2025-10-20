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
      <p>{title}</p>
    </footer>
  );
}

export default Footer;
