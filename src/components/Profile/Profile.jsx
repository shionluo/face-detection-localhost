import React, { useState } from "react";

import { connect } from "react-redux";

//-- Actions --//
import { toggleModelAction } from "../../redux/actions/Toggle-Modal-Action";
import { loadUserAction } from "../../redux/actions/Load-User-Action";

//-- Style --//
import "./Profile.css";

//-- Image --//
import Avatar from "../../assets/avt.jpeg";

//-------------------------------------------------------------//
//-------------------------------------------------------------//

const mapStateToProps = state => ({
  user: state.loadUser,
  id: state.loadUser.id,
  name: state.loadUser.name,
  submitted: state.loadUser.entries,
  joined: state.loadUser.joined
});

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(toggleModelAction()),
  loadUser: user => dispatch(loadUserAction(user))
});

const Profile = ({
  toggleModal,
  loadUser,
  user,
  id,
  name,
  submitted,
  joined
}) => {
  const [updateName, setUpdateName] = useState("");

  const onUpdateName = event => {
    setUpdateName(event.target.value);
  };

  const onProfileUpdate = data => {
    fetch(`http://localhost:3001/profile/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: window.sessionStorage.getItem("token")
      },
      body: JSON.stringify({
        formInput: data
      })
    })
      .then(resp => {
        if (resp.status === 200) {
          toggleModal();
          loadUser({ ...user, name: data });
        }
      })
      .catch(console.log);
  };

  return (
    <div className="profile-modal">
      <article className="br3 ba b--black-10 w-100 w-50-m w-25-l mw6 shadow-5 bg-washed-yellow flex justify-center">
        <main className="pa4 black-80 w-80">
          <img src={Avatar} className="br-100 h3 w3 dib" alt="avatar" />
          <h1>{name}</h1>
          <h4>{`Image Submitted: ${submitted}`}</h4>
          <p>{`Member since: ${new Date(joined).toLocaleDateString()}`}</p>
          <hr />
          <label className="mt2 fw6" htmlFor="name">
            Name:
          </label>
          <input
            className="pa2 ba w-100 br2"
            type="text"
            name="name"
            id="name"
            placeholder="Shion"
            onChange={onUpdateName}
          />
          <div
            className="mt4"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <button
              className="b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20 br2"
              onClick={() => onProfileUpdate(updateName)}
            >
              Save
            </button>
            <button
              className="b pa2 grow pointer hover-white w-40 bg-light-red b--black-20 br2"
              onClick={toggleModal}
            >
              Cancel
            </button>
          </div>
        </main>
        <div className="modal-close" onClick={toggleModal}>
          &times;
        </div>
      </article>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
