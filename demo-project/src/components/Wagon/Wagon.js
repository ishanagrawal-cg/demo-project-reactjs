import React, { useState, useEffect } from "react";
import styles from "./Wagon.module.css";
import { connect } from "react-redux";
import WagonItem from "./WagonItem/WagonItem";
import {  
  addMoney,
} from "../../redux/Wallet/wallet-actions";
import {  
  defaultt,
} from "../../redux/Shipping/shipping-actions";

const Wagon = ({ wagon, amount, addMoney, defaultt }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalTax, setTotalTax] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  
  const getData = (data) => {
    console.log(data);    
  }

  useEffect(() => {
    let items = 0;
    let price = 0;

    wagon.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);    
  }, [wagon, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  const handleSubmit = () => {
    addMoney(-totalPrice);
    defaultt();
    alert('Your request is approved.');
  }

  return (
    <div className={styles.wagon}>
      <div className={styles.wagon__items}>
        {wagon.map((item) => (
          <WagonItem key={item.id} item={item} onSubmit={getData}/>
        ))}
      </div>
      <div className={styles.wagon__summary}>
        <h4 className={styles.summary__title}>Wagon Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: ({totalItems} items)</span>
          <span>₹ {totalPrice}</span>
        </div>        
        {amount >= totalPrice && totalPrice!= 0 ? 
        <button className={styles.summary__checkoutBtn} onClick={()=>handleSubmit()}>
          Proceed To Checkout
        </button> 
        : <>
          {totalPrice == 0 ? 
          <h5 style={{color:"red"}}>Please add something in wagon first.</h5>
          :
          <h5 style={{color:"red"}}>Please add some money first.</h5>
          }
        </>
        }
        
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    wagon: state.ship.wagon,
    amount: state.wallet.amount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMoney: (amount) => dispatch(addMoney(amount)),
    defaultt: () => dispatch(defaultt()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wagon);


// import React, { useState, useEffect, Component } from "react";
// import styles from "./Wagon.module.css";

// import { connect } from "react-redux";

// import WagonItem from "./WagonItem/WagonItem";

// interface wagonProps {
  
//   wagon: () => void,

// }




// class Wagon extends Component<wagonProps> {
//   constructor(props: wagonProps) {
//     super(props);
//     this.state = {
//       wagon: this.wagon;
//     }    
//   }

//   render() {
//     return (
//       <div className={styles.wagon}>
//         <div className={styles.wagon__items}>
//           {/* {wagon.map((item) => (
//           <WagonItem key={item.id} item={item} />
//         ))} */}
//         </div>
//         <div className={styles.wagon__summary}>
//           <h4 className={styles.summary__title}>Wagon Summary</h4>
//           <div className={styles.summary__price}>
//             {/* <span>TOTAL: ({totalItems} items)</span>
//           <span>$ {totalPrice}</span> */}
//           </div>
//           <button className={styles.summary__checkoutBtn}>
//             Proceed To Checkout
//           </button>
//         </div>
//       </div>
//     )
//   }
// }
// //   const [totalPrice, setTotalPrice] = useState(0);
// //   const [totalTax, setTotalTax] = useState(0);
// //   const [totalItems, setTotalItems] = useState(0);

// //   useEffect(() => {
// //     let items = 0;
// //     let price = 0;

// //     wagon.forEach((item) => {
// //       items += item.qty;
// //       price += item.qty * item.price;
// //     });

// //     setTotalItems(items);
// //     setTotalPrice(price);    
// //   }, [wagon, totalPrice, totalItems, setTotalPrice, setTotalItems]);

// //   return (
// //     <div className={styles.wagon}>
// //       <div className={styles.wagon__items}>
// //         {wagon.map((item) => (
// //           <WagonItem key={item.id} item={item} />
// //         ))}
// //       </div>
// //       <div className={styles.wagon__summary}>
// //         <h4 className={styles.summary__title}>Wagon Summary</h4>
// //         <div className={styles.summary__price}>
// //           <span>TOTAL: ({totalItems} items)</span>
// //           <span>$ {totalPrice}</span>
// //         </div>        
// //         <button className={styles.summary__checkoutBtn}>
// //           Proceed To Checkout
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// const mapStateToProps = (state) => {
//   return {
//     wagon: state.ship.wagon,
//   };
// };

// export default connect(mapStateToProps)(Wagon);
