import Image from "next/image";

export default function Product({product}: {product: any}) {
	return (
		<div className='w-full h-auto bg-dark-secondary transition-colors duration-300 hover:bg-slate-900'>
			<div className="w-full h-auto">
				<Image
					src="/showcase/photos/w-af1-shadow-sailhemp-fossil-lt-bone-black-623dd44f9318f.jpg"
					width="200"
					height="300"
					alt="Air Sneakers"
					className="w-full h-auto"
				/>
			</div>
			<div className="w-full px-4 py-6">
				<h4 className="text-sm">NAIR FORCE 1 '07 LX 'WHITE/LIGHT SMOKE GREY-PHOTON DUST'</h4>
				<div className="w-full mt-4"></div>
				<span className="text-base font-semibold">₹8,995.00</span>
			</div>
		</div>
	)
}
