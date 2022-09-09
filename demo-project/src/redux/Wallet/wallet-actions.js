export const ADD_MONEY = 'ADD_MONEY';
export const DEDUCT_MONEY = 'DEDUCT_MONEY';

export const addMoney = (amount) => {
  return ({
    type: ADD_MONEY,
    payload: {
      amount,
    },
  });
}

export const deductMoney = (amount) => {
  return ({
    type: DEDUCT_MONEY,
    payload: {
      amount,
    },
  });
}
