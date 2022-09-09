import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import { connect } from "react-redux";

const Navbar = ({ wagon, amount }) => {
  const [wagonCount, setWagonCount] = useState(0);

  useEffect(() => {
    let count = 0;
    wagon.forEach((item) => {
      count += item.qty;
    });

    setWagonCount(count);
  }, [wagon, wagonCount]);

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h2 className={styles.navbar__logo}>Transport Services</h2>
      </Link>
      <Link to="/addMoney">
        <h5 className={styles.navbar__title}>Add Money<br/>(API)</h5>
      </Link>
      <Link to="/wallet">
        <h5 className={styles.navbar__title}>Add from Wallet<br/>(Avl Bal. ₹{amount})</h5>
      </Link>
      <Link to="/wagon">
        <div className={styles.navbar__wagon}>
          <h3 className={styles.wagon__title}>Wagon</h3>
          <img
            className={styles.wagon__image}
            src="https://img.icons8.com/plasticine/100/000000/truck--v1.png"
            alt="shipping wagon"
          />
          <div className={styles.wagon__counter}>{wagonCount}</div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    wagon: state.ship.wagon,
    amount: state.wallet.amount,
  };
};

export default connect(mapStateToProps)(Navbar);