import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
  addMoney,
} from "../../redux/Wallet/wallet-actions";

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', currency: 'INR' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    this.finalAmount = this.finalAmount.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleCurrencyChange(event) {
    this.setState({ currency: event.target.value })
  }

  finalAmount(){
    console.log(this.state.currency, this.state.value);
    switch (this.state.currency) {
      case ("USD"):
         return this.state.value *= 80;
      case ("GBP"):
         return this.state.value *= 100;
      case ("KD"):
         return this.state.value *= 200;
      default:
         return this.state.value;
    } 
  }

  render() {
    const { amount, addMoney } = this.props
    return (
      <form onSubmit={this.handleSubmit} style={{ textAlign: 'center' }}>
        <br />
        <br />
        <label>
          <h2>Amount:
            <input type="number" value={this.state.value} onChange={this.handleChange} /></h2>
        </label>
        <br />
        <br />
        <h2>
          <label htmlFor="currency"> Currency:
            <select
              name="currency"
              id="currency"
              onChange={this.handleCurrencyChange}
              value={this.state.currency}
            >
              <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
              <option value="KD">KD</option>
            </select>
          </label>
        </h2>
        <br />
        <br />
        <h1><input onClick={() => addMoney(parseInt(this.finalAmount()))} type="submit" value="Add Money" style={{ height: "30px", width: "110px" }} /></h1>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    amount: state.wallet.amount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMoney: (amount) => dispatch(addMoney(amount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
