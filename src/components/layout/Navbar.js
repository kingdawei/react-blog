import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
// import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
  return (
    <nav className="nav-wrapper gret darken-3">
      <div className="container">
        <Link to="/">Home</Link>

        <Link to="/organizations">Organizations</Link>
        <SignedInLinks />
        {/* <SignedOutLinks /> */}
      </div>
    </nav>
  );
};

export default Navbar;