

import css from './ShoppingCart.module.css';


//------------------------------------------------------
export const ShoppingCart = () => {
    return (
        <div className={css.shoppingCartContainer}>
            <div className={css.shoppingCarttaskContainer}>
                <div className={css.сustomerData}>
                    Customer Data
                </div>
                <div className={css.CustomerOrder}>
                    Customer Order
                </div>
            </div>
        <div className={css.shoppingCartPriceSubmitContainer}>
            <p className={css.totalPriceText}
                    >
                        Total price:
                        <span className={css.totalPriceNumber}> {"999"} грн.</span>
                    </p>
            <button
                className={css.submitButton}
                type="button"
                // onClick={() => addPizzaToCard(allPizzas[index])}
                >
                    Submit
            </button>
        </div>
            
            
        </div>
    );
};
