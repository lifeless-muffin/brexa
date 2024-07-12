// utils/cart.js
const getCart = () => {
  if (typeof window !== "undefined") {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }
  return [];
};

const saveCart = (cart: {}) => {
  if (typeof window !== "undefined") {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
};


/* 
	useEffect(() => {
    // Initialize cart if not present
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }, []);
*/

/*

const AddToCartButton = ({ product }) => {
  const handleAddToCart = () => {
    const cart = getCart();
    const updatedCart = [...cart, product];
    saveCart(updatedCart);
  };
}

*/