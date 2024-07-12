import React from 'react'

export default function PrimaryBtn({text} : {text: string}) {

	const clickHandler = () => {

	}

	return (
		<button className='w-full h-fit px-6 py-3 bg-dark-secondary'>
			<span>{text}</span>
		</button>
	)
}
