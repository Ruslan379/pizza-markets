import { useNavigate } from "react-router-dom";
// import { useDispatch } from 'react-redux';  //! не здесь

// import { createOrder } from 'redux/orders/ordersOperations'; //! не здесь

import css from './CustomerDataForm.module.css';




export const CustomerDataForm = () => {
    const navigate = useNavigate();
    // const dispatch = useDispatch(); //! не здесь

    let customerDataLocalStorage = JSON.parse(localStorage.getItem("customerData"));
    const allChoicePizzasLocalStorage = JSON.parse(localStorage.getItem("allChoicePizzas"));

    if (!customerDataLocalStorage) {
        const customerData = {
            name: "",
            email: "",
            phone: "",
            address: "",
        };
        localStorage.setItem("customerData", JSON.stringify(customerData));
        customerDataLocalStorage = JSON.parse(localStorage.getItem("customerData"));
    };

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const customerData = {
            name: form.elements.name.value,
            email: form.elements.email.value,
            phone: form.elements.phone.value,
            address: form.elements.address.value,
        };
        localStorage.setItem("customerData", JSON.stringify(customerData));

        //! Запрос в БД на добавление заказа (не здесь)
        // console.log("CustomerDataForm-->customerData:", customerData) //!
        // console.log("CustomerDataForm-->allChoicePizzasLocalStorage:", allChoicePizzasLocalStorage) //!
        // const confirmedOrder = { ...customerData, oder: allChoicePizzasLocalStorage };
        // console.log("CustomerDataForm-->confirmedOrder:", confirmedOrder) //!
        // dispatch(createOrder(confirmedOrder));

        form.reset();
        navigate("/history", { replace: true });
    };



    return (
        <>
            <form
                className={css.form}
                onSubmit={handleSubmit}
            >
                <label className={css.label}>
                    Name:
                    <input
                        className={css.input}
                        type="text"
                        name="name"
                        required
                        placeholder={customerDataLocalStorage.name ? customerDataLocalStorage.name : "Input you Name"}
                        defaultValue={customerDataLocalStorage.name}
                    />
                </label>
                <label className={css.label}>
                    Email:
                    <input
                        className={css.input}
                        type="email"
                        name="email"
                        required
                        placeholder={customerDataLocalStorage.email ? customerDataLocalStorage.email : "Input you Email"}
                        defaultValue={customerDataLocalStorage.email}
                    />
                </label>
                <label className={css.label}>
                    Phone:
                    <input
                        className={css.input}
                        type="text"
                        name="phone"
                        required
                        placeholder={customerDataLocalStorage.phone ? customerDataLocalStorage.phone : "Input you Phone"}
                        defaultValue={customerDataLocalStorage.phone}
                    />
                </label>
                <label className={css.label}>
                    Address:
                    <input
                        className={css.input}
                        type="text"
                        name="address"
                        required
                        placeholder={customerDataLocalStorage.address ? customerDataLocalStorage.address : "Input you Address"}
                        defaultValue={customerDataLocalStorage.address}
                    />
                </label>
                <button
                    className={
                        `${allChoicePizzasLocalStorage
                            ?
                            `${css.submitButtonForm}`
                            :
                            `${css.submitButtonForm} ${css.submitButtonFormOpacity}`
                        }
                        `
                    }
                    type="submit"
                    disabled={!allChoicePizzasLocalStorage}
                >
                    Submit
                </button>
            </form>
        </>
    );
};
