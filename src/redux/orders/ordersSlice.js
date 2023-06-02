import { createSlice } from '@reduxjs/toolkit';
// import { logOut } from 'redux/auth/authOperations';
import {
    getAllOrders,
    addOrder
} from './ordersOperations';




const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.isDeleting = false;
    state.error = payload;
};


const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        orders: [],
        lastOrderNumber: "",
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [getAllOrders.pending]: handlePending,
        [addOrder.pending]: handlePending,
        // [deleteContact.pending]: handlePending,
        // [editContact.pending]: handlePending,


        [getAllOrders.rejected]: handleRejected,
        [addOrder.rejected]: handleRejected,
        // [deleteContact.rejected]: handleRejected,
        // [editContact.rejected]: handleRejected,


        [getAllOrders.fulfilled](state, { payload }) {
            // state.isLoading = false;
            // state.error = null;
            state.orders = payload;
        },

        [addOrder.fulfilled](state, { payload }) {
            console.log("ordersSlice/addOrder ==> payload:", payload); //!
            console.log("ordersSlice/addOrder ==> payload._id:", payload._id); //!
            state.isLoading = false;
            state.error = null;
            state.orders.push(payload);
            state.lastOrderNumber = payload._id;
        },

        // [deleteContact.fulfilled](state, { payload }) {
        //     state.isLoading = false;
        //     state.error = null;
        //     //! вариант Репеты:
        //     // const index = state.orders.findIndex(task => task.id === payload);
        //     // state.orders.splice(index, 1);
        //     //! МОЙ вариант:
        //     // const newContact = state.orders.filter(contact => contact.id !== payload);
        //     // console.log("deleteContact==>payload:", payload); //!
        //     // state.orders = state.orders.filter(contact => contact.id !== payload); //??
        //     state.orders = state.orders.filter(contact => contact._id !== payload);
        //     // console.log("deleteContact==>state.orders:", state.orders); //!
        //     // state = { orders: newContact }
        // },

        // [editContact.fulfilled](state, { payload }) {
        //     state.isLoading = false;
        //     state.error = null;
        //     // console.log("editContact==>payload:", payload); //!
        //     // console.log("state.orders:", state.orders); //!
        //     // const index = state.orders.findIndex(task => task.id === payload.id); //??
        //     const index = state.orders.findIndex(task => task._id === payload._id);
        //     // console.log("index:", index); //!
        //     // console.log("state.orders[index]:", state.orders[index]); //!
        //     state.orders.splice(index, 1, payload);
        // },

    },
});

export const ordersReducer = ordersSlice.reducer;
