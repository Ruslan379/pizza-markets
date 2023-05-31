//! Redux Toolkit 
import { configureStore } from "@reduxjs/toolkit";

import { marketsPizzasReduser } from 'redux/market/marketSlice';




export const store = configureStore({
    reducer: {
        marketPizzas: marketsPizzasReduser,
        // customerData: customerDataReduser,
        // customerOrder: customerOrderReduser,
    },
});


