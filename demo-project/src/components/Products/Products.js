import React from "react";
import styles from "./Products.module.css";

// Redux
import { connect } from "react-redux";

import Product from "./Product/Product";

const Products = ({ products }) => {
  
  function Welcome() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if(hours < 12){
      timeOfDay = "morning"
    } else if(hours >= 12 && hours < 17){
      timeOfDay = "afternoon"
    } else {
      timeOfDay = "evening"
    }
    return(
      <h5>Good {timeOfDay} to you, sir or madam!</h5>
    )
  }

  return (
    <div className={styles.products}>
      <div style={{marginBottom: 15, marginTop: -15}}>{<Welcome/>}</div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.ship.products,
  };
};

export default connect(mapStateToProps)(Products);
