import { NavLink } from 'react-router-dom';
import css from './History.module.css';


//------------------------------------------------------
export const History = () => {
    return (
        <div className={css.shoppingCartContainer}>
            <div className={css.shoppingCarttaskContainer}>
                <div className={css.сustomerData}>
                    History Data
                </div>
                <div className={css.CustomerOrder}>
                    <p>History Order</p>
                    <br/>
                    {/* //* --- Кнопка Переход на страницу Shops: ----- */}
                    <NavLink className={css.linkButton} to="/">SHOPS</NavLink>
                </div>
                
            </div>
        {/* <div className={css.shoppingCartPriceSubmitContainer}>
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
        </div> */}
            
            
        </div>
    );
};
