import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

import adminReducer from "./admin/admin.slice";
import mediaReducer from "./media/media.slice";
import brandReducer from "./brand/brand.slice";

const rootReducer = combineReducers({
  admin: adminReducer,
  media: mediaReducer,
  brand: brandReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
