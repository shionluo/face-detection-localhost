import { TOGGLE_MODAL } from "../constants/constant";

//-------------------------------------------------------------//
//-------------------------------------------------------------//

const isProfileOpen = false;

export const toggleModalReducer = (state = isProfileOpen, { type }) => {
  switch (type) {
    case TOGGLE_MODAL:
      return !state;
    default:
      return state;
  }
};
