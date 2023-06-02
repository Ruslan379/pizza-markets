import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";

import { selectAllOrders, selectLastOrderNumber } from 'redux/orders/ordersSelectors';

import css from './OrderCompletion.module.css';



export const OrderCompletion = () => {
    let lastOrder = null

    const allOrders = useSelector(selectAllOrders);
    const lastOrderNumber = useSelector(selectLastOrderNumber);
    // console.log("OrderCompletion --> allOrders:", allOrders); //!
    // console.log("OrderCompletion --> lastOrderNumber:", lastOrderNumber); //!
    
    const findLastOrder = lastOrderNumber => {
        [lastOrder] = allOrders.filter(item => item._id === lastOrderNumber);
    };
    findLastOrder(lastOrderNumber);

    // console.log("OrderCompletion --> lastOrder:", lastOrder); //!
    
    return (
        <div className={css.orderCompletionContainer}>
            <div className={css.textContainer}>
                <p className={css.header}
                >Thank you,
                    <span className={`${css.header} ${css.headerData}`}> {lastOrder ? lastOrder.name : "NAME"}</span>
                    !
                </p>
                <p className={css.header}>Your order
                    <span className={`${css.header} ${css.headerData}`}> {lastOrderNumber ? lastOrderNumber : "NUMBER"} </span>
                    has been accepted and will be delivered to you at:
                    <br />
                    <span className={`${css.header} ${css.headerData}`}>{lastOrder ? lastOrder.address : "ADDRESS" }</span>
                </p>
            </div>
            <NavLink className={css.linkButton} to="/">Go Shop</NavLink>
        </div>
    );
};
