import { createStore, applyMiddleware } from "redux";

import rootReducer from "./reducers";

const composer = applyMiddleware(...[]);

const store = createStore(rootReducer, composer);

export default store;
