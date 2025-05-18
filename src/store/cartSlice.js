import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalPrice: 0,
    totalItems: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find(i => i.id === item.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }

            state.totalItems += 1;
            state.totalPrice += item.price;
        },

        removeFromCart: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.items.find(i => i.id === itemId);

            if (existingItem) {
                state.totalItems -= existingItem.quantity;
                state.totalPrice -= existingItem.price * existingItem.quantity;

                state.items = state.items.filter(i => i.id !== itemId);
            }
        },
        increaseQty: (state, action) => {
            const item = state.items.find((i) => i.id === action.payload);
            if (item) {
                item.quantity += 1;
                state.totalItems += 1;
                state.totalPrice += item.price;
            }
        },
        decreaseQty: (state, action) => {
            const item = state.items.find((i) => i.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                state.totalItems -= 1;
                state.totalPrice -= item.price;
            }
        },




        clearCart: (state) => {
            state.items = [];
            state.totalItems = 0;
            state.totalPrice = 0;
        },
    },
});

export const { addToCart, removeFromCart, decreaseQty, clearCart, increaseQty } = cartSlice.actions;

export default cartSlice.reducer;
