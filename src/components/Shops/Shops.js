import { useSelector } from "react-redux";

import { selectallMarkets } from 'redux/market/marketSelectors';

import css from "./Shops.module.css";




// export const Shops = ({ pizzaMarkets, selectShop }) => {
export const Shops = ({ selectShop }) => {
    const pizzaMarkets = useSelector(selectallMarkets);
    console.log("Shops ==> pizzaMarkets:", pizzaMarkets); //!

    return (
        <>
            <p className={css.headerShops}>Shops:</p>
            <ul className={css.list}>
                {pizzaMarkets.map(pizzaMarket => (
                    <li
                        className={css.listItem}
                        key={pizzaMarket._id}
                    >
                        <button
                            className={css.selectShopButton}
                            type="button"
                            onClick={() => selectShop(pizzaMarket._id)}
                        >
                            {pizzaMarket.shop}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};
