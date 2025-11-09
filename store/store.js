import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

import adminReducer from "./admin/admin.slice";
import mediaReducer from "./media/media.slice";
import brandReducer from "./brand/brand.slice";
import tagReducer from "./tag/tag.slice";
import categoryReducer from "./category/category.slice";
import productReducer from "./product/product.slice";
import customerReducer from "./customer/customer.slice";

const rootReducer = combineReducers({
  admin: adminReducer,
  media: mediaReducer,
  brand: brandReducer,
  tag: tagReducer,
  category: categoryReducer,
  product: productReducer,
  customer: customerReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
