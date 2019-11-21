import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

//-------------------------------------------------------------//
//-------------------------------------------------------------//

const mapStateToProps = state => ({
  name: state.loadUser.name,
  entries: state.loadUser.entries
});

const Info = ({ name, entries }) => {
  const [emoji, setEmoji] = useState("");
  const generateEmoji = entries => {
    fetch(
      `https://vdi9x6y7h4.execute-api.us-east-1.amazonaws.com/dev/rank?rank=${entries}`
    )
      .then(res => res.json())
      .then(data => setEmoji(data.input))
      .catch(console.log);
  };

  useEffect(() => generateEmoji(entries), [entries]);

  return (
    <div>
      <p className="white f3 tc">
        {`Welcome ${name}. Your current entry count is ${entries}`}
      </p>
      <p className="white f3 tc">{`Rank Badge: ${emoji}`}</p>
    </div>
  );
};

export default connect(mapStateToProps, null)(Info);
