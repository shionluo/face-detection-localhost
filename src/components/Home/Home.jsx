import React, { useEffect } from "react";

import { connect } from "react-redux";

//-- Actions --//
import { loadUserAction } from "../../redux/actions/Load-User-Action";

//-- Components --//
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import Info from "../Info/Info";
import ImageLinkForm from "../Image-Link-Form/Image-Link-Form";
import FaceDetection from "../Face-Detection/Face-Detection";
import Modal from "../Modal/Modal";
import Profile from "../Profile/Profile";

//-------------------------------------------------------------//
//-------------------------------------------------------------//

const mapStateToProps = state => ({
  isProfileOpen: state.toggleModal
});

const mapDispatchToProps = dispatch => ({
  loadUser: user => dispatch(loadUserAction(user))
});

const Home = ({ isProfileOpen, loadUser, history }) => {
  useEffect(() => {
    const token = window.sessionStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3001/signin", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data && data.id) {
            fetch(`http://localhost:3001/profile/${data.id}`, {
              method: "get",
              headers: {
                "Content-Type": "application/json",
                Authorization: token
              }
            })
              .then(res => res.json())
              .then(user => {
                if (user && user.email) {
                  loadUser(user);
                }
              });
          }
        })
        .catch(console.log);
    } else {
      history.push("/");
    }
  }, [loadUser, history]);

  return (
    <div>
      {isProfileOpen && (
        <Modal>
          <Profile />
        </Modal>
      )}
      <Navigation />
      <Logo />
      <Info />
      <ImageLinkForm />
      <FaceDetection />
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
