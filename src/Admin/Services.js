import React, { useState, useEffect, useContext ,useRef} from 'react'
import axios from 'axios';
import {Reduce} from '../contaxt';
import Input from './input';

// import { Redirect , useHistory} from "react-router-dom";

const Servives = () => {

  const Form = useRef(null)

  const path = (p) => `http://localhost/webService/storage/app/${p}`;
  const [{show,saccess,messageRsponse}, setIsSuccets] = useState({saccess:false , messageRsponse:'',show:false});
  const [{ description, title, message }, setErors] = useState({ title: '', description: '', message: "" });
  const { auth, setAuth } = useContext(Reduce)
  const [dataForm, setForm] = useState({});
  const [img, setImg] = useState(null);

  useEffect(() => {

  }, [])




  //let history =  useHistory()



  // hundel submit function

  const hundelSubmit = async (e) => {

      e.preventDefault();

      const df = new FormData()

      axios.defaults.withCredentials = true;

      try {

        await axios.get('/sanctum/csrf-cookie').then(async res => {
                df.append('title',dataForm.title);
                df.append('description',dataForm.description);
                df.append('icon',dataForm.icon);


            const login = await axios({
              header :{
                'content-type': 'multipart/form-data'
              },
              url:'/api/admin/service',
              method:'post',
              data:df
            })

            const { data } = await login;
             //setImg(data)

            setIsSuccets({saccess:true,messageRsponse:data.message ,show:true})

             setTimeout(function () {
                setIsSuccets({saccess:false,messageRsponse:'',show:false})
             }, 2000);
            //
            // // setAuth(data)
            //  localStorage.setItem('token', data)
            //history.push('/')

          })
      }

      catch (er) {
        if (er.response) {
          const { title, description } = er.response.data.errors || { title: [], description: [] };
          const { message } = er.response.data;


          setIsSuccets({saccess:false,messageRsponse:message ,show:true})

           setTimeout(function () {
              setIsSuccets({saccess:false,messageRsponse:'',show:false})
           }, 2000);
        }
        else console.log('catch :', er);
      }

  } // end hundel submit function

  const hundelInput = (e) => {
    let { name, value } = e.target;
    if (name == 'icon') value =  e.target.files[0];
    setForm({...dataForm, [name]: value})
  }

//  if (localStorage.getItem('token')) return <Redirect to='/' />;

  return (

    <div className='h-screen bg-blue-400 flex flex-col items-center justify-center bg-red-900'>
          {show && (<div className={saccess?'bg-green-300 p-5':'bg-red-300 p-5'}><p>
               {messageRsponse}
           </p></div>)}

      {(!title || !description) && message ? <p className='text-sm bg-white font-black text-red-500 px-5 py-2 my-5' >{message}</p> : ''}
      <div className='w-72 text-center rounded-md bg-white px-5 py-8'>
        <h1 className='px-5 mb-5 text-3xl font-bold'>Admin </h1>
        <form ref={Form} className='' onSubmit={hundelSubmit} encType="multipart/form-data">
          {/* title */}
          <Input name='title' placeholder ='Enter your title' hundle={hundelInput} />

           {/* description */}
          <div className=' mb-5'>

            <input onChange={hundelInput} name='description' type='text'
              placeholder='Enter your description'
              className={ (description !== '' || message === 'bade creds' ? 'bg-red-100 ' : ' bg-blue-100 ') + "px-2 py-2 rounded-lg w-full" } />
            {description ? <p className='text-xs p-0 '>{description}</p> : ''}
          </div>

          <div className=' mb-5'>

            <input onChange={hundelInput} name='icon' type='file'

              className={'px-2 py-2 rounded-lg w-full' } />
            {description ? <p className='text-xs p-0 '>{description}</p> : ''}
          </div>

          <button className='bg-blue-600 px-5 py-1 rounded-lg text-gray-50' type='submit'>Login</button>
        </form>
      </div>
    </div>
  )

}
export default Servives;
