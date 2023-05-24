import { Shops} from 'components/Shops/Shops';

import css from './Home.module.css';


//------------------------------------------------------
export const Home = () => {
    return (
        <div className={css.homeContainer}>
            <div className={css.shops}>
                {/* Shops Component */}
            <Shops/>
            </div>
            <div className={css.pizzas}>
                Pizzas Component
            </div>
        </div>
    );
};
