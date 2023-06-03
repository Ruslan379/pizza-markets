import { ShoppingCartOrder } from 'components/ShoppingCartOrder/ShoppingCartOrder';
import { CustomerDataForm } from 'components/CustomerDataForm/CustomerDataForm';

import css from './ShoppingCart.module.css';


export const ShoppingCart = () => {
    return (
        <div className={css.shoppingCartContainer}>
            <div className={css.сustomerData}>
                <CustomerDataForm />
            </div>
            <div className={css.CustomerOrder}>
                <ShoppingCartOrder />
            </div>
            {/* //! Контейнер для Total Price и копки Submit */}
            {/* <div className={css.totalPriceSubmitContainer}></div> */}
        </div>
    );
};
