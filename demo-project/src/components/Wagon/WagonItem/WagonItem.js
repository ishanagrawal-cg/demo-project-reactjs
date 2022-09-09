import React, { useState } from "react";
import styles from "./WagonItem.module.css";

import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromWagon,
} from "../../../redux/Shipping/shipping-actions";

const WagonItem = ({ item, adjustQty, removeFromWagon, onSubmit }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
    onSubmit(item.qty+1);
  };

  return (
    <div className={styles.wagonItem}>
      <img
        className={styles.wagonItem__image}
        src={item.image}
        alt={item.title}
      />
      <div className={styles.wagonItem__details}>
        <p className={styles.details__title}>{item.title}</p>
        <p className={styles.details__desc}>{item.description}</p>
        <p className={styles.details__price}>₹ {item.price}</p>
      </div>
      <div className={styles.wagonItem__actions}>
        <div className={styles.wagonItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          onClick={() => removeFromWagon(item.id)}
          className={styles.actions__deleteItemBtn}
        >
          <img            
            src="https://img.icons8.com/color-glass/48/000000/filled-trash.png"
            alt="delete"
          />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromWagon: (id) => dispatch(removeFromWagon(id)),
  };
};

export default connect(null, mapDispatchToProps)(WagonItem);
