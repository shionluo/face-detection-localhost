import React from "react";

import { connect } from "react-redux";

//-------------------------------------------------------------//
//-------------------------------------------------------------//

const mapStateToProps = state => ({
  imageUrl: state.changeImageLink.imageLink
});

const FaceDetection = ({ imageUrl, children }) => {
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
        {children}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(FaceDetection);
