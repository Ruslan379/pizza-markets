import imagePizza from "images/monopizza_pica-dyabola.jpg";


import css from "./ShoppingCartOrder.module.css";


//------------------------------------------------------
export const ShoppingCartOrder = () => {
    //! Чтение массива объектов с заказанными пиццами --> allChoicePizzasLocalStorage
    const allChoicePizzasLocalStorage = JSON.parse(localStorage.getItem("allChoicePizzas"));
    console.log("ShoppingCartOrder-->allChoicePizzasLocalStorage:", allChoicePizzasLocalStorage);

    // const totalPrice = allChoicePizzasLocalStorage.reduce((total, item) => {
    //     total = total + item.price * item.quantity;
    //     return total;
    // }, 0);

    // console.log("ShoppingCartOrder-->totalPrice:", totalPrice);


    return (
        <>
            {allChoicePizzasLocalStorage && (
                <ul className={css.list}>
                    {allChoicePizzasLocalStorage.map((item, index) => (
                        <li
                            className={css.listItem}
                            key={item.pizza}
                        >
                            <img
                                className={css.imagePizza}
                                alt={imagePizza}
                                src={imagePizza}
                                width="50%"
                            />
                            <div className={css.cardContents}>
                                <p className={css.namePizza}>"{item.pizza}"</p>
                                <p className={css.pricePizza}>{item.price * item.quantity} грн.</p>


                                <form
                                    className={css.Form}
                                // onSubmit={handleSubmit}
                                >
                                    <label
                                        className={css.FormLabel}
                                    >
                                        {/* Balance:&nbsp;&nbsp;&nbsp; */}
                                        {/* {isRefreshing ? "Please wait..." : "Balance"} */}
                                        <input
                                            className={css.FormInput}
                                            // id="inputName"
                                            type="text"
                                            // name="balance"
                                            name="quantity"
                                            // disabled={NotNewUser} //! пока не блокировать
                                            // required
                                            value={item.quantity}
                                        // readonly
                                        // defaultValue={balanceNew} //! тормозит
                                        // placeholder={balanceNew}
                                        // defaultValue={(balanceNew) ? balanceNew : balanceAuth}
                                        // onChange={handleSubmit}
                                        />
                                    </label>
                                </form>


                                <button
                                    className={css.increaseButton}
                                    type="button"
                                // onClick={() => addPizzaToCard(allChoicePizzasLocalStorage[index])}
                                >
                                    Increase ^
                                </button>
                                <button
                                    className={css.decreaseButton}
                                    type="button"
                                // onClick={() => addPizzaToCard(allChoicePizzasLocalStorage[index])}
                                >
                                    Decrease .
                                </button>
                            </div>


                        </li>
                    ))}
                </ul>
            )}
        </>

    );
};
