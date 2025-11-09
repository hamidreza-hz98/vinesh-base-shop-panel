import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

import adminReducer from "./admin/admin.slice";
import mediaReducer from "./media/media.slice";
import brandReducer from "./brand/brand.slice";
import tagReducer from "./tag/tag.slice";
import categoryReducer from "./category/category.slice";

const rootReducer = combineReducers({
  admin: adminReducer,
  media: mediaReducer,
  brand: brandReducer,
  tag: tagReducer,
  category: categoryReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
