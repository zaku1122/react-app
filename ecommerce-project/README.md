# Ecommerce Project

A modern ecommerce web application built with React and Vite, featuring a complete shopping experience with products, cart management, checkout, and order tracking.

## Features

- **Home Page** - Browse all available products with ratings and prices
- **Shopping Cart** - Add/remove products and manage quantities
- **Checkout Page** - Review orders with dynamic delivery options and price calculations
- **Orders Page** - View order history and re-order products
- **Product Tracking** - Track delivery status of orders
- **Responsive Design** - Mobile-friendly interface
- **Local Storage** - Cart data persists between sessions

## Tech Stack

- **React** 19.1.0
- **Vite** 6.3.5
- **React Router** 7.13.1
- **CSS3** with vendor prefixes for broad browser support

## Project Structure

```
src/
├── pages/
│   ├── HomePage.jsx           # Product listing page
│   ├── CheckoutPage.jsx       # Checkout and order review
│   ├── OrdersPage.jsx         # Order history
│   └── TrackingPage.jsx       # Package tracking
├── components/
│   ├── Header.jsx             # Navigation header
│   └── header.css
├── App.jsx                    # Main app component with routing
├── main.jsx                   # React entry point
├── index.css                  # Global styles
└── App.css                    # App styles

starting-code/
├── data/
│   ├── products.js            # Product data
│   ├── deliveryOptions.js     # Delivery options
│   └── orders.js              # Order history data
└── backend/
    ├── products.json
    ├── deliveryOptions.json
    ├── orders.json
    └── cart.json

public/
└── images/                    # Product images, icons, ratings
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open `http://localhost:5173` in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features Implemented

### Home Page
- Dynamic product grid loaded from data
- Add to cart with quantity selector
- Visual feedback for added items
- Responsive product cards

### Shopping Cart
- Persistent cart using localStorage
- Real-time cart updates
- Quantity management

### Checkout
- Dynamic delivery date calculation
- Multiple delivery options with pricing
- Real-time total calculations including tax (10%)
- Update/delete cart items
- Order summary

### Orders
- View all previous orders
- Order details with dates and totals
- Quick "Add to Cart" from previous orders
- Track package functionality

## Data Structure

### Product
```javascript
{
  id: string,
  image: string,
  name: string,
  rating: { stars: number, count: number },
  priceCents: number,
  keywords: string[]
}
```

### Cart Item
```javascript
{
  productId: string,
  quantity: number,
  deliveryOptionId: string
}
```

### Delivery Option
```javascript
{
  id: string,
  deliveryDays: number,
  priceCents: number
}
```

## Future Enhancements

- Backend API integration
- User authentication
- Payment processing
- Search and filtering
- Product reviews
- Wishlist functionality
- Inventory management

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
