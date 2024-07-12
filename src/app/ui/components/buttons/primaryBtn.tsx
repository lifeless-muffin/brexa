"use client"
import { useCart } from '@/app/context/CartContext'
import React from 'react'

export default function PrimaryBtn({text} : {text: string}) {

	const {addToCart} = useCart();

	const clickHandler = async () => {
		"use server"

	}

	return (
		<button onClick={clickHandler} className='w-full h-fit px-6 py-3 bg-dark-secondary'>
			<span>{text}</span>
		</button>
	)
}
