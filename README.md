# 🛒 React Shopping Cart App

A fully responsive shopping cart application built with **React**, **Tailwind CSS**, and **Redux Toolkit**. It integrates with the [FakeStoreAPI](https://fakestoreapi.com/) to fetch product data, allows users to add items to their cart, and persists cart data across sessions using `localStorage`.

---

## ✨ Features

- 📦 Product listing fetched using `createAsyncThunk` (Redux Toolkit)
- 🛍️ Add, remove, and update cart items with Redux
- 🗂️ Persistent cart with `localStorage` (even after refresh)
- 🧭 Routing with `react-router-dom`
- 📱 Fully responsive layout with **Tailwind CSS**
- 🖼️ Lazy loading product images
- 🔄 Pagination support
- 🔍 Accessible components with semantic HTML
- 🧠 Optimized for performance and user experience

---

## 🛠️ Tech Stack

- **React** (Functional Components + Hooks)
- **Redux Toolkit** (with `createSlice`, `createAsyncThunk`)
- **Tailwind CSS**
- **React Router v6**
- **FakeStoreAPI**
- **LocalStorage** (for cart persistence)

---

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/react-shopping-cart.git
cd react-shopping-cart
npm install 
npm run dev
