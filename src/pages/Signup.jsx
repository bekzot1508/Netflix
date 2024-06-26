import React  from 'react';
import { Link,   } from 'react-router-dom';
 

const Signup = () => {
 

  return (
    <>
      <div className='w-full h-screen'>
        <img 
          className='hidden sm:block absolute w-full h-full object-cover' 
          src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg" 
          alt="" 
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen">
           <div className="fixed w-full p-4 py-24 z-50">
             <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
              <div className="max-w-[320] mx-auto py-16 px-10">
                <h1 className='text-3xl font-bold'>Sign Up</h1>
                <form 
 
                  className='w-full flex flex-col py-4'
                >
                  <input 
 
                    className='p-3 my-3 bg-gray-700 rounded' 
                    type="email" 
                    placeholder='Email' 
                    autoComplete='email'
                  />

                  <input 
 
                    className='p-3 my-3 bg-gray-700 rounded' 
                    type="password" 
                    placeholder='Password' 
                    autoComplete='email' 
         
                  />

                  <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>

                  <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p>
                    <input className='mr-2' type='checkbox' />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className='py-8'>
                  <span className='text-gray-600'>
                    Already subscribed to Netflix?
                  </span>{' '}
                  <Link to='/login'>Sign In</Link>
                </p>
                </form>
              </div>
             </div>
           </div>
        </div>
      </div>
      {/* build */}
    </>
  )
}

export default Signup