import React , {useContext,useEffect , useState} from 'react';
import {Reduce} from '../contaxt';
import {path} from '../helper'
import Section from './Section'
import Input from '../Admin/input';
import {Item,Add,Btn} from './includes/';
export default function Services({data}) {

	const {service,setService,isAuth , isPrevious} = useContext(Reduce);
  const [isEdit, setEdit] = useState(false)
	const edit = () => setEdit(!isEdit);

	return (
		// eslint-disable-next-line no-undef
		<Section name={data} title="What cane offer?">
			<div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4   gap-5">

			{isAuth && isPrevious &&
				(<Btn onClick={edit} calss={'absolute   top-0 right-0' + ((isEdit?' hover:text-green-600 text-green-500':' hover:text-yellow-600 text-yellow-500'))}>

				 <i className={"fas fa-lg fa-"+(isEdit?'check':'highlighter')}></i>

			 </Btn>)
		 }

        {

           (
           service.map((item) => 	<Item

					    id={item.id}
					    key={item.id}
		 					title={item.title}
		 					description={item.description}
		 					icon={path(item.icon)}
		 					fide={'fade-up-right'}
							isAuth={isAuth && isPrevious && isEdit}
							insert={item.client}
		 				/>)

				)}

				{isAuth && isPrevious && service.length < 4 &&(<Add data={service} setService={setService} />)}

			</div>



		</Section>
	);
}
