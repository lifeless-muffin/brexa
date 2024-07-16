"use client"
import { useCart } from '@/app/context/CartContext'
import React from 'react'

export default function AddToCart({product} : {product: any}) {

	const {cart, addToCart, addItemToCart}: any = useCart();

	const clickHandler = () => {
		addItemToCart(product)
	}

	return (
		<button onClick={clickHandler} className='w-full h-fit px-6 py-3 bg-dark-secondary'>
			<span>Add to Cart</span>
		</button>
	)
}
