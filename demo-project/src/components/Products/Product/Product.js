import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToWagon,
} from "../../../redux/Shipping/shipping-actions";

const Product = ({ product, addToWagon, loadCurrentItem, isAddMoney }) => {
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
        <Link to={`/product/${product.id}`}>
          <button
            onClick={() => loadCurrentItem(product)}
            className={`${styles.buttons__btn} ${styles.buttons__view}`}
          >
            View Item
          </button>
        </Link>
        <button
          onClick={() => addToWagon(product.id)}
          className={`${styles.buttons__btn} ${styles.buttons__add}`}
        >
          Add To Wagon
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToWagon: (id) => dispatch(addToWagon(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
