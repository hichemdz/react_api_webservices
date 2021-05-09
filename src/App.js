import {useEffect,useState} from 'react';



import {Reduce} from './contaxt';

import axios from 'axios';

import {Home,Login} from './Pages';

import Serives from './Admin/Services';

import {Test } from './Components/includes';

import { Switch, Route, Link,useRouteMatch ,useLocation , useParams} from 'react-router-dom'

function App() {
 const  [isConfirmed , setConfirmed] = useState(false);
 const [idDelted , setIdDelted]    =   useState(null)
 const [isPrevious , setIsPrevious]    =   useState(false) // show button modifie
 const  [load , setLoad] = useState(true);
 const  [isAuth, setIsAuth] = useState(false);
 const  [hero , setHero] = useState(null)
 const  [service , setService] = useState(null);

 const {pathname} = useLocation()
 const onDelete = async (id,url) => {

    const createdOnFront =   service.some(i=> i.id === id && i.client) ;

     setService(service.filter(item=>{
       return item.id != id
     }));


     if(!createdOnFront){

       await axios.get('/sanctum/csrf-cookie')
       const res = await axios.delete(url,{data:{'id':id}})
       const {data} = res;
       console.log('data delted');
     }

} // onDelete

 useEffect(() => {

   if(pathname === '/previous'){
     setIsPrevious(true);
   }else{
     setIsPrevious(false);
   }


   if(localStorage.getItem('token')){
       setIsAuth(true)
   }

   ( async ()=>{

         const {data} = await axios.get('/api/home')

           const {service,hero}  = data;
           setHero(hero)
           setService(service)
           setLoad(false)


   })()



 }, [])
  if (load) return <div className='fixed top-0 left-0 w-full h-full ' style={{background:'rgba(0,0,0,1)'}}></div>
  return (

    <Reduce.Provider
       value={{  isAuth, setIsAuth,hero,service,setService,isConfirmed , setConfirmed , onDelete , idDelted , setIdDelted , isPrevious , setIsPrevious}}>

    {isConfirmed && (<Test  />) }
    <Switch>
       <Route path="/previous" component={Home} />
       <Route path='/login'>
         <Login/>
       </Route>
       <Route path='/admin'>
         <Serives/>
       </Route>


       <Route exact path='/'>
         <Home/>
       </Route>



     </Switch>
     </Reduce.Provider>

  );
}

export default App;
