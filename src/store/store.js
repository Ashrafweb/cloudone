import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import cartReducer from './cartSlice';

const loadCartState = () => {
    try {
        const serializedState = localStorage.getItem('cart');
        return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (e) {
        console.error('Could not load cart from localStorage:', e);
        return undefined;
    }
};


const saveCartState = (state) => {
    try {
        const serializedState = JSON.stringify(state.cart);
        localStorage.setItem('cart', serializedState);
    } catch (e) {
        console.error('Could not save cart to localStorage:', e);
    }
};

const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
    },
    preloadedState: {
        cart: loadCartState(),
    },
});
store.subscribe(() => {
    saveCartState(store.getState());
});

export default store;
