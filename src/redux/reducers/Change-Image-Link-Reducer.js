import { CHANGE_IMAGE_LINK_FIELD } from "../constants/constant";

//-------------------------------------------------------------//
//-------------------------------------------------------------//

const initialImageLink = {
  imageLink: ""
};

export const changeImageLinkReducer = (
  state = initialImageLink,
  action = {}
) => {
  switch (action.type) {
    case CHANGE_IMAGE_LINK_FIELD:
      return {
        ...state,
        imageLink: action.payload
      };
    default:
      return state;
  }
};
