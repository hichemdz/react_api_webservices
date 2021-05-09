import React from 'react';

import logo from '../img/logo.svg';
import { Li } from './includes';

export default function Footer() {
	return (
		<footer nam='footer' className="overflow-hidden  bg-gray-300">
			<div className="container space-y-3 py-15 md:space-y-0 text-white grid-cols-1 md:grid grid-cols-8 py-10  gap-x-2  p-5  mx-auto ">
				{/* intor */}
				<div className="space-y-2 md:col-span-4  lg:col-span-3 ">
					<a>
						<img src={logo} alt="boudj dev" />
					</a>
					<p className="px-1 text-bold text-md">
						I'm web designer and developer. I like to develop myself and I love to help others.
						Self-employment is not just a chore, it is a dream that is renewed with every project I fulfill.
						I am waiting impatiently for you to join my friend list. Thank you for your trust in us.
					</p>
				</div>
				{/* .intro */}
				<div className="space-y-2 ">
					<h3 className=" text-xl font-black ">Likns</h3>
					<ul className="flex text-md md:block items-center space-x-2 md:space-x-0 md:space-y-2  items-center   text-sm">
						<Li text="home" link="home" />
						<Li text="Services" link="services" />
						<Li text="Portfolio" link="portfolio" />
						<Li text="About" link="about" />
						<Li text="testimonials" link="testimonials" />
						<Li text="Contact" link="contact" />
					</ul>
				</div>

				<div className="space-y-2 md:col-span-3 lg:col-span-2">
					<h3 className="text-xl font-black">Social</h3>
					<ul className="space-y-2  text-sm">
						<Li text="Facebook :#amazing" />
						<Li text="Email :hichem.oued@gmail.com" />
						<Li text="youtube : hichemDev" />
						<Li text="Twitter : #amazing" />
					</ul>
				</div>

				<div className="space-y-2 col-span-8 space-y-3 md:mt-3 lg:mt-0 lg:col-span-2 ">
					<h3 className="text-xl font-black">Send Your email for contact</h3>
					<form action="" className="space-y-3 flex flex-col ">
						<input
							className="block px-3 py-2 bg-gray-200 border-b borde-gray-50"
							type="email"
							placeholder="Your email"
						/>

						<button className="font-bold bg-yellow-500 px-5 py-3 font-black text-sm rounded-lg">
							Send
						</button>
					</form>
				</div>
			</div>
			{/* .contianer */}
			<div className="border-t border-gray-50">
				<div className=" container text-center mx-auto p-5">
					<p className="text-white">
						Created by BoudjDev <span>&#169;</span>
						<span>{new Date().getFullYear()}</span>
					</p>
				</div>
			</div>
		</footer>
	);
}
