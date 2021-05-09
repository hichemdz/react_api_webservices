import React from 'react';
import Section from './Section';
import y from '../img/y.png';
import s from '../img/st.png';
import t from '../img/tt.png';

const Skil = ({ rang, name, bg ,delay}) => {
	return (
		<div className="font-black  mb-5 flex items-center justify-bettween ">
			<p className="text-lg w-32 col-span-1 text-left pr-1"> {name.toUpperCase()}</p>
			<div className="w-full bg-gray-600 overflow-hidden  relative shadow rounded-lg">
				<div 
				    data-aos="fade-right"
					data-aos-delay={delay}
					className={`bg-${bg || 'blue-600'} py-1  flex items-center  justify-center  w-1/3 `}
					style={{ width: `${rang}%` }}
				>
					<span className=" text-sm text-gray-50">{rang} %</span>
				</div>
			</div>
		</div>
	);
};

const Social = ({ data }) => (
	<div className="flex items-center space-x-2">
		{data.map((i, k) => (
			<a
				className="flex w-8 h-8 items-center justify-center p-2 border border-red-300 rounded-full"
				key={k}
				href="#"
				data-aos='fade-up-right'
			>
				<img className="" src={i.src} alt="" />
			</a>
		))}
	</div>
);
export default function About({data}) {
	const data_social = [
		{
			src: y
		},
		{
			src: s
		},
		{
			src: t
		}
	];
	return (
		<Section name={data} title="About us">
			<div className="w-full grid space-y-5 lg:space-y-0  px-4 md:px-8 flex  grid-cols-1     text-left lg:grid-cols-2 gap-2">
				<div className="text-left    space-y-5 ">
					<h3 data-aos='fade-right' className="text-2xl font-black">BOUDJAHFA LAKHDER</h3>
					<h4 data-aos='fade-right' className="text-sm font-bold text-gray-800">BACK && FRON WEB DEVELOPER</h4>
					<p data-aos='fade-right'  className=" text-lg font-semibold text-gray-700 leading-6 lg:w-96">
						I'm web designer and developer. I like to develop myself and I love to help others.
						Self-employment is not just a chore, it is a dream that is renewed with every project I fulfill.
						I am waiting impatiently for you to join my friend list. Thank you for your trust in us.
					</p>
					<Social data={data_social} />
				</div>

				<div className=" space-y-5">
					<h3 className="text-2xl font-black">MY SKILS </h3>
					<h4 className="text-sm font-bold ">
						DEVELOP DESIGN DESKTOP && MOBIEL && WEB FRAMEWORK
					</h4>
					<div className="">
						<Skil rang={50} delay='' name="css" bg="red-500" />
						<Skil rang={80} delay='100' name="html" bg="blue-500" />
						<Skil rang={70} delay='200' name="javascript" bg="yellow-500" />
						<Skil rang={60} delay='300' name="php" bg="purple-500" />
						<Skil rang={50} delay='400' name="python" bg="blue-600" />
					</div>
				</div>

				<div />
			</div>
		</Section>
	);
}
