import React, { useState } from 'react'

const Signup = () => {

 let [formValues, setFormValues] = useState({name:'', email:'', password:''})
 console.log(formValues)
    const handleSubmit =(e) =>{
        e.preventDefault()
        let data = new FormData(e.target)
        setFormValues({name:data.get('name'),email:data.get('email'), password:data.get('password')})
        
        
    }
 
  return (
    <div className="shadow bg-white rounded-xl font-inter tracking-tighter flex flex-col items-center gap-5 my-auto p-10 max-w-4xl">
      <div className="heading text-center">
        <h2 className="text-3xl font-bebas">Create Account</h2>
        <p className="text-gray-600">Join us today</p>
      </div>
      <form onSubmit={handleSubmit} className="form flex flex-col gap w-80">
        <label className="font-light text-gray-600" htmlFor="name">
          Name
        </label>
        <input
          className="mb-3 border border-gray-300 rounded-xl px-2 py-2 focus:outline-2 focus:outline-gray-300 "
          type="text"
          name="name"
          autoComplete='username'
          
        />
        <label className="font-light text-gray-600" htmlFor="email">
          Email
        </label>
        <input
          className="mb-3 border border-gray-300 rounded-xl px-2 py-2 focus:outline-2 focus:outline-gray-300 "
          type="email"
          name="email"
          autoComplete='email'
        />
        <label className="font-light text-gray-600" htmlFor="password">
          Password
        </label>
        <input
          className="mb-3 border border-gray-300 rounded-xl px-2 py-2 focus:outline-2 focus:outline-gray-300 "
          type="password"
          name='password'
          autoComplete='current-password'
          
        />
        <button
            type='submit'
          className="rounded-xl px-5 py-2 bg-black text-white my-5 hover:scale-[.99]"
          
        >
          Sign up
        </button>
      </form>
      <p className="font-light">
        Already have an account?{" "}
        <span className="font-semibold cursor-pointer" >
          Sign in
        </span>{" "}
      </p>
    </div>
  )
}

export default Signup