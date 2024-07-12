import Link from 'next/link';
import productsList from '../data/products.json'
import Product from '../ui/components/product/product';

export default function Layout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<div className="min-h-[100vh] max-w-[80rem] flex mx-auto flex-col">
			<div className="w-full px-2 sm:px-6 lg:px-8 pt-4">
				{children}
			</div>
			<div className="w-full mt-14"></div>
			<div className="w-full px-2 sm:px-6 lg:px-8 pt-4">
				<ul className="w-full grid grid-cols-4 gap-x-9 gap-y-8">
						{productsList.map((item, i) => {
							return (
								<li className="w-full h-full" id={`product-${i}`} key={i}>
									<Link href={`/products/${item.id}`}>
										<Product
											product={item}
										/>
									</Link>
								</li>
							)
						})}
					</ul>
			</div>
			<div className="w-full mt-14"></div>
		</div>
	)
}