import {
    useState,
    // useEffect  //!----- Преобразование defaultImage в Base64
} from 'react';

import pictureDefault from "../../images/free-icon-pizza-512-7467230.png"; //!!! 
//!----- Преобразование defaultImage в Base64
// import pictureDefault1 from "../../images/PizzasImages/05-05.PizzaHouse_Americano.webp"; //!-----------------------

import pizzaMarketsJson from "db/pizzaMarketsMongoDB.json"; //!!!

import { Modal} from 'components/Modal/Modal';

import css from "./HomePizzasList.module.css";



export const HomePizzasList = ({ allPizzas, addPizzaToCart, shopIndex }) => {
    
    // //!----------------------------- Преобразование defaultImage в Base64: ----------------------------
    // const [defaultImageBase64, setDefaultImageBase64] = useState('');
    
    // useEffect(() => {
    //     const loadImage = async () => {
    //         try {
    //             const response = await fetch(pictureDefault1);
    //             // const response = await fetch("../../images/PizzasImages/01-01.PizzaMexico_VremenaGoda.png"); //! так не работает
    //             const blob = await response.blob();
    //             const reader = new FileReader();
    //             reader.onloadend = () => {
    //                 setDefaultImageBase64(reader.result);
    //             };
    //             reader.readAsDataURL(blob);
    //         } catch (error) {
    //             console.log('Error loading image:', error);
    //         }
    //     };
    //     loadImage();
    // }, []);

    // const jsonFile = {
    //     imageDef: defaultImageBase64
    // };
    // console.log("jsonFile.imageDef:", jsonFile.imageDef); //!
    // //!__________________________ Преобразование defaultImage в Base64: __________________________

    const [pizzaURL, setPizzaURL] = useState("");
    const [showModal, setShowModal] = useState(false);
    const toggleModal = (index) => {
        setShowModal(!showModal);
    }

    const handleBackdropClick = event => {
        if (event.target.src) {
            toggleModal();
            setPizzaURL(event.target.src);
        } else return;
    };

    return (
        <ul className={css.list}>
            {allPizzas.map(({ pizza, picture = pictureDefault, price }, index) => {
                const defaultImageBase64Json = pizzaMarketsJson[shopIndex].pizzas[index].defaultImage
                return <li
                            className={css.listItem}
                        key={pizza}
                        onClick={handleBackdropClick}
                        >
                            <img
                                className={css.imagePizza}
                                alt={"Pizza"}
                                src={picture || defaultImageBase64Json}
                                width="100%"
                            />
                            <p className={css.namePizza}
                            >
                                "{pizza}"
                                <span className={css.pricePizza}>
                                    {price} грн.
                                </span>
                            </p>
                            <button
                                className={css.selectPizzaButton}
                                type="button"
                                onClick={() => addPizzaToCart(allPizzas[index], index)}
                            >
                                add to Cart
                            </button>
                        </li>
            })}
            {showModal && (
                <Modal
                    onClose={toggleModal}
                    bgColor={"HomePageBgColor"}
                >
                    <img
                        alt=""
                        src={pizzaURL}
                        width="100%"
                    />
                </Modal>
            )}
        </ul>
    );
};
