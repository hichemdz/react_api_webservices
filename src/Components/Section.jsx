import React from 'react';

export default function Section({children,title,name}) {
	return (
		<section name={name||''}  className=" overflow-hidden flex items-center justify-center  mb-10">
			<div className="container relative  flex space-y-10 py-10 flex-col items-center justify-center p-5  mx-auto text-center">
				<h3 className="font-black text-5xl p-5 mb-10 ">{title}</h3>
                    {children}
            </div>
		</section>
	);
}
