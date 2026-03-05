import { Header } from '../components/Header'
import './OrdersPage.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';

export function OrdersPage({ cart, products, updateCart }) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        import('../../starting-code/data/orders.js').then(module => {
            setOrders(module.orders);
        });
    }, []);

    const getProduct = (productId) => {
        return products.find(product => product.id === productId);
    };

    const formatPrice = (priceCents) => {
        return `$${(priceCents / 100).toFixed(2)}`;
    };

    const formatDate = (timestampMs) => {
        return new Date(timestampMs).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric'
        });
    };

    const addToCart = (productId, quantity) => {
        const newCart = [...cart];
        const existingItem = newCart.find(item => item.productId === productId);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            newCart.push({
                productId,
                quantity,
                deliveryOptionId: '1'
            });
        }

        updateCart(newCart);
    };

    return (
        <>
            <Header cart={cart} />
            <title>Orders</title>

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <div className="orders-grid">
                    {orders.map((order) => (
                        <div key={order.id} className="order-container">
                            <div className="order-header">
                                <div className="order-header-left-section">
                                    <div className="order-date">
                                        <div className="order-header-label">Order Placed:</div>
                                        <div>{formatDate(order.orderTimeMs)}</div>
                                    </div>
                                    <div className="order-total">
                                        <div className="order-header-label">Total:</div>
                                        <div>{formatPrice(order.totalCostCents)}</div>
                                    </div>
                                </div>

                                <div className="order-header-right-section">
                                    <div className="order-header-label">Order ID:</div>
                                    <div>{order.id}</div>
                                </div>
                            </div>

                            <div className="order-details-grid">
                                {order.products.map((orderProduct) => {
                                    const product = getProduct(orderProduct.productId);
                                    if (!product) return null;

                                    return (
                                        <>
                                            <div key={orderProduct.productId} className="product-image-container">
                                                <img src={product.image} />
                                            </div>

                                            <div className="product-details">
                                                <div className="product-name">
                                                    {product.name}
                                                </div>
                                                <div className="product-delivery-date">
                                                    Arriving on: {formatDate(orderProduct.estimatedDeliveryTimeMs)}
                                                </div>
                                                <div className="product-quantity">
                                                    Quantity: {orderProduct.quantity}
                                                </div>
                                                <button
                                                    className="buy-again-button button-primary"
                                                    onClick={() => addToCart(orderProduct.productId, orderProduct.quantity)}
                                                >
                                                    <img className="buy-again-icon" src="images/icons/buy-again.png" />
                                                    <span className="buy-again-message">Add to Cart</span>
                                                </button>
                                            </div>

                                            <div className="product-actions">
                                                <Link to="/tracking">
                                                    <button className="track-package-button button-secondary">
                                                        Track package
                                                    </button>
                                                </Link>
                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}