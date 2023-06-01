import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';





//! axios defaults baseURL (возможно, это не надо, т.к. уже есть в authOperations.js)
axios.defaults.baseURL = 'http://localhost:3333/api';
// axios.defaults.baseURL = 'https://contact-book-backend52.onrender.com/api';




//! GET @ /markets
export const getAllMarkets = createAsyncThunk(
    'markets/getAllMarkets',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('/markets'); //?  //??
            // console.log("markets/getAllMarkets==>data:", data); //! //??
            // const { data: { markets } } = await axios.get('/markets'); //???
            // const { markets } = data; //??  //???
            console.log("markets/getAllMarkets == >data.markets:", data.markets); //!
            return data.markets; //?
            // return data; //??
            // return markets; //??  //???
        } catch (error) {
            console.log(error); //!
            toast.error(`Ошибка запроса: ${error.message === "Request failed with status code 404" ? "Нет такой коллекции пользователей" : error.message}`, { position: "top-center", autoClose: 2000 });
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


//? POST @ /markets
export const addTransaction = createAsyncThunk(
    'transactions/addTransaction',
    async (credentials, thunkAPI) => {
        console.log("transactions/addTransaction ==> credentials:", credentials); //!
        try {
            const { data } = await axios.post('/transactions', credentials);
            console.log("transactions/addTransaction ==> data:", data); //!
            console.log("transactions/addTransaction ==> data.transaction:", data.transaction);  //!
            console.log("transactions/transactions ==> data.transaction:", data.transactions);  //!
            // return data.transaction;
            return data;
        } catch (error) {
            console.log(error); //!
            toast.error(`Ошибка запроса: ${error.message === "Request failed with status code 400" ? "Ошибка при создании контакта" : error.message}`, { position: "top-center", autoClose: 2000 });
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);



//? DELETE @ /markets/:marketId
export const deleteTransaction = createAsyncThunk(
    'transactions/deleteTransaction',
    async (credentials, thunkAPI) => {
        try {
            console.log("transactions/deleteTransaction ==> credentials:", credentials); //!
            const { data } = await axios.delete(`/transactions/${credentials}`);
            console.log("transactions/deleteTransaction ==> data:", data); //!
            console.log("transactions/deleteTransaction ==> data.transactionId:", data.transactionId); //!
            return data.transactionId;
        } catch (error) {
            console.log(error); //!
            toast.error(`Ошибка запроса: ${error.message === "Request failed with status code 404" ? "Нет такой коллекции пользователей" : error.message}`, { position: "top-center", autoClose: 2000 });
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


