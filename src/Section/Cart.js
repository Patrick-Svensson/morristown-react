import React, { useState } from "react";
import "./cart.css";
import image from "../Assets/Images/mandolin-react.jpg";

const Cart = () => {
    return (
        <div className="cart-container">
            <div className="cart__wrapper">
                <div className="cart__heading-wrapper">
                    <h1 className="cart-heading">
                        Morristown
                        <br />
                        Mandolins
                    </h1>
                    <h2>My Cart</h2>
                </div>
                <div className="cart__content-container">
                    <div className="cart__purchase">
                        <h3>
                            Washburn W-307 F-style
                            <br />
                            Vintage Edition
                        </h3>
                        <p>&#36; 1039.00</p>
                        <p>Shipping Fee</p>
                        <p>&nbsp;&nbsp;&nbsp;&#36; 40.00</p>
                        <div className="cart__total-line"></div>
                        <div className="cart__total-line"></div>
                        <p className="cart__total">Total</p>
                        <p className="cart__total">&#36; 1079.00</p>
                    </div>
                    <div className="cart__img-container">
                        <img className="cart__img" src={image} alt="Washburn W-307 F-style Vintage Edition" />
                    </div>
                </div>
                <div className="cart__submit-wrapper">
                    <div className="cart__terms">
                        <div className="cart__terms-accept">
                            <input type="checkbox" id="cartTerms" onClick="checkoutBtnActive()" name="terms" />
                            <label className="cart__checkbox-label" for="terms">
                                I ACCEPT TERMS
                            </label>
                        </div>
                        <button className="cart__btn cartTermsBtn">READ TERMS</button>
                    </div>
                    <div className="cart__btn-checkout-container">
                        <button className="cart__btn cartCheckoutBtn">TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
