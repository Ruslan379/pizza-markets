import { useState } from "react";

import pizzaMarkets from "db/pizzaMarkets.json";

import { Shops } from 'components/Shops/Shops';
import { Pizzas } from 'components/Pizzas/Pizzas';

import css from './Home.module.css';


//------------------------------------------------------
export const Home = () => {
    // const [idMarket, setIdMarket] = useState(0); //! не нужен
    const [allPizzas, setaAlPizzas] = useState([]);
    const [allChoicePizzas, setAllChoicePizzas] = useState([]);

    console.log("Home-->pizzaMarkets:", pizzaMarkets);

    //! Выбор магазина
    const selectShop = id => {
        // setIdMarket(id); //! не нужен
        const [selectShopPizzas] = pizzaMarkets.filter(pizzaMarket => pizzaMarket.id === id);
        console.log("id:", id);
        console.log("selectShopPizzas:", selectShopPizzas);

        // const allPizzas = selectShopPizzas.pizzas;
        console.log("allPizzas:", selectShopPizzas.pizzas);
        setaAlPizzas(selectShopPizzas.pizzas);

        selectShopPizzas.pizzas.map(item => {
            return console.log(`Pizza:${item.pizza}, Price=${item.price}`);
        })
    };

    //! Выбор пиццы
    const addPizzaToCard = pizza => {
        console.log("Home-->-->pizza:", pizza);
        setAllChoicePizzas([...allChoicePizzas, pizza]);
    }


    // console.log("Home-->idMarket:", idMarket); //! не нужен
    console.log("Home-->allPizzas:", allPizzas);
    console.log("Home-->allChoicePizzas:", allChoicePizzas);

    return (
        <div className={css.homeContainer}>
            <div className={css.shops}>
                {/* Shops Component */}
                <Shops
                    pizzaMarkets={pizzaMarkets}
                    selectShop={selectShop}
                />
            </div>
            <div className={css.pizzas}>
                {/* Pizzas Component */}
                <Pizzas
                    allPizzas={allPizzas}
                    addPizzaToCard={addPizzaToCard}
                />
            </div>
        </div>
    );
};
