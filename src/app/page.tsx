import Image from "next/image";
import Video from 'next-video'
import Link from "next/link";
import Product from "./ui/components/product/product";

// Sample list of products
let products = [
	
]


export default function Home() {
  return (
    <div className="home_wrap min-h-[100vh] max-w-[80rem] flex mx-auto">
			<div className="home_contain px-2 sm:px-6 lg:px-8">
				<div className="home_hero w-full">
					<Link href='/products'>
						<div className="home_hero_bg_wrapper">
							<video autoPlay muted loop className="w-full h-auto max-h-[80vh] overflow-hidden min-h-[500px] object-cover" >
								<source src='/showcase/videos/hero_showcase_video.mp4' type="video/mp4" />
							</video>
						</div>
					</Link>
				</div>

				<div className="home_products_list w-full h-fit pt-10 pb-10">
					<ul className="w-full grid grid-cols-4 gap-x-9 gap-y-8">
						<li>
							<Product />
						</li>
						<li>
							<Product />
						</li>
						<li>
							<Product />
						</li>
						<li>
							<Product />
						</li>
						<li>
							<Product />
						</li>
						<li>
							<Product />
						</li>
						<li>
							<Product />
						</li>
						<li>
							<Product />
						</li>
					</ul>
				</div>
			</div>
    </div>
  );
}
