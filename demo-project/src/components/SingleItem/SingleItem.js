import React from "react";
import styles from "./SingleItem.module.css";

import { connect } from "react-redux";
import { addToWagon } from "../../redux/Shipping/shipping-actions";

const SingleItem = ({ current, addToWagon }) => {
  return (
    <div className={styles.singleItem}>
      <img
        className={styles.singleItem__image}
        src={current.image}
        alt={current.title}
      />
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>{current.title}</p>
        <p className={styles.details__description}>{current.description}</p>
        <p className={styles.details__price}>₹ {current.price}</p>

        <button
          onClick={() => addToWagon(current.id)}
          className={styles.details__addBtn}
        >
          Add To Wagon
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.ship.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToWagon: (id) => dispatch(addToWagon(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
