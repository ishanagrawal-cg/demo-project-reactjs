import { combineReducers } from "redux";

import shippingReducer from "./Shipping/shipping-reducer";
import walletReducer from "./Wallet/wallet-reducer";


const rootReducer = combineReducers({
  ship: shippingReducer,
  wallet: walletReducer,
});

export default rootReducer;
