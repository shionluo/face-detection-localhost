import React, { useState } from "react";

import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

//-- Actions --//
import { changeImageLinkAction } from "../../redux/actions/Change-Image-Link-Action";
import { toggleModelAction } from "../../redux/actions/Toggle-Modal-Action";

//-- Components --//
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

//-- Image --//
import Avatar from "../../assets/avt.jpeg";

//-- Style --//
import "./Navigation.css";

//-------------------------------------------------------------//
//-------------------------------------------------------------//

const mapDispatchToProps = dispatch => ({
  resetImage: () => dispatch(changeImageLinkAction()),
  toggleModal: () => dispatch(toggleModelAction())
});

const Navigation = ({ history, resetImage, toggleModal }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const handleClick = () => {
    resetImage();
    window.sessionStorage.clear();
    history.push("/");
  };

  return (
    <nav className="profile-nav flex justify-end">
      <div className="pa4 tc">
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle
            tag="span"
            data-toggle="dropdown"
            aria-expanded={dropdownOpen}
          >
            <img src={Avatar} className="br-100 h3 w3 dib" alt="avatar" />
          </DropdownToggle>
          <DropdownMenu
            right
            className="b--transparent shadow-5"
            style={{ backgroundColor: "transparent" }}
          >
            <DropdownItem onClick={toggleModal}>View Profile</DropdownItem>
            <DropdownItem onClick={handleClick}>Sign Out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </nav>
  );
};

export default withRouter(connect(null, mapDispatchToProps)(Navigation));
