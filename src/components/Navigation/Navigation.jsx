import React from "react";

import { connect } from "react-redux";

import { withRouter } from "react-router-dom";

//-- Actions --//
import { changeImageLinkAction } from "../../redux/actions/Change-Image-Link-Action";

//-------------------------------------------------------------//
//-------------------------------------------------------------//

const mapDispatchToProps = dispatch => ({
  resetImage: () => dispatch(changeImageLinkAction())
});

const Navigation = ({ history, resetImage }) => {
  const handleClick = () => {
    resetImage();
    history.push("/");
  };

  return (
    <nav className="flex justify-end">
      <p
        className="f3 link dim black underline pa3 pointer"
        onClick={handleClick}
      >
        Sign Out
      </p>
    </nav>
  );
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Navigation)
);
