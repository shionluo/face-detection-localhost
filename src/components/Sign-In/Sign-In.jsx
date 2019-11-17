import React, { useState } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

//-- Actions --/
import { loadUserAction } from "../../redux/actions/Load-User-Action";

//-------------------------------------------------------------//
//-------------------------------------------------------------//

const mapDispatchToProps = dispatch => ({
  loadUser: user => dispatch(loadUserAction(user))
});

const Signin = ({ history, loadUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  const onEmailChange = e => {
    setEmail(e.target.value);
  };

  const onPasswordChange = e => {
    setPasword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:3001/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          loadUser(user);
          history.push("/home");
        }
      });
  };

  return (
    <article className="tc br3 ba b--black-10 mt6 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <form className="pa4 black-80" onSubmit={handleSubmit}>
        <div className="measure">
          <fieldset id="sign-up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                onChange={onEmailChange}
              />
            </div>
            <div>
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                onChange={onPasswordChange}
              />
            </div>
          </fieldset>
          <div className="mt2">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign In"
            />
          </div>
          <div className="lh-copy mt3">
            <Link to="/register">
              <p className="f6 link dim black db pointer">Register</p>
            </Link>
          </div>
        </div>
      </form>
    </article>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Signin);
