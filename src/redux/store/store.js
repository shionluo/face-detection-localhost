import { createStore, combineReducers } from "redux";

//-- Reducers --//
import { changeImageLinkReducer } from "../reducers/Change-Image-Link-Reducer";
import { calculateBoxesReducer } from "../reducers/Calculate-Boxes-Reducer";
import { loadUserReducer } from "../reducers/Load-User-Reducer";

//-------------------------------------------------------------//
//-------------------------------------------------------------//

const rootReducer = combineReducers({
  changeImageLink: changeImageLinkReducer,
  calculaterBoxes: calculateBoxesReducer,
  loadUser: loadUserReducer
});

export const store = createStore(rootReducer);
