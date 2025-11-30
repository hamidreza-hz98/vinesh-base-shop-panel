import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

import adminReducer from "./admin/admin.slice";
import mediaReducer from "./media/media.slice";
import brandReducer from "./brand/brand.slice";
import tagReducer from "./tag/tag.slice";
import categoryReducer from "./category/category.slice";
import productReducer from "./product/product.slice";
import customerReducer from "./customer/customer.slice";
import settingsReducer from "./settings/settings.slice";
import orderReducer from "./order/order.slice";
import contactReducer from "./contact/contact.slice";
import dashboardReducer from "./dashboard/dashboard.slice";

const rootReducer = combineReducers({
  admin: adminReducer,
  media: mediaReducer,
  brand: brandReducer,
  tag: tagReducer,
  category: categoryReducer,
  product: productReducer,
  customer: customerReducer,
  settings: settingsReducer,
  order: orderReducer,
  contact: contactReducer,
  dashboard: dashboardReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
