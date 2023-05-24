import pizzaMarkets from "db/pizzaMarkets.json";


import css from "./Shops.module.css";




export const Shops = () => {
    console.log("pizzaMarkets:", pizzaMarkets);
    // const shops = JSON.parse(pizzaMarkets);
    const markets = pizzaMarkets.map(market => market.shop);
    console.log("markets:", markets);


    return (
        <ul className={css.list}>
            {markets.map((market, index) => (
                <li
                    className={css.listItem}
                    key={index}
                >
                    <button
                        className={css.selectShopButton}
                        type="button"
                    >
                        {market}
                    </button>
                </li>
            ))}
        </ul>
    );
};
