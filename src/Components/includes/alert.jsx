import {useContext} from 'react';
import {Reduce} from '../../contaxt';

const Alerted = () => {

	  const {isConfirmed , setConfirmed , onDelete , idDelted , setIdDelted} = useContext(Reduce);
		const onCancel = () =>  setConfirmed(false)
		const onAccept = () =>  {
		  onDelete(idDelted,'/api/admin/service/delete');
			setIdDelted(null)
			setConfirmed(false)
		}

	  return (<div className='alert fixed flex items-center justify-center top-0 left-0 z-50 w-full h-full' style={{background:'rgba(0,0,0,.4)'}}>
                      <div   className='w-96 rounded border border-blue-50 shadow mx-auto p-5 space-y-8 bg-gray-50' >

															 <div >
                                   <p className='text-gray-700'> You want to delete the item ? </p>
															 </div>

															 <div className='flex items-center justify-end space-x-5'>
															      <button onClick={onCancel} className='bg-red-500 text-center  w-16  py-1 rounded text-white'>cancel</button>
                                    <button onClick={onAccept} className='bg-green-500 text-center  w-16 py-1 rounded text-white'>ok</button>

															 </div>

											</div>
			       </div>)
}

export default Alerted;
