import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Route,
  Routes,
} from 'react-router-dom';

import { getAllMarkets } from 'redux/market/marketOperations';

import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { NotFound } from "page/NotFound";
import { Home } from 'components/Home/Home';
import { ShoppingCart } from 'components/ShoppingCart/ShoppingCart';
import { History } from 'components/History/History';


export const App = () => {
  const dispatch = useDispatch();
  // const { isLoading } = useAuth();

    useEffect(() => {
        dispatch(getAllMarkets());
    }, [dispatch]);

    // console.log("App ==> isLoading:", isLoading); //!

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<SharedLayout />} >
        <Route index element={<Home />} />
        <Route path="/cart" element={<ShoppingCart />} ></Route>
        <Route path="/history" element={<History/>} ></Route>
      </Route> 
    </Routes>
  
  );
};
