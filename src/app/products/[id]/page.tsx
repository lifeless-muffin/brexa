import Image from 'next/image'
import productsList from '../../data/products.json'
import { NextPage } from 'next'
import OutlinedBtn from '@/app/ui/components/buttons/outlinedBtn'
import ScrollUp from '@/app/utils/scrollUp'
import AddToCart from '@/app/ui/components/cart/addToCartBtn'

interface Props {}

const Page: NextPage<Props> = ({params}: any) => {

	let productDetails = productsList[params.id - 1]

	return (
		<div className='w-full h-auto grid grid-cols-2 gap-x-10'>
			<ScrollUp />
			<div className='h-full w-full'>
				<Image 
					className='w-full h-auto'
					src={`/showcase/photos/${productDetails.thumbnail}`}
					height={600}
					width={800}
					alt={productDetails.name}
				/>
			</div>
			<div className='h-full w-full flex flex-col justify-between pt-6'>
				<div>
					<h2 className='text-xl font-medium h-fit text-left'>{productDetails.name}</h2>
					<div className="w-full mt-6"></div>
					<p className="text-base text-slate-400">{productDetails.desc}</p>
				</div>
				
				<div>
					<span className='text-xl font-medium'>{productDetails.price}.00</span>
					<div className="w-full mt-6"></div>
						<AddToCart product={productDetails} />
						<div className="w-full mt-3"></div>
						<OutlinedBtn 
							text="Buy Now"
						/>
				</div>
				
			</div>
		</div>
	)
}

export default Page