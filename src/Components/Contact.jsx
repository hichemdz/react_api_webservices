import React from 'react';

import Section from './Section';

// const Item = ({ icon, text }) => {
// 	return (
// 		<div className="flex space-x-2 items-center">
// 			<span className="block w-8 rounded-full  h-8 bg-red-500" />
// 			<span className="font-bold">{text}</span>
// 		</div>
// 	);
// };

export default function Contact({data}) {
	return (
		<Section name={data} title="Contact Us">
			<div className="w-full gap-x-8 grid space-y-5 lg:space-y-0  flex  grid-cols-1 px-4  md:px-8  text-left lg:grid-cols-2 gap-2">
				<div className=" space-y-5">
					<h3 className="font-black text-xl "> CONTACT INFORMATION </h3>

					<div className="w-full ">
						<iframe
							className="w-full rounded-lg"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25637.790005039387!2d2.785977891594392!3d36.56077326807844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f0ac7bf5ccf6d%3A0x1be33bac7d1c266c!2z2YjYp9ivINin2YTYudmE2KfZitqo!5e0!3m2!1sar!2sdz!4v1619618843978!5m2!1sar!2sdz"
							title="location"
							width="600"
							height="400"
							style={{ border: 0 }}

							loading="lazy"
						/>
					</div>
					{/* <div className="space-y-3 ">
						<Item icon="" text="+213 657386221" />
						<Item icon="" text="hichem.oued@gmail.com" />
					</div> */}
				</div>
				{/* .infomation*/}
				<div className="space-y-8">
					<h3 className="font-black text-xl "> CONTACT FORM </h3>
					<form action="" className="space-y-8 flex flex-col ">
						<input
							className="block px-3 py-2 bg-transparent border-b borde-gray-50"
							type="text"
							placeholder="Your name"
						/>
						<input
							className="block px-3 py-2 bg-transparent border-b borde-gray-50"
							type="email"
							placeholder="Your email"
						/>
						<textarea
							rows="6"
							className="block px-3 py-2 bg-transparent border-b borde-gray-50"
							placeholder="Your message"
						/>
						<button className="font-bold bg-yellow-500 text-white px-5 py-3 font-black text-sm rounded-lg">
							Send
						</button>
					</form>
				</div>
			</div>
		</Section>
	);
}
