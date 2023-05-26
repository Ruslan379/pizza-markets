import { NavLink } from 'react-router-dom';
import css from './History.module.css';


//------------------------------------------------------
export const History = () => {
    //! Чтение массива объектов с данными заказчика --> customerDataLocalStorage
    let customerDataLocalStorage = JSON.parse(localStorage.getItem("customerData"));
    console.log("CustomerDataForm-->customerDataLocalStorage:", customerDataLocalStorage);

    if (!customerDataLocalStorage) {
        const customerData = {
            name: "",
            email: "",
            phone: "",
            address: "",
        };
        localStorage.setItem("customerData", JSON.stringify(customerData));
        console.log("CustomerDataForm-->IF:", customerData); //!
        customerDataLocalStorage = JSON.parse(localStorage.getItem("customerData"));
    };

    


    return (
        <div className={css.orderHistoryContainer}>
                <div className={css.historyData}>
                    <p>You Data</p>
                    <br />
                    <p>You Name: {customerDataLocalStorage.name }</p>
                    <p>You Email: {customerDataLocalStorage.email }</p>
                    <p>You Phone: {customerDataLocalStorage.phone }</p>
                    <p>You Address: {customerDataLocalStorage.address }</p>
                </div>
                
                <div className={css.historyOrder}>
                    <p>You Order</p>
                </div>
            {/* //* --- Кнопка Переход на страницу Shopping Cart: ----- */}
            <NavLink className={css.linkButton} to="/cart">Change</NavLink>
        </div>
    );
};
