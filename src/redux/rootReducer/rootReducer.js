import { combineReducers } from "redux";
import singlePollSlice from "../singlePollSlice";

const rootReducer = combineReducers({
  SinglePoll: singlePollSlice,
});

export default rootReducer;
