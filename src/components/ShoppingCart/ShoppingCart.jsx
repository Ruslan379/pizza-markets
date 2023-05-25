// import { useState } from "react";
import { ShoppingCartOrder } from 'components/ShoppingCartOrder/ShoppingCartOrder';

import css from './ShoppingCart.module.css';


//------------------------------------------------------
export const ShoppingCart = () => {
    // const togle = () => setValue(!value)
    //! Чтение массива объектов с заказанными пиццами --> allChoicePizzasLocalStorage
    const allChoicePizzasLocalStorage = JSON.parse(localStorage.getItem("allChoicePizzas"));
    console.log("ShoppingCartOrder-->allChoicePizzasLocalStorage:", allChoicePizzasLocalStorage);

    // const [allChoicePizzas, setAllChoicePizzas] = useState(allChoicePizzasLocalStorage || []);
    // console.log("ShoppingCart-->allChoicePizzas:", allChoicePizzas);

    //! Подсчетобщей суммы
    let totalPrice = 0;
    if (allChoicePizzasLocalStorage) {
        totalPrice = allChoicePizzasLocalStorage.reduce((total, item) => {
        total = total + item.price * item.quantity;
        return total;
    }, 0);
    };
    console.log("ShoppingCart-->totalPrice:", totalPrice); //!


    // setAllChoicePizzas([])



    return (
        <div className={css.shoppingCartContainer}>
            <div className={css.shoppingCartTaskContainer}>
                <div className={css.сustomerData}>
                    Shopping Cart Customer Data
                </div>
                <div className={css.CustomerOrder}>
                    {/* Shopping Cart Customer Order */}
                    <ShoppingCartOrder />
                </div>
            </div>
        <div className={css.shoppingCartPriceSubmitContainer}>
            <p className={css.totalPriceText}
                    >
                        Total price:
                        <span className={css.totalPriceNumber}> {totalPrice} грн.</span>
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
