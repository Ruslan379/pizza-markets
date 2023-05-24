// import pizzaMarkets from "db/pizzaMarkets.json";
import imagePizza from "images/monopizza_pica-dyabola.jpg";


import css from "./Pizzas.module.css";



//------------------------------------------------------
export const Pizzas = ({ allPizzas }) => {
    console.log("Pizzas-->allPizzas:", allPizzas);





    return (
        <ul className={css.list}>
            {allPizzas.map(item => (
                <li
                    className={css.listItem}
                    key={item.pizza}
                >
                    <img
                        className={css.imagePizza}
                        alt={imagePizza}
                        src={imagePizza}
                        width="100%"
                    />
                    "{item.pizza}" price:{item.price} грн.
                </li>
            ))}
        </ul>
    );
};
