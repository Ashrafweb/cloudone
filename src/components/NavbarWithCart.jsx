import React, { useState } from 'react';
import Navbar from './Navbar';
import CartSidebar from './CartSidebar';

const NavbarWithCart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default NavbarWithCart;
