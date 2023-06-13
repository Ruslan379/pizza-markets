import { useDispatch, useSelector } from "react-redux";

import { selectAllMarkets, selectIsOneShop, selectShopIndex } from 'redux/market/marketSelectors';
import { togleIsOneShop, setShopIndexSelection } from 'redux/market/marketOperations';
import pizzaMarketsJson from "db/pizzaMarketsMongoDB.json"; //!!! 

import css from "./HomeShopsList.module.css";




export const HomeShopsList = ({ selectShop }) => {
    const dispatch = useDispatch();

    const switchIsOneShop = () => {
        dispatch(togleIsOneShop());
    };

    const allChoicePizzasLocalStorage = JSON.parse(localStorage.getItem("allChoicePizzas"));
    const conditionallChoicePizzasLocalStorage = !!allChoicePizzasLocalStorage && allChoicePizzasLocalStorage.length > 0; //! 2-й вариант

    let pizzaMarkets = useSelector(selectAllMarkets);
    if (pizzaMarkets.length === 0) pizzaMarkets = [...pizzaMarketsJson];

    const isOneShop = useSelector(selectIsOneShop);
    const shopIndexSelection = useSelector(selectShopIndex);




    return (
        <>
            <button
                className={
                    `${isOneShop
                        ?
                        `${css.isOneShopButton}`
                        :
                        `${css.isOneShopButton} ${css.isAllShopButton}`
                    }`
                }
                type="button"
                onClick={switchIsOneShop}
                disabled={false}
            >
                {isOneShop ? <p>Choice of pizza from <span className={css.accentShop}>ONE Shop</span></p> : <p>Choice of pizza from <span className={css.accentShop}>ALL Shops</span></p>}
            </button>

            <p className={css.headerShops}>Shops:</p>

            <ul className={css.list}>
                {pizzaMarkets.map((pizzaMarket, index) => (
                    <li
                        className={css.listItem}
                        key={pizzaMarket._id}
                    >
                        <button
                            className={
                                `
                                    ${(shopIndexSelection === null || index === shopIndexSelection)
                                        ?
                                        `${css.selectShopButton}`
                                        :
                                        `${css.selectShopButton} ${css.selectShopButtonOpacity}`
                                    }
                                    ${(
                                        isOneShop
                                        && conditionallChoicePizzasLocalStorage 
                                        && !(shopIndexSelection === index)
                                        )
                                        ?
                                        `${css.selectShopButton} ${css.selectOnlyOneShopButtonOpacity}`
                                        :
                                        ``
                                    }
                                `
                            }
                            type="button"
                            onClick={() => {
                                selectShop(pizzaMarket._id, index);
                                dispatch(setShopIndexSelection(index));
                            }}
                            disabled={
                                isOneShop
                                && conditionallChoicePizzasLocalStorage 
                                && !(shopIndexSelection === index) 
                            }
                        >
                            {pizzaMarket.shop}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};
