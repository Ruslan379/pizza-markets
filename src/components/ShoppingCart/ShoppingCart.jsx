

import css from './ShoppingCart.module.css';


//------------------------------------------------------
export const ShoppingCart = () => {
    return (
        <div className={css.shoppingCartContainer}>
            <div className={css.сustomerData}>
                Customer Data
            </div>
            <div className={css.CustomerOrder}>
                Customer Order
            </div>
        </div>
    );
};
