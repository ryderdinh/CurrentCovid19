import { combineReducers } from "redux";
import dataGlobal from "./dataGlobal";
import dataCountrySearch from "./dataCountrySearch";

export default combineReducers({
  global: dataGlobal,
  country: dataCountrySearch,
});
