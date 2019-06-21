import { createStore, compose, applyMiddleware } from "redux";

import rootReducer from "./reducers";

const composer =
  process.env.NODE_ENV === "development"
    ? compose(
        applyMiddleware(...[]),
        console.tron.createEnhancer()
      )
    : applyMiddleware(...[]);

const store = createStore(rootReducer, composer);

export default store;
