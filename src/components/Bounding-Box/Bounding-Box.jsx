import React from "react";

//-- Styles --//
import "./Bounding-Box.css";

//-------------------------------------------------------------//
//-------------------------------------------------------------//

const BoundingBox = ({ box }) => {
  return (
    <div
      className="bounding-box"
      style={{
        top: box.topRow,
        right: box.rightCol,
        bottom: box.bottomRow,
        left: box.leftCol
      }}
    />
  );
};

export default BoundingBox;
