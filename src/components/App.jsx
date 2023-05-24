// import {
//     // useState,
//     // useEffect
// } from 'react';

import {
  Route,
  Routes,
  // Link,
  // NavLink,
  // Outlet 
} from 'react-router-dom';

// import { useParams } from "react-router-dom";

import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Home } from 'components/Home/Home';
import { ShoppingCart } from 'components/ShoppingCart/ShoppingCart';
import { NotFound } from "page/NotFound";

// import css from './App.module.css';


export const App = () => {




  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<SharedLayout />} >
        <Route index element={<Home />} />
        <Route path="/сart" element={<ShoppingCart/>} ></Route>
      </Route> 
    </Routes>
  
  );
};
