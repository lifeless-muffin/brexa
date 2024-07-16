"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext({});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        setCart(parsedCart);
        console.log("Loaded cart from localStorage:", parsedCart);
      } catch (error) {
        console.error("Error parsing stored cart:", error);
      }
    }
  }, []);

  useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
		console.log("Cart updated in localStorage:", cart);
  }, [cart]);

  const addToCart = (product: any) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, {...product, quantity: 1}];
      console.log("Adding product to cart:", product);
      return updatedCart;
    });
  };

	const removeFromCart = (productId: any) => {
		setCart((prevCart) => {
			const updatedCart = prevCart.filter(product => product.id !== productId);
			console.log("Removing product from cart: ", productId)
			return updatedCart
		});
	};

	const updateCartItem = (productId: any, updatedProduct: any) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map(product =>
        product.id === productId ? { ...product, ...updatedProduct } : product
      );
      console.log("Updating product in cart:", productId, updatedProduct);
      return updatedCart;
    });
  };


	const addItemToCart = (productDetails: any) => {
		if (cart.some(item => item.id === productDetails.id)) {
			console.log("cart includes product")
			setCart((prevCart) => {
				const updatedCart = prevCart.map(product =>
					product.id === productDetails.id ? { ...product, quantity: product.quantity + 1 } : product
				);
				console.log("Updating product in cart:", productDetails.id, updatedCart);
				return updatedCart;
			});
		} else {
			console.log("cart doesn't include product")
			addToCart(productDetails)
		}
	}

	const removeItemFromCart = (productId: number) => {
		if (cart.some(item => item.id === productId && item.quantity > 1)) {
			console.log('cart includes product')
			setCart((prevCart) => {
				const updatedCart = prevCart.map(product =>
					product.id === productId ? { ...product, quantity: product.quantity - 1 } : product
				);
				console.log("Updating product in cart:", productId, updatedCart);
				return updatedCart;
			});
		} else {
			removeFromCart(productId)
		}
	}

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartItem, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};