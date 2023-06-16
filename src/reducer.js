import { combineReducers } from "@reduxjs/toolkit";
import mailSlice from "./modules/common/ducks/mail";

const rootReducer = combineReducers({
  mail: mailSlice
})

export default rootReducer;