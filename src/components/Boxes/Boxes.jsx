import React from "react";

import { connect } from "react-redux";

//-- Components --//
import BoundingBox from "../Bounding-Box/Bounding-Box";

//-------------------------------------------------------------//
//-------------------------------------------------------------//

const mapStateToProps = state => ({
  boxes: state.calculaterBoxes
});

const BoundingBoxes = ({ boxes }) => {
  return (
    <div>
      {boxes.map((box, i) => (
        <BoundingBox key={i} box={box} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(BoundingBoxes);
