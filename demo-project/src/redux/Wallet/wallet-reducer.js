import { ADD_MONEY, DEDUCT_MONEY } from './wallet-actions';

const INITIAL_STATE = {
  amount: 500,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_MONEY:
      return {
        ...state,
        amount: parseInt(state.amount) + parseInt(action.payload.amount),
      };
    case DEDUCT_MONEY:
      return {
        // ...state,
        amount: parseInt(state.amount) - parseInt(action.payload.amount),
      };
    default:
      return state;
  }
}

export default walletReducer;
