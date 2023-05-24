// import whel from 'images/roulette-wheel.png';

import css from './Home.module.css';


//------------------------------------------------------
export const Home = () => {
    return (
        <div className={css.logoHomeContainer}>
            <div className={css.shops}>
                Shops Component
            </div>
            <div className={css.pizzas}>
                Pizzas Component
            </div>
        </div>
    );
};
