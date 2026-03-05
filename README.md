# React App Projects

A collection of React projects demonstrating various web development concepts and patterns.

## Projects

### 📱 [Ecommerce Project](./ecommerce-project)

A complete, production-ready ecommerce web application built with React and Vite.

**Features:**
- 🛍️ **Product Catalog** - Browse 40+ products with ratings and detailed information
- 🛒 **Shopping Cart** - Add/remove items with persistent localStorage storage
- 💳 **Checkout System** - Multi-step checkout with 3 delivery options
- 📊 **Dynamic Pricing** - Real-time calculations including tax (10%)
- 📋 **Order Management** - View order history and re-order items
- 📍 **Package Tracking** - Track delivery status of orders
- 📱 **Responsive Design** - Works perfectly on desktop and mobile

**Tech Stack:**
- React 19.1.0
- Vite 6.3.5
- React Router 7.13.1
- CSS3

**Quick Start:**
```bash
cd ecommerce-project
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

**Available Scripts:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

📖 [Read Full Documentation](./ecommerce-project/README.md)

---

### 💬 [Chatbot Project](./chatbot-project)

A React-based chatbot application.

---

### 📚 [React Basics](./react-basics)

Foundational React learning materials and examples.

---

## Getting Started

### Prerequisites
- Node.js 16 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/zaku1122/react-app.git
cd react-app
```

2. Navigate to the project you want to work with:
```bash
cd ecommerce-project
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

## Project Structure

```
react-app/
├── ecommerce-project/          # Main ecommerce application
│   ├── src/                    # React source files
│   ├── public/                 # Static assets (images, icons)
│   ├── starting-code/          # Reference data and code
│   ├── package.json
│   └── README.md               # Project documentation
│
├── chatbot-project/            # Chatbot application
│   └── ...
│
├── react-basics/               # Learning resources
│   └── ...
│
└── README.md                   # This file
```

## Technology Stack

| Project | Tech Stack |
|---------|-----------|
| Ecommerce | React, Vite, React Router, CSS3 |
| Chatbot | React, Vite, CSS3 |
| React Basics | HTML, CSS, JavaScript, React |

## Features Overview

### Ecommerce Project

#### Home Page
- Dynamic product grid with 40+ products
- Product cards showing image, name, rating, and price
- Add to cart with quantity selector
- Real-time feedback when items are added

#### Shopping Cart
- View all items in cart
- Modify quantities
- Remove items
- Cart persists using localStorage

#### Checkout
- Order review page
- Multiple delivery options:
  - Free Shipping (7 days)
  - Standard Shipping (3 days, $4.99)
  - Express Shipping (1 day, $9.99)
- Real-time price calculations:
  - Item subtotal
  - Shipping cost
  - 10% tax
  - Order total
- Automatic delivery date calculation

#### Orders
- View all previous orders
- Order details with dates and totals
- Quick re-order feature
- Link to track packages

#### Tracking
- Order tracking with progress indicator
- Visual shipping status (Preparing → Shipped → Delivered)
- Delivery estimates

## Browser Support

All projects support:
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Optimized Builds** - Vite ensures fast production builds
- **Code Splitting** - React Router enables automatic code splitting
- **Lazy Loading** - Components load as needed
- **Responsive Images** - Optimized image loading

## Contributing

Feel free to fork this repository and submit pull requests for improvements.

## License

MIT License - feel free to use these projects for personal or commercial purposes.

## Support

For issues, questions, or suggestions, please open a GitHub issue.

---

**Built with ❤️ using React and Vite**

Happy coding! 🚀