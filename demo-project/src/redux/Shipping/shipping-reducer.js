import * as actionTypes from "./shipping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Vehicle",
      description:
        "Transport your bikes from one place to another with ease.",
      price: 200.0,
      image:
        "https://www.royalenfield.com/content/dam/royal-enfield/india/motorcycles/landing/continental-gt-new.jpg",
    },
    {
      id: 2,
      title: "Goods Transport",
      description:
        "Get cheap and best goods delivery along insurance assistance and real-time pricing.",
      price: 300.0,
      image:
        "https://img.favpng.com/21/25/1/dangerous-goods-cargo-freight-transport-png-favpng-qbXJShCm2fNj3f7mPCEZUdKPB.jpg",
    },
    {
      id: 3,
      title: "Furniture Items",
      description:
        "Shift houses with the most affordable rates in the city at your finger tips.",
      price: 250.0,
      image:
        "https://media.architecturaldigest.com/photos/62bcb8ce6cf27b95db3b09a9/16:9/w_2560%2Cc_limit/6-29%2520amazon%2520prime%2520upgrades%2520v1.jpg",
    },
  ],
  wagon: [],
  currentItem: null,
};

const shipReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );

      const inWagon = state.wagon.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        wagon: inWagon
          ? state.wagon.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
          : [...state.wagon, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        wagon: state.wagon.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        wagon: state.wagon.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    case 'DEFAULTT':
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default shipReducer;
