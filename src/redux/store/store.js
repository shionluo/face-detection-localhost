import { createStore, combineReducers } from "redux";

//-- Reducers --//
import { changeImageLinkReducer } from "../reducers/Change-Image-Link-Reducer";
import { calculateBoxesReducer } from "../reducers/Calculate-Boxes-Reducer";
import { loadUserReducer } from "../reducers/Load-User-Reducer";
import { toggleModalReducer } from "../reducers/Toggle-Modal-Reducer";

//-------------------------------------------------------------//
//-------------------------------------------------------------//

const rootReducer = combineReducers({
  changeImageLink: changeImageLinkReducer,
  calculaterBoxes: calculateBoxesReducer,
  loadUser: loadUserReducer,
  toggleModal: toggleModalReducer
});

export const store = createStore(rootReducer);
