# Ecommerce Project

A modern, fully-functional ecommerce web application built with React and Vite. Features a complete shopping experience including product browsing, cart management, checkout with dynamic pricing, order history, and package tracking.

## 🎯 Overview

This project demonstrates a production-ready ecommerce platform with:
- **Dynamic Product Catalog** - Browse all products with ratings and detailed information
- **Shopping Cart** - Add/remove items with quantity management and persistent storage
- **Checkout System** - Multi-step checkout with delivery options and real-time calculations
- **Order Management** - View order history and re-purchase items
- **Package Tracking** - Track delivery status of orders
- **Responsive Design** - Mobile-friendly interface that works on all devices

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/zaku1122/react-app.git
cd react-app/ecommerce-project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 📁 Project Structure

```
ecommerce-project/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Navigation header with cart
│   │   └── header.css
│   │
│   ├── pages/
│   │   ├── HomePage.jsx            # Product listing & shopping
│   │   ├── HomePage.css
│   │   ├── CheckoutPage.jsx        # Checkout & order review
│   │   ├── checkoutPage.css
│   │   ├── checkout-header.css
│   │   ├── OrdersPage.jsx          # Order history
│   │   ├── OrdersPage.css
│   │   ├── TrackingPage.jsx        # Package tracking
│   │   └── TrackingPage.css
│   │
│   ├── App.jsx                     # Main app with routing
│   ├── App.css
│   ├── main.jsx                    # React entry point
│   ├── index.css                   # Global styles
│
├── starting-code/
│   ├── data/
│   │   ├── products.js             # Product catalog
│   │   ├── deliveryOptions.js      # Shipping options
│   │   └── orders.js               # Sample order data
│   └── backend/
│       └── *.json                  # JSON data files
│
├── public/
│   └── images/
│       ├── icons/                  # UI icons
│       ├── products/               # Product images
│       ├── ratings/                # Star rating images
│       └── *.png                   # Logo files
│
├── package.json
└── vite.config.js
```

## ✨ Features

### 🏠 Home Page
- **Product Grid** - Displays all 40+ products with images and ratings
- **Add to Cart** - Select quantity and add items to shopping cart
- **Real-time Feedback** - Visual confirmation when items are added
- **Product Details** - Display name, price, ratings, and review count

**Key Technologies:** Dynamic data loading, state management, responsive grid layout

### 🛒 Shopping Cart
- **Persistent Storage** - Cart data saved to localStorage
- **Automatic Sync** - Cart updates across all pages
- **Quantity Management** - Adjust item quantities or remove items
- **Real-time Updates** - All calculations update instantly

**Key Technologies:** React hooks, localStorage API, state management

### 💳 Checkout Page
- **Order Review** - See all items before purchase
- **Delivery Options** - Choose from 3 shipping speeds:
  - Free shipping (7 days)
  - Standard (3 days, $4.99)
  - Express (1 day, $9.99)
- **Dynamic Pricing** - Real-time calculation of:
  - Item subtotal
  - Shipping cost
  - Tax (10%)
  - Order total
- **Quantity Updates** - Modify quantities or remove items during checkout
- **Delivery Date Calculation** - Automatic date calculation based on delivery option

**Key Technologies:** Complex state management, date calculations, dynamic pricing logic

### 📋 Orders Page
- **Order History** - View all previous orders with details
- **Order Information**:
  - Order ID and placement date
  - Total cost
  - Estimated delivery date
  - Items in order with quantities
- **Quick Re-order** - Add previous items back to cart with one click
- **Track Package** - Link to tracking page for each order

**Key Technologies:** Data mapping, conditional rendering, date formatting

### 📍 Tracking Page
- **Order Tracking** - Visual representation of shipping progress
- **Progress Indicator** - Shows current shipping status (Preparing/Shipped/Delivered)
- **Delivery Information** - Expected delivery date and package details
- **Product Details** - Display item being tracked

**Key Technologies:** Header reusability, progress UI components

## 🔧 Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.1.0 | UI framework |
| React Router | 7.13.1 | Client-side routing |
| Vite | 6.3.5 | Build tool & dev server |
| CSS3 | Latest | Styling with vendor prefixes |
| JavaScript ES6+ | Latest | Application logic |

## 📊 Data Models

### Product
```javascript
{
  id: string,                           // Unique identifier
  image: string,                        // Product image path
  name: string,                         // Product name
  rating: { stars: number, count: number }, // Rating info
  priceCents: number,                   // Price in cents
  keywords: string[]                    // Search keywords
}
```

### Cart Item
```javascript
{
  productId: string,                    // Reference to product
  quantity: number,                     // Quantity ordered
  deliveryOptionId: string              // Selected delivery option
}
```

### Delivery Option
```javascript
{
  id: string,                           // Option identifier
  deliveryDays: number,                 // Days to deliver
  priceCents: number                    // Cost in cents
}
```

### Order
```javascript
{
  id: string,                           // Order ID
  orderTimeMs: number,                  // Timestamp
  totalCostCents: number,               // Total in cents
  products: [                           // Items ordered
    {
      productId: string,
      quantity: number,
      estimatedDeliveryTimeMs: number
    }
  ]
}
```

## 🎨 Styling

The project uses modern CSS3 with:
- **Flexbox & Grid** - Responsive layouts
- **CSS Variables** - Easy theme customization
- **Vendor Prefixes** - Cross-browser compatibility
- **Mobile-First** - Responsive design approach
- **Media Queries** - Optimized for all screen sizes

Color Scheme:
- Primary: Green (#198754)
- Neutral: White/Gray (#fff, #f0f0f0)
- Accents: Blue links, warning colors

## 🔄 State Management

The app uses React hooks for state management:
- **useState** - Local component state
- **useEffect** - Side effects and data loading
- **useContext** - (Can be expanded for global state)
- **localStorage** - Persistent cart storage

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Connect dist/ folder to Netlify
```

### Deploy to GitHub Pages
Add to `vite.config.js`:
```javascript
export default {
  base: '/react-app/',
  // ... other config
}
```

## 🔐 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Code Quality

- **ESLint** - Code linting and style enforcement
- **No Unused Variables** - All code is clean and efficient
- **Consistent Formatting** - Uniform code style throughout
- **Component Structure** - Well-organized, reusable components
- **Error Handling** - Graceful error handling throughout

## 🎓 Learning Resources

This project demonstrates:
- React component composition
- React hooks (useState, useEffect)
- Client-side routing with React Router
- State management patterns
- Responsive CSS design
- Local storage usage
- Array and object manipulation
- Date/time handling
- Price calculations
- Dynamic rendering

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 📞 Support

For issues or questions, please open a GitHub issue on the [repository](https://github.com/zaku1122/react-app).

## 🎉 Features Roadmap

Future enhancements:
- [ ] Backend API integration
- [ ] User authentication & accounts
- [ ] Payment gateway integration
- [ ] Product search & filtering
- [ ] Advanced sorting options
- [ ] Product reviews & ratings
- [ ] Wishlist functionality
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Email notifications
- [ ] Order status updates
- [ ] Coupon/discount codes
- [ ] Multi-language support
- [ ] Dark mode theme

## 📸 Screenshots

### Home Page
Browse through 40+ products with detailed information and ratings.

### Checkout
Complete checkout experience with multiple delivery options.

### Order History
View and manage all your previous orders.

### Tracking
Real-time order tracking with progress indicators.

---

**Built with ❤️ using React and Vite**

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
