import { useNavigate } from "react-router-dom";

import css from './NotFoundPage.module.css';


export const NotFoundPage = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/", { replace: true });
    }



    return (
        <main className={css.containerNotFoundPage}>
            <b className={css.textB}>404</b>
            <p className={css.text}>Sorry, we couldn't find that page :(</p>
            <button
                className={css.buttonGoToHome}
                onClick={handleSubmit}
            >
                Go to HOME
            </button>
        </main>
    );
};