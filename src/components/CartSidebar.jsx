import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { removeFromCart, increaseQty, decreaseQty, clearCart } from '../store/cartSlice';

const CartSidebar = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);

  return (
    <>
      <aside
        className={`fixed top-0 right-0 w-80 sm:w-96 h-full bg-white shadow-lg z-50 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out flex flex-col`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold text-gray-800">Your Cart</h2>
          <button onClick={onClose} aria-label="Close cart">
            <X className="w-6 h-6 text-gray-600 hover:text-red-500" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4">
          {items.length === 0 ? (
            <p className="text-gray-500 mt-10 text-center">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-2"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-14 h-14 object-contain mr-2"
                />
                <div className="flex-1 space-y-1 text-sm pr-2">
                  <p className="font-medium text-gray-800 truncate text-wrap">{item.title}</p>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() => dispatch(decreaseQty(item.id))}
                      className="px-1 text-gray-600 hover:text-red-600"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() => dispatch(increaseQty(item.id))}
                      className="px-1 text-gray-600 hover:text-green-600"
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-xs text-red-500 hover:underline mt-1"
                  >
                    <Trash2 />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t px-4 py-3">
          <div className="flex justify-between text-lg font-semibold mb-3">
            <span>Total:</span>
            <span>${Number(totalPrice).toFixed(2)}</span>
          </div>
          <button
            className="w-full bg-gray-900 text-white hover:text-black py-3 cursor-pointer hover:bg-white border rounded-3xl transition text-base font-medium"
          >
            Proceed to Checkout
          </button>
          {/* Clear Cart Button */}
          <button
            className="w-full bg-red-500 text-white hover:bg-red-600 py-2 mt-1 rounded-3xl transition text-base font-medium"
            onClick={() => dispatch(clearCart())}
            disabled={items.length === 0}
          >
            Clear Cart
          </button>
        </div>
      </aside>

 

    </>
  );
};

export default CartSidebar;
