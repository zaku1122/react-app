import './checkout-header.css'
import './CheckoutPage.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router';

export function CheckoutPage({ cart, products, updateCart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);

    useEffect(() => {
        import('../../starting-code/data/deliveryOptions.js').then(module => {
            setDeliveryOptions(module.deliveryOptions);
        });
    }, []);

    const getProduct = (productId) => {
        return products.find(product => product.id === productId);
    };

    const getDeliveryOption = (optionId) => {
        return deliveryOptions.find(option => option.id === optionId);
    };

    const formatPrice = (priceCents) => {
        return `$${(priceCents / 100).toFixed(2)}`;
    };

    const calculateDeliveryDate = (deliveryOption) => {
        const today = new Date();
        today.setDate(today.getDate() + deliveryOption.deliveryDays);
        return today.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        });
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity === 0) {
            removeFromCart(productId);
            return;
        }

        const newCart = cart.map(item =>
            item.productId === productId
                ? { ...item, quantity: newQuantity }
                : item
        );
        updateCart(newCart);
    };

    const removeFromCart = (productId) => {
        const newCart = cart.filter(item => item.productId !== productId);
        updateCart(newCart);
    };

    const updateDeliveryOption = (productId, deliveryOptionId) => {
        const newCart = cart.map(item =>
            item.productId === productId
                ? { ...item, deliveryOptionId }
                : item
        );
        updateCart(newCart);
    };

    const calculateTotal = () => {
        let itemsTotal = 0;
        let shippingTotal = 0;

        cart.forEach(cartItem => {
            const product = getProduct(cartItem.productId);
            const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);

            if (product) {
                itemsTotal += product.priceCents * cartItem.quantity;
            }
            if (deliveryOption) {
                shippingTotal += deliveryOption.priceCents;
            }
        });

        const tax = (itemsTotal + shippingTotal) * 0.1;
        const orderTotal = itemsTotal + shippingTotal + tax;

        return {
            itemsTotal,
            shippingTotal,
            tax,
            orderTotal
        };
    };

    const totals = calculateTotal();
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <>
            <title>Checkout</title>

            <div className="checkout-header">
                <div className="header-content">
                    <div className="checkout-header-left-section">
                        <Link to="/" className="logo-link">
                            <img className="logo" src="images/logo.png" />
                            <img className="mobile-logo" src="images/mobile-logo.png" />
                        </Link>
                    </div>

                    <div className="checkout-header-middle-section">
                        Checkout (<Link className="return-to-home-link" to="/"> {totalQuantity} items</Link>)
                    </div>

                    <div className="checkout-header-right-section">
                        <img src="images/icons/checkout-lock-icon.png" />
                    </div>
                </div>
            </div>

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <div className="order-summary">
                        {cart.map((cartItem) => {
                            const product = getProduct(cartItem.productId);
                            const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);

                            if (!product || !deliveryOption) return null;

                            return (
                                <div key={cartItem.productId} className="cart-item-container">
                                    <div className="delivery-date">
                                        Delivery date: {calculateDeliveryDate(deliveryOption)}
                                    </div>

                                    <div className="cart-item-details-grid">
                                        <img className="product-image" src={product.image} />

                                        <div className="cart-item-details">
                                            <div className="product-name">
                                                {product.name}
                                            </div>
                                            <div className="product-price">
                                                {formatPrice(product.priceCents)}
                                            </div>
                                            <div className="product-quantity">
                                                <span>
                                                    Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                                                </span>
                                                <span
                                                    className="update-quantity-link link-primary"
                                                    onClick={() => {
                                                        const newQuantity = prompt('Enter new quantity:', cartItem.quantity);
                                                        if (newQuantity !== null) {
                                                            updateQuantity(cartItem.productId, parseInt(newQuantity) || 0);
                                                        }
                                                    }}
                                                >
                                                    Update
                                                </span>
                                                <span
                                                    className="delete-quantity-link link-primary"
                                                    onClick={() => removeFromCart(cartItem.productId)}
                                                >
                                                    Delete
                                                </span>
                                            </div>
                                        </div>

                                        <div className="delivery-options">
                                            <div className="delivery-options-title">
                                                Choose a delivery option:
                                            </div>
                                            {deliveryOptions.map((option) => (
                                                <div key={option.id} className="delivery-option">
                                                    <input
                                                        type="radio"
                                                        checked={cartItem.deliveryOptionId === option.id}
                                                        className="delivery-option-input"
                                                        name={`delivery-option-${cartItem.productId}`}
                                                        onChange={() => updateDeliveryOption(cartItem.productId, option.id)}
                                                    />
                                                    <div>
                                                        <div className="delivery-option-date">
                                                            {calculateDeliveryDate(option)}
                                                        </div>
                                                        <div className="delivery-option-price">
                                                            {option.priceCents === 0 ? 'FREE Shipping' : `${formatPrice(option.priceCents)} - Shipping`}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="payment-summary">
                        <div className="payment-summary-title">
                            Payment Summary
                        </div>

                        <div className="payment-summary-row">
                            <div>Items ({totalQuantity}):</div>
                            <div className="payment-summary-money">{formatPrice(totals.itemsTotal)}</div>
                        </div>

                        <div className="payment-summary-row">
                            <div>Shipping &amp; handling:</div>
                            <div className="payment-summary-money">{formatPrice(totals.shippingTotal)}</div>
                        </div>

                        <div className="payment-summary-row subtotal-row">
                            <div>Total before tax:</div>
                            <div className="payment-summary-money">{formatPrice(totals.itemsTotal + totals.shippingTotal)}</div>
                        </div>

                        <div className="payment-summary-row">
                            <div>Estimated tax (10%):</div>
                            <div className="payment-summary-money">{formatPrice(totals.tax)}</div>
                        </div>

                        <div className="payment-summary-row total-row">
                            <div>Order total:</div>
                            <div className="payment-summary-money">{formatPrice(totals.orderTotal)}</div>
                        </div>

                        <button className="place-order-button button-primary">
                            Place your order
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}