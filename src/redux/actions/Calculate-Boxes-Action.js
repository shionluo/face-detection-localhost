import { CALCULATE_BOXES, RESET_BOXES } from "../constants/constant";

//-------------------------------------------------------------//
//-------------------------------------------------------------//

export const calculateBoxesAction = data => ({
  type: CALCULATE_BOXES,
  payload: data
});

export const resetBoxesAction = () => ({
  type: RESET_BOXES
});
