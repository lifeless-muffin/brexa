import React from 'react'

export default function OutlinedBtn({text} : {text: string}) {

	const clickHandler = () => {

	}

	return (
		<button className='w-full h-fit px-6 py-3 bg-transparent border border-solid border-slate-800'>
			<span>{text}</span>
		</button>
	)
}
