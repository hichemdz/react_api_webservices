import React , {useContext,useState} from 'react';

import {postData} from "../../helper";

import {Reduce} from '../../contaxt';



import Input , {TextArea} from '../../Admin/input';

export const Option = ({id,isEdit,setIsEdit ,insert, save}) =>{
  const {setService,service,isConfirmed , setConfirmed,setIdDelted} = useContext(Reduce)

 	const onDelete = (id) => {
		setIdDelted(id)
		setConfirmed(true)
	}

 // onDelete
return  <>


              {

								(
									<div className='px-5 py-1 w-full absolute top-5 left-0 flex items-center justify-between'>

										<button onClick={isEdit?save:setIsEdit} className={'p-1   w-8 h-8 flex items-center justify-center rounded-full ' + (isEdit?'text-green-500':"text-yellow-500")}>
										  <i className={"fas fa-lg fa-"+(isEdit?'check':'highlighter')}></i>
										</button>
										<button onClick={isEdit?setIsEdit:()=>onDelete(id)} className={'p-1   w-8 h-8 flex items-center justify-center rounded-full ' + (isEdit?'text-yellow-500':"text-red-500")}>

                      {
												insert?<i className={"fas fa-lg fa-times"}></i>:(<i className={"fas fa-lg fa-"+( !isEdit?'times':'undo-alt')}></i>)
											}


										</button>

								 	</div>
								)
							}



        </>

	return null;
}


const Item = ({id=null, title=null, description=null, icon=null ,insert=false, fide , isAuth }) => {

	 const [isEdit,setIsEdit] = useState(false); ///

	 const [item, setItem]  = useState({id, title, description, icon:{value:icon,file:''}});

   const [data,setDtat] = useState('hello')

   const edit = () => {
     setItem({id, title, description, icon:{value:icon,file:''}})
     setIsEdit(!isEdit)
   };

   const  hundle = (e) => {

      const { name, value } = e.target;
      if(name === 'icon') {
        let file =  e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = (a)=>{
               console.log('onload',reader.result);
               setItem({...item,[name]:{value:reader.result,file:file}})


        }


      }


      else{
        setItem({...item,[name]:value})
      }

	 };

	 const save = () =>{
         const df = new FormData ();
         const {id , title , description , icon} = item;
         for(let i in item){
           df.append(i , item[i]);
         }

         postData('put', df,'/api/admin/service/update')

         setIsEdit(!isEdit)


   }



	return (
		<div
			data-aos={fide || 'fade-up-right'}
			className="w-72   mx-auto relative
			                  bg-purple-600 group
												hover:bg-purple-700
			                  space-y-5 px-5 j text-gray-50 py-24
												rounded-lg hover:border
												hover:border-gray-700
												flex flex-col justify-start items-center "
		>

		  {
				insert||isEdit?
				(
        <>
      		<div  className="relative border-4 flex justify-center it border-red-600
                           relative overflow-hidden  w-24 h-24 bg-yellow-200
                           group-hover:bg-yellow-500  rounded-full p-2 flex items-center justify-center
                           ">
                           <input type='file'  className='h-full rounded-full absolute z-50 opacity-0' name='icon'  onChange={hundle} />

                           {
                                item.icon && item.icon.value  ? (<img className="w-16 h-16 z-10 borde" accept="image/*" src={item.icon.value} alt="service 1" />)
                              :
                              (<i className='fas text-3xl text-yellow-400 fa-plus'></i>)

                            }

					</div>

					<Input classInput={'text-gray-800 rounded-full'} placeholder='Sevice Title ..' value={item.title} hundle={hundle} name='title' type='text'/>

					<TextArea classInput=' text-gray-800 rounded-lg  ' placeholder='Sevice description ..' value={item.description} hundle={hundle} name='description' type='text'/>

					</>
			):
				(
					<>
					<div onDoubleClick={edit} className="w-24 h-24 bg-yellow-200  group-hover:bg-yellow-400  rounded-full p-2 flex items-center justify-center">
					<img className="w-16 h-16 " src={icon} alt="service 1" />
				</div>
				 <h4  className={'font-black group-hover:text-white text-lg'}>{title}</h4>
				 	<p className="text-center font-semiblod text-lg ">{description} </p>
				</>
			 )
			}

			 {isAuth&&(<Option id={id} isEdit={isEdit} insert={true} setIsEdit={edit} save={save}/>)}
		</div>
	);
};

export default Item;
