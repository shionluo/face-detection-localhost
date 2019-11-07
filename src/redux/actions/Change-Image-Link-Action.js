import { CHANGE_IMAGE_LINK_FIELD } from "../constants/constant";

//-------------------------------------------------------------//
//-------------------------------------------------------------//

export const changeImageLinkAction = imageLink => ({
  type: CHANGE_IMAGE_LINK_FIELD,
  payload: imageLink
});
