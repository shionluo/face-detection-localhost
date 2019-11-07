import { LOAD_USER } from "../constants/constant";

//-------------------------------------------------------------//
//-------------------------------------------------------------//

export const loadUserAction = user => ({
  type: LOAD_USER,
  payload: user
});
