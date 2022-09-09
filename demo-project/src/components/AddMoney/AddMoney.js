import React, { Component } from 'react'

import styles from "../Products/Products.module.css";
import AddMoneyItems from './AddMoneyItems';

export default class AddMoney extends Component {
    state = {
        data: [],
        isLoaded: false,
    }

    async componentDidMount() {
        try {
            const res = await fetch('https://mocki.io/v1/5f6d6d20-6a1b-4c69-ba33-6b630332c926');
            const data = await res.json();
            console.log(data);
            setTimeout(() => {
                this.setState({ data: data, isLoaded: true })
            }, 1000)            
        } catch (error) {
            console.log(error + " In Getting FEED")
        }
    }

    render() {
        const { data, isLoaded } = this.state;
        return (
            <div className={styles.products}>
                {!isLoaded ? <div>Loading...</div> :
                    <>
                        {data.map((product) => {
                            return <AddMoneyItems key={product.id} product={product} />
                        })}
                    </>
                }

            </div>
        )
    }
}
