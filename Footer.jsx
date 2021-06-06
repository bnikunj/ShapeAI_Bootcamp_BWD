import React from "react";

function Footer() {
  var year = new Date().getFullYear();

  return (
    <div>
      <footer>Copyright @ {year} </footer>
    </div>
  );
}

export default Footer;
