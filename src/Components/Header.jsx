import React,{useContext} from 'react'
import logo from '../img/logo.svg'
import {Reduce} from '../contaxt';

import {Li,Btn} from './includes';
export default function Header() {
  const {isAuth,  isPrevious , setIsPrevious } = useContext(Reduce)
  return (
    <header className='fixed top-0 left-0 w-full z-50 '>
      {/* nav bar  */}
      <nav>
        <div className="container px-5 mx-auto  justify-between flex flex-col md:flex-row md:justify-center  items-center  py-5">

          <div className=' flex items-center justify-between w-full md:bg-transparent'>
            <a className='mt-2' href='#'>
              <img src={logo} alt='boudj dev' />

            </a>
            <div className='md:hidden flex items-center justify-center space-x-5'>
            {
              isAuth&&(
                <Btn calss={(isPrevious?" text-yellow-500":' text-yellow-300')} onClick={()=>setIsPrevious(!isPrevious)}>
                 <i className='fas fa-vr-cardboard'></i>
                </Btn>
              )
            }
              <Btn calss=' text-white' >
               <i className='fas fa-bars'></i>
              </Btn>
            </div>
          </div>
          <ul className='hidden md:flex space-x-5  items-center  text-gray-800 text-sm'>

            <Li text='home' link='home'/>
            <Li text='Services'link='services' />
            <Li text='Portfolio' link='portfolio'/>
            <Li text='About' link='about'/>
            <Li text='testimonials' link="testimonials" />
            <Li text='Contact' link='contact' />
            {
              isAuth&&(
                <Btn calss={(isPrevious?" text-yellow-500":' text-yellow-300')} onClick={()=>setIsPrevious(!isPrevious)}>
                 <i className='fas fa-vr-cardboard'></i>
                </Btn>
              )
            }

          </ul>
        </div>
      </nav>
    </header>
  )
}
