import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import {Reduce} from '../contaxt';
import { Redirect , useHistory} from "react-router-dom";

const Login = () => {

  useEffect(() => {

  }, [])

  const { isAuth, setIsAuth } = useContext(Reduce)

  const [dataForm, setForm] = useState();
  let history =  useHistory()
  const [{ password, email, message }, setErors] = useState({ email: '', password: '', message: "" });
  const hundelSubmit = async (e) => {
    e.preventDefault();

    axios.defaults.withCredentials = true;
    try {

      await axios.get('/sanctum/csrf-cookie')
        .then(async res => {

          const login = await axios.post('api/admin/login', dataForm)

          const { data } = await login;

           setIsAuth(true)
           localStorage.setItem('token', data)
           console.log(isAuth);
           history.push('/')

        })
    }
    catch (er) {
      if (er.response) {
        const { email, password } = er.response.data.errors || { email: [], password: [] };
        const { message } = er.response.data;
        setErors({
          email: email[0], password: password[0], message
        })
      }
      else console.log('catch :', er);
    }



  }

  const hundelInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...dataForm, [name]: value })
  }

 if (isAuth) return <Redirect to='/' />;

  return (

    <div className='h-screen bg-purple-600 flex flex-col items-center justify-center bg-red-900'>
      {(!email || !password) && message ? <p className='text-sm bg-white font-black text-red-500 px-5 py-2 my-5' >{message}</p> : ''}
      <div className='w-96 text-center rounded-md bg-white px-5 py-16'>
        <h1 className='px-5 mb-5 text-3xl font-bold'>Admin </h1>
        <form className='' onSubmit={hundelSubmit} >
          {/* email */}
          <div className=' mb-5'>
            <input onChange={hundelInput}
              name='email' type='email'
              placeholder='Enter your email'
              className={ (email !== '' || message === 'bade creds' ? 'bg-red-100 ' : ' bg-blue-100 ') + "px-2 py-2 rounded-lg w-full" } />
            {email ? <p className='text-xs p-0'>{email}</p> : ''}
          </div>
           {/* password */}
          <div className=' mb-5'>

            <input onChange={hundelInput} name='password' type='password'
              placeholder='Enter your password'
              className={ (password !== '' || message === 'bade creds' ? 'bg-red-100 ' : ' bg-blue-100 ') + "px-2 py-2 rounded-lg w-full" } />
            {password ? <p className='text-xs p-0 '>{password}</p> : ''}
          </div>

          <button className='bg-blue-600 px-5 py-1 rounded-lg text-gray-50' type='submit'>Login</button>
        </form>
      </div>
    </div>
  )

}
export default Login;
