



import css from './CustomerDataForm.module.css';




export const CustomerDataForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const customerData = {
            name: form.elements.name.value,
            email: form.elements.email.value,
            phone: form.elements.phone.value,
            address: form.elements.address.value,
        }
        console.log("CustomerDataForm-->customerData:", customerData); //!
        form.reset();
    };

    return (
        <>
            <form
                className={css.form}
                onSubmit={handleSubmit}
            // autoComplete="off"
            >
                <label className={css.label}>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label className={css.label}>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label className={css.label}>
                    Phone:
                    <input type="text" name="phone" />
                </label>
                <label className={css.label}>
                    Address:
                    <input type="text" name="address" />
                </label>
                <button className={css.submitButtonForm} type="submit">SUBMIT</button>



            </form>

        </>
    );
};
