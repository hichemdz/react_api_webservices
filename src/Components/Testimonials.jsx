import React from 'react';
import Slider from 'react-slick';
import p from '../img/pr1.jpg';
import Section from './Section';

const Item = () => {
	return (
		<div className="bg-white gap-0 mx-3 rounded-lg grid grid-cols-5 p-5 ">
			{/* <h3 className="text-blue-300 text-8xl"></h3> */}

			<div className=" col-span-1  flex items-start justify-center">
				<div className=" w-16 h-16 overflow-hiiden  flex items-center justify-center  bg-gray-50
				rounded-full">
					<img className="w-12 h-12 rounded-full" src={p} alt="" />
				</div>
			</div>

			<div className=" col-span-4 pl-3">
				<div className="text-left mb-1 ">
					<h4 className="text-md font-semibold">BOUDJAHFA LAKHDER</h4>
					<p className="text-sm  text-gray-600">Web developer</p>
				</div>
				<p className="text-gray-800 text-sm text-left">
					A talented person who is committed to dates and I love to deal with him. I wish you good luck and
					more glory and excel in your field.{' '}
				</p>
			</div>
		</div>
	);
};
export default function Testimonials({data}) {
	let settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 3,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 2,
			  initialSlide: 2
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  };
	return (
		<Section name={data} title="Textimonials">
			<div  className=" w-full px-0 h-full mx-auto md:px-8">
				<Slider {...settings}>
					{[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ].map((i, k) => (
						<Item key={k} />
					))}
				</Slider>
			</div>
		</Section>
	);
}
