import { useState } from "react";

import pizzaMarkets from "db/pizzaMarkets.json";

import { Shops } from 'components/Shops/Shops';
import { Pizzas } from 'components/Pizzas/Pizzas';

import css from './Home.module.css';


//------------------------------------------------------
export const Home = () => {
    //! Чтение массива объектов с заказанными пиццами --> allChoicePizzasLocalStorage
    const allChoicePizzasLocalStorage = JSON.parse(localStorage.getItem("allChoicePizzas"));
    console.log("Home-->allChoicePizzasLocalStorage:", allChoicePizzasLocalStorage);


    const [allPizzas, setaAlPizzas] = useState([]);
    const [allChoicePizzas, setAllChoicePizzas] = useState(allChoicePizzasLocalStorage || []);
    console.log("Home-->allChoicePizzas:", allChoicePizzas);

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

    //! Добаление пиццы в заказ
    const addPizzaToCard = pizza => {
        console.log("Home-->-->pizza:", pizza);

        //! Проверка на добавление имеющейся пиццы
        const findIndexPizza = allChoicePizzas.findIndex(item => item.pizza === pizza.pizza);
        console.log("Home-->findIndexPizza:", findIndexPizza);

        if (findIndexPizza === -1) {
            const pizzaAndQuantity = {
            ...pizza,
            quantity: 1
            };
            console.log("Home-->pizzaAndQuantity:", pizzaAndQuantity); //!
            setAllChoicePizzas([...allChoicePizzas, pizzaAndQuantity]);
            localStorage.setItem("allChoicePizzas", JSON.stringify([...allChoicePizzas, pizzaAndQuantity]));
        } else {
            const newAllChoicePizzas = allChoicePizzas.map((item, index) => {
                if (index === findIndexPizza) {
                    console.log("Надо добавить + 1"); //!
                    console.log("Home-->item.quantity :", item.quantity); //!
                    item.quantity = item.quantity + 1;
                    console.log("Home-->NEW item.quantity :", item.quantity); //!
                } 
            console.log("newAllChoicePizzas-->allChoicePizzas :", allChoicePizzas); //!
            return allChoicePizzas
            });
        console.log("Home-->allChoicePizzas :", allChoicePizzas); //!
        console.log("Home-->newAllChoicePizzas :", newAllChoicePizzas); //!
        setAllChoicePizzas([...allChoicePizzas]);
        localStorage.setItem("allChoicePizzas", JSON.stringify([...allChoicePizzas]));
        }
    }



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
