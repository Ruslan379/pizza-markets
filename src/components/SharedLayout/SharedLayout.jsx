import {
  NavLink,
  Outlet 
} from 'react-router-dom';


import css from './SharedLayout.module.css';

//------------------------------------------------------------------------------------
console.log("SharedLayout.js:");

//! ---------------------------------------------------------------------------------------



export const SharedLayout = () => {

  return (
    <div className={css.Container}>
      <nav className={css.navFlex}>
        <NavLink className={css.navLink} to="/">Shop</NavLink>
        <NavLink className={css.navLink} to="/сart">Shopping Cart</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
