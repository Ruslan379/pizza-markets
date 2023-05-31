import { useState } from "react"; 
import { useSelector } from "react-redux"; //!!!

import { selectallMarkets } from 'redux/market/marketSelectors';

// import pizzaMarkets from "db/pizzaMarkets.json"; //!!!

import { Shops } from 'components/Shops/Shops';
import { Pizzas } from 'components/Pizzas/Pizzas';

import imageBackgroundPizza from "images/A48382B1BEBB8CBDB0-large.webp";

import css from './Home.module.css';


export const Home = () => {
    const allChoicePizzasLocalStorage = JSON.parse(localStorage.getItem("allChoicePizzas"));

    const [allPizzas, setaAlPizzas] = useState([]);
    const [allChoicePizzas, setAllChoicePizzas] = useState(allChoicePizzasLocalStorage || []);

    //!!!
    const pizzaMarkets = useSelector(selectallMarkets);
    console.log("Home ==> pizzaMarkets:", pizzaMarkets); //!

    const selectShop = id => {
        const [selectShopPizzas] = pizzaMarkets.filter(pizzaMarket => pizzaMarket._id === id);
        setaAlPizzas(selectShopPizzas.pizzas);
    };

    const addPizzaToCart = pizza => {
        const findIndexPizza = allChoicePizzas.findIndex(item => item.pizza === pizza.pizza);
        if (findIndexPizza === -1) {
            const pizzaAndQuantity = {
            ...pizza,
            quantity: 1
            };
            setAllChoicePizzas([...allChoicePizzas, pizzaAndQuantity]);
            localStorage.setItem("allChoicePizzas", JSON.stringify([...allChoicePizzas, pizzaAndQuantity]));
        } else {

            allChoicePizzas.map((item, index) => {
                if (index === findIndexPizza) item.quantity = item.quantity + 1;
                return allChoicePizzas
            });
            setAllChoicePizzas([...allChoicePizzas]);
            localStorage.setItem("allChoicePizzas", JSON.stringify([...allChoicePizzas]));
        }
    }


    return (
        <div className={css.homeContainer}>
            <div className={css.shops}>
                <Shops
                    // pizzaMarkets={pizzaMarkets}
                    selectShop={selectShop}
                />
            </div>
            <div className={css.pizzas}>
                {allPizzas.length > 0
                    ?
                    (
                        <Pizzas
                        allPizzas={allPizzas}
                        addPizzaToCart={addPizzaToCart}
                        />
                    )
                    :
                    (
                        <div className={css.imagePizzaContainer}>
                            <img
                                className={css.imageBackgroundPizza}
                                alt={"Background Pizza"}
                                src={imageBackgroundPizza}
                                width="100%"
                            />
                        </div>
                    
                )}
            </div>
        </div>
    );
};