import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "./../../firebase/utils";

import "./style.scss";

import Logo from "../../assets/Fat-Ecommerce.gif";

//import Registration from '../../pages/Registartion'

const Header = (props) => {
  const { currentUser } = props;

  return (
    <div className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Fat-Ecommerce" />
          </Link>
        </div>

        <div className="callToActions">
          {currentUser && (
            <ul>
              <li>
                <Link to="/dashboard">
                  My Account
                </Link>
              </li>
              <li>
                {/*create session user */}
                <span onClick={() => auth.signOut()}>
                  LOGOUT
                </span>
              </li>
            </ul>
          )}

          {!currentUser && (
            <ul>
             
              <li>
                <Link to="/registration">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {
  currentUser: null,
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
export default connect(mapStateToProps, null)(Header);
