import Image from "next/image";

export default function Product({product}: {product: {name: string, desc: string, price: string, thumbnail: string}}) {
	return (
		<div className='w-full h-full bg-dark-secondary transition-colors duration-300 hover:bg-slate-900 flex flex-col'>
			<div className="w-full h-auto">
				<Image
					src={`/showcase/photos/${product.thumbnail}`}
					width="200"
					height="300"
					alt={product.name}
					className="w-full h-auto"
				/>
			</div>
			<div className="w-full px-4 py-6 h-full flex flex-col justify-between">
				<h4 className="text-sm">{product.name}</h4>
				<div className="w-full mt-4"></div>
				<span className="text-base font-semibold">{product.price}</span>
			</div>
		</div>
	)
}
