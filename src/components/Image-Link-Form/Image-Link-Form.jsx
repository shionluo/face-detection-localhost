import React from "react";

import { connect } from "react-redux";

//-- Actions --//
import { changeImageLinkAction } from "../../redux/actions/Change-Image-Link-Action";
import {
  calculateBoxesAction,
  resetBoxesAction
} from "../../redux/actions/Calculate-Boxes-Action";
import { loadUserAction } from "../../redux/actions/Load-User-Action";

//-- Styles --//
import "./Image-Link-Form.css";

//-------------------------------------------------------------//
//-------------------------------------------------------------//

const mapStateToProps = state => ({
  imageUrl: state.changeImageLink.imageLink,
  id: state.loadUser.id,
  user: state.loadUser
});

const mapDispatchToProps = dispatch => ({
  onInputChange: e => dispatch(changeImageLinkAction(e.target.value)),
  calculateBoxes: (data, action = calculateBoxesAction) =>
    dispatch(action(data)),
  loadUser: user => dispatch(loadUserAction(user))
});

const ImageLinkForm = ({
  imageUrl,
  id,
  user,
  onInputChange,
  calculateBoxes,
  loadUser
}) => {
  const handleChange = e => {
    calculateBoxes([], resetBoxesAction);
    onInputChange(e);
  };

  const handleSubmit = () => {
    fetch("http://localhost:3001/imageurl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: imageUrl
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch("http://localhost:3001/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id
            })
          })
            .then(response => response.json())
            .then(count => {
              loadUser({ ...user, entries: count });
            });
        }
        calculateBoxes(response);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="tc">
      <p className="f3">
        {"This Magic Brain will detect faces in your picture. Git it a try."}
      </p>
      <div className="form pa4 br3 shadow-5 ma4">
        <input
          className="f4 pa2 w-70 center"
          type="text"
          onChange={handleChange}
        />
        <button
          className="w-30 grow f4 link pv2 dib white bg-light-purple pointer"
          onClick={handleSubmit}
        >
          Detect
        </button>
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageLinkForm);
