import { LOAD_USER } from "../constants/constant";

//-------------------------------------------------------------//
//-------------------------------------------------------------//

const initialUser = {
  id: "",
  name: "",
  email: "",
  password: "",
  entries: 0,
  joined: ""
};

export const loadUserReducer = (state = initialUser, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return {
        ...state,
        id: payload.id,
        name: payload.name,
        email: payload.email,
        password: payload.password,
        entries: payload.entries,
        joined: payload.joined
      };
    default:
      return state;
  }
};
