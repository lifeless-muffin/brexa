import { useCart } from "@/app/context/CartContext"

export default function CartItem({product}: {product: any}) {

	const {removeItemFromCart} = useCart()

	const removeHandler = () => {
		removeItemFromCart(product.id)
	}

	return (
		<div className="flex">
			<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
				<img
					alt={product.name}
					src={`/showcase/photos/${product.thumbnail}`}
					className="h-full w-full object-cover object-center"
				/>
			</div>

			<div className="ml-4 flex flex-1 flex-col">
				<div>
					<div className="flex justify-between text-base font-medium text-gray-900">
						<h3>
							<a href={product.href}>{product.name}</a>
						</h3>
						<p className="ml-4">{product.price}</p>
					</div>
				</div>
				<div className="flex flex-1 items-end justify-between text-sm">
					<p className="text-gray-500">Qty {product.quantity}</p>

					<div className="flex">
						<button onClick={removeHandler} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
							Remove
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
