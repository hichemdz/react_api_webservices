import React from 'react';
import { animated, useSpring } from 'react-spring';
import Section from './Section';
import p1 from '../img/p1.jpg';
import p2 from '../img/p2.jpg';
import p3 from '../img/p3.jpeg';
import p4 from '../img/p4.jpg';
import p5 from '../img/p5.jpeg';

const Item = ({ img,title  , description }) => {
	//const [ isHover, setSiHover ] = useState(true);
	const [ { y }, set ] = useSpring(() => ({ y: 600 }), []);

	const onLeave = () => set({ y: 600 });
	const onEnter = () => set({ y: 0 });

	return (
		<div data-aos='fade-up-right' onMouseLeave={onLeave} onMouseEnter={onEnter} className="relative group overflow-hidden rounded-lg ">
			<div>
				<img className="  sm:w-full sm:h-64" src={img} alt="" />
			</div>
			<animated.div
				style={{ transitionDuration:500, transform: y.interpolate((v) => `translateY(${v}%`) }}
				className="absolute top-0  w-full h-full flex items-center justify-center   left-0 z-50 bg-purple-600 text-gray-50"
			>
				<animated.div
					style={{ delay:1000 , transform: y.interpolate((v) => `translateY(${v}%`) }}
					className="space-y-5"
				>
					<h5 className="text-lg font-black ">{title}</h5>
					<p className="">{description}</p>
					<button className="bg-yellow-500 bg-gradient-to-r from-pink-400 to-yellow-500 px-4 py-2 rounded-lg text-gray-50">

						Previow
					</button>
				</animated.div>
			</animated.div>
		</div>
	);
};
export default function Portfolio({data}) {
	return (
		<Section name={data} title="Enjoy our projects">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5">
				<Item img={p1} title='Title web site' description='Ipsum esse aute labore irure laboris consectetur consectetur.'/>
				<Item img={p2} title='Title web site' description='Ipsum esse aute labore irure laboris consectetur consectetur.'/>
				<Item img={p3} title='Title web site' description='Ipsum esse aute labore irure laboris consectetur consectetur.'/>
				<Item img={p4} title='Title web site' description='Ipsum esse aute labore irure laboris consectetur consectetur.'/>
				<Item img={p5} title='Title web site' description='Ipsum esse aute labore irure laboris consectetur consectetur.'/>
				<Item img={p1} title='Title web site' description='Ipsum esse aute labore irure laboris consectetur consectetur.'/>
				<Item img={p2} title='Title web site' description='Ipsum esse aute labore irure laboris consectetur consectetur.'/>
				<Item img={p5} title='Title web site' description='Ipsum esse aute labore irure laboris consectetur consectetur.'/>

			</div>
		</Section>
	);
}
