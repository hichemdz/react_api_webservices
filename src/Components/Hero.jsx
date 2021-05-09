import React , {useContext,useState} from 'react'
import {Reduce} from '../contaxt';

import {Btn} from './includes/';

import Input,{TextArea} from '../Admin/input'

import c from '../img/computer.svg'


import  '../css/hero.css';

export default function Hero({data}) {

   const { hero , isAuth , isPrevious } = useContext(Reduce)
   const [isEdit , setEdit] = useState(false)
   const edit = () => {
      setEdit(!isEdit)
   }
    return (
        <section id='hero' name={data} id='hero' className='relative h-screen py-32 bg-cover ' >
            <div className='h-full relative container mx-auto p-3 sm:p-5 lg:space-x-10 flex items-center justify-between'>
               {
                 isAuth && isPrevious ?
                   <>
                   <Btn onClick={edit} calss='absolute text-yellow-500 hover:text-yellow-600 top-0 right-0'>

                     <i className={"fas fa-lg fa-"+(isEdit?'check':'highlighter')}></i>

                   </Btn>
                   <div className='text-white space-y-6 w-full flex flex-col text-center md:text-left  items-center md:items-start'>

                      {
                        isEdit?
                        <>
                        <Input type='text' placeholder='Enter new title' />
                        <Input type='text' placeholder='Enter new sub title' />

                        <TextArea  rows='5'/>


                        </>
                        :
                        <>
                          <h1 data-aos="fade-up-right"  className="text-3xl   w-full  font-black sm:text-4xl ">{hero && hero.title }</h1>
                          <h2 data-aos="fade-up-right" className="text-2xl  w-full   font-black text-3xl ">
                          {hero && hero.subTitle }
                          </h2>
                          <p data-aos="fade-right" className='px-5   w-full md:px-0 text-lg  '>
                          {hero && hero.intro }
                          </p>
                          <button className="font-bold bg-yellow-500 px-5 py-3 font-black text-sm rounded-lg">
                          REQUEST
                          </button>
                        </>
                      }
                    </div>

                    <div className='w-full hidden lg:block'>
                       <img data-aos="fade-up-left" src={c}  alt='right'/>
                    </div>
                    </>
                 :
                 <>
                   <div className='text-white space-y-6 w-full flex flex-col text-center md:text-left  items-center md:items-start'>

                      <h1 data-aos="fade-up-right"  className="text-3xl  w-full  font-black sm:text-4xl ">{hero && hero.title }</h1>
                      <h2 data-aos="fade-up-right" className="text-2xl  w-full   font-black text-3xl ">
                      {hero && hero.subTitle }
                      </h2>
                      <p data-aos="fade-right" className='px-5    w-full md:px-0 text-lg  '>
                      {hero && hero.intro }
                      </p>
                      <button className="font-bold bg-yellow-500 px-5 py-3 font-black text-sm rounded-lg">
                          REQUEST
                      </button>
                    </div>

                    <div className='w-full hidden lg:block'>
                       <img data-aos="fade-up-left" src={c}  alt='right'/>
                    </div>
                 </>
               }
            </div>
        </section>
    )
}
