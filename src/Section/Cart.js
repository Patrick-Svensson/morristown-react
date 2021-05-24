import React, { useState } from "react";
import "./cart.css";
import image from "../Assets/Images/mandolin-react.jpg";

const Cart = () => {
    /* Activate checkout button when checkbox is checked. */
    const [checked, setChecked] = useState(false);
    const activateCheckOutBtn = () => setChecked(!checked);
    /* Toggle terms modal. */
    const [termsClicked, setTermsClicked] = useState(false);

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
                            <input type="checkbox" id="cartTerms" onClick={activateCheckOutBtn} />
                            <label className="cart__checkbox-label">I ACCEPT TERMS</label>
                        </div>
                        <button className="cart__btn cartTermsBtn" onClick={() => setTermsClicked(true)}>
                            READ TERMS
                        </button>
                    </div>
                    <div className="cart__btn-checkout-container">
                        <button className={checked ? "cart__btn cartCheckoutBtn Active" : "cart__btn cartCheckoutBtn"}>
                            TO CHECKOUT
                        </button>
                    </div>
                </div>
            </div>
            {/* ***** Modal ***** */}
            <div
                className={termsClicked ? "modal-container ActivateModalContainer" : "modal-container"}
                onClick={() => setTermsClicked(false)}
            >
                <div className="modal">
                    <div className="modal__X-wrapper" onClick={() => setTermsClicked(false)}>
                        <span className="modal__X">&#215;</span>
                    </div>
                    <h2 className="modal__heading">Terms and Conditions</h2>
                    <div className="modal__content">
                        <p className="modal__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus arcu ut pulvinar dignissim.
                            Praesent maximus, mi in tristique aliquet, urna arcu semper purus, ut ornare nunc ipsum ac ex. Duis ut
                            molestie lorem. Donec a lectus quis purus fermentum pulvinar. Sed nec ex tellus. Aenean in sem
                            vulputate, malesuada ex eget, tempus nisl. Ut sed sapien turpis. In hac habitasse platea dictumst. Sed
                            vehicula porta augue, at ornare nulla congue eu. Integer mattis ut enim sed elementum. Etiam
                            condimentum aliquam egestas.
                        </p>
                        <br />
                        <p className="modal__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus arcu ut pulvinar dignissim.
                            Praesent maximus, mi in tristique aliquet, urna arcu semper purus, ut ornare nunc ipsum ac ex. Duis ut
                            molestie lorem. Donec a lectus quis purus fermentum pulvinar. Sed nec ex tellus. Aenean in sem
                            vulputate, malesuada ex eget, tempus nisl. Ut sed sapien turpis. In hac habitasse platea dictumst. Sed
                            vehicula porta augue, at ornare nulla congue eu. Integer mattis ut enim sed elementum. Etiam
                            condimentum aliquam egestas. Phasellus quis tellus fringilla mi interdum consectetur. Phasellus tellus
                            leo, dignissim ac fringilla quis, consectetur et erat. Donec porttitor metus vel tortor rutrum
                            faucibus. Cras nec viverra ante. Fusce porttitor semper lorem, placerat rutrum orci lacinia vel. In
                            congue, metus vel congue luctus, elit neque varius dolor, in pulvinar urna lorem ac augue. Suspendisse
                            potenti. Praesent aliquet molestie lorem, vitae convallis justo mollis sit amet. Duis ornare leo nec
                            tellus bibendum, volutpat ullamcorper purus mattis. Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis egestas.
                        </p>
                        <br />
                        <p className="modal__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus arcu ut pulvinar dignissim.
                            Praesent maximus, mi in tristique aliquet, urna arcu semper purus, ut ornare nunc ipsum ac ex. Duis ut
                            molestie lorem. Donec a lectus quis purus fermentum pulvinar. Sed nec ex tellus. Aenean in sem
                            vulputate, malesuada ex eget, tempus nisl. Ut sed sapien turpis. In hac habitasse platea dictumst. Sed
                            vehicula porta augue, at ornare nulla congue eu. Integer mattis ut enim sed elementum. Etiam
                            condimentum aliquam egestas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
