import {Btn} from './btn'; 

const Add = ({data,setService}) =>{
  const addNewItem = () => {
    const {id} = data[data.length - 1]

	      setService([...data,{id:id + 1,title:null,description:null,icon:null,client:true}])
    }
	return (
    <div className='w-72 group border border-yellow-600   mx-auto relative  bg-purpe-600 group
                      hover:bg-purple-700
                      space-y-5 px-5 j text-gray-50 py-24

                      rounded-lg hover:border
                      hover:border-gray-700
                      flex  justify-center items-center '>

                     <Btn onClick= {addNewItem} calss='border border-yellow-600 group-hover:border-yellow-500 w-32 h-32 rounded-full flex items-center justify-center'>
                        <i className= 'fas fa-plus text-yellow-500'></i>
                    </Btn>

    </div>
  )
}

  export default Add;
