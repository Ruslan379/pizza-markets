import { NavLink } from 'react-router-dom';
import css from './OrderCompletion.module.css';



export const OrderCompletion = () => {
    return (
        <div className={css.orderCompletionContainer}>
            <div className={css.textContainer}>
                <p className={css.header}>Your order has been received and will be delivered to you soon</p>
                <p className={css.header}>Thank you!</p>
            </div>
            <NavLink className={css.linkButton} to="/">Go Shop</NavLink>
        </div>
    );
};
