import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import adventures from "./reducers/adventures";
import adventureFormData from "./reducers/adventureFormData";

const reducers = combineReducers({
  adventures,
  adventureFormData
});
const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);
