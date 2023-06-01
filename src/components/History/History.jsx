import { NavLink } from 'react-router-dom';
import css from './History.module.css';



export const History = () => {

    const customerDataLocalStorage = JSON.parse(localStorage.getItem("customerData"));


    // if (!customerDataLocalStorage) {
    //     const customerData = {
    //         name: "",
    //         email: "",
    //         phone: "",
    //         address: "",
    //     };
    //     localStorage.setItem("customerData", JSON.stringify(customerData));
    //     customerDataLocalStorage = JSON.parse(localStorage.getItem("customerData"));
    // };


    const allChoicePizzasLocalStorage = JSON.parse(localStorage.getItem("allChoicePizzas"));

    //! Подсчет общей суммы
    let totalPrice = 0;
    let totalPizzas = 0;
    if (allChoicePizzasLocalStorage) {
        totalPizzas = allChoicePizzasLocalStorage.reduce((total, item) => {
            total = total + item.quantity;
            return total;
        }, 0);
        totalPrice = allChoicePizzasLocalStorage.reduce((total, item) => {
            total = total + item.price * item.quantity;
            return total;
        }, 0);
    };




    return (
        <div className={css.orderHistoryContainer}>
            <div className={css.historyData}>
                {customerDataLocalStorage.name
                    ?
                    (
                        <>
                            <p className={css.header}>You Data:</p>
                            {/* <br /> */}
                            <p className={css.textKey}>You Name: <span className={css.textValue}>{customerDataLocalStorage.name}</span></p>
                            <p className={css.textKey}>You Email: <span className={css.textValue}>{customerDataLocalStorage.email}</span></p>
                            <p className={css.textKey}>You Phone: <span className={css.textValue}>{customerDataLocalStorage.phone}</span></p>
                            <p className={css.textKey}>You Address: <span className={css.textValue}>{customerDataLocalStorage.address}</span></p>
                        </>
                    )
                    :
                    (

                        <div className={css.informationTextContainer}>
                            <div className={css.informationText}
                            >
                                Please enter your information
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={css.historyOrder}>
                {allChoicePizzasLocalStorage
                    ?
                    (
                        <>
                            <p className={css.header}>You Order:</p>
                            {/* <br /> */}
                            <p className={css.textKey}>Pizza varieties: <span className={css.textValue}>{allChoicePizzasLocalStorage ? allChoicePizzasLocalStorage.length : 0}</span></p>
                            <p className={css.textKey}>Total pizzas: <span className={css.textValue}>{totalPizzas}</span></p>
                            <p className={css.textKey}>TOTAL: <span className={css.textValue}>{totalPrice} грн.</span></p>
                        </>
                    )
                    :
                    (

                        <div className={css.informationTextContainer}>
                            <div className={css.informationText}
                            >
                                Please, place your pizza order on the shop page make an order
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={css.buttonContainer}>
                <NavLink className={css.linkButton} to="/cart">Change</NavLink>
                {customerDataLocalStorage.name && allChoicePizzasLocalStorage && (
                    <NavLink className={css.linkButton} to="/order">Сonfirm</NavLink>
                )}
            </div>
        </div>
    );
};
