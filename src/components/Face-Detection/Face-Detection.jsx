import React from "react";

import { connect } from "react-redux";

//-- Components --//
import BoundingBox from "../Bounding-Box/Bounding-Box";

//-------------------------------------------------------------//
//-------------------------------------------------------------//

const mapStateToProps = state => ({
  imageUrl: state.changeImageLink.imageLink,
  faces: state.calculaterBoxes
});

const FaceDetection = ({ imageUrl, faces }) => {
  return (
    <div className="ma4 flex justify-center">
      <div className="absolute mt2 flex align-center">
        <img
          id="faceDetect"
          src={imageUrl}
          alt=""
          width="500px"
          height="auto"
        />
        {faces.map((box, i) => (
          <BoundingBox key={i} box={box} />
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(FaceDetection);
