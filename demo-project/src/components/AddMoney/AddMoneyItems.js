import React from "react";
import { Link } from "react-router-dom";
import styles from "../Products/Product/Product.module.css";

// Redux
import { connect } from "react-redux";
import {
  addMoney,
} from "../../redux/Wallet/wallet-actions";

const AddMoneyItems = ({ product, addMoney }) => {
  return (
    <div className={styles.product}>
      <img
        className={styles.product__image}
        src={product.image}
        alt={product.title}
      />

      <div className={styles.product__details}>
        <p className={styles.details__title}>{product.title}</p>
        <p className={styles.details__desc}>{product.description}</p>
        <p className={styles.details__price}>₹ {product.price}</p>
      </div>

      <div className={styles.product__buttons}>                
        <button
          onClick={() => addMoney(product.price)}
          className={`${styles.buttons__btn} ${styles.buttons__add}`}
        >
          Add Money
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMoney: (amount) => dispatch(addMoney(amount)),    
  };
};

export default connect(null, mapDispatchToProps)(AddMoneyItems);
