import React from "react";

import { connect } from "react-redux";

//-------------------------------------------------------------//
//-------------------------------------------------------------//

const mapStateToProps = state => ({
  name: state.loadUser.name,
  entries: state.loadUser.entries
});

const Info = ({ name, entries }) => {
  return (
    <div>
      <p className="white f3 tc">
        {`Welcome ${name}. Your current entry count is ${entries}`}
      </p>
    </div>
  );
};

export default connect(
  mapStateToProps,
  null
)(Info);
