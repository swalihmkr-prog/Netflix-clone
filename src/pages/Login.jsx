
import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { login,signup } from '../firebase';
import netflix_spinner from '../assets/netflix_spinner.gif'

function Login() {

  const[signState,setsignState]=useState('Sign In')
  const [name,setname]= useState ("")
  const [email,setemail]= useState ("")
  const [password,setpassword]= useState ("")
  const [loading,setloading]= useState(false)


  const user_auth= async (event)=>{
    event.preventDefault()
    setloading(true)
    if(signState==="Sign In"){
      await login(email,password)
    } else{
      await signup(name,email,password)
    }
    setloading(false)

  }
  return (
    loading?<div className="login-spinner flex h-screen w-full items-center justify-center">
      <img src={netflix_spinner} alt=""className="w-[60px]" />
    </div>:
    <div
      className="min-h-screen bg-cover bg-center px-[8%] py-5 text-white"
      style={{
        backgroundImage:
          "linear-gradient(#0000007e, #0000007e), url('/background_banner.jpg')",
      }}
    >
      
      <img
        src={logo}
        alt="Logo"
        className="w-[150px]"
      />

     
      <div className="mx-auto mt-5 w-full max-w-[450px] rounded bg-black/75 p-[60px] max-sm:p-6">

        <h1 className="mb-7 text-[32px] font-medium">
         {signState}
        </h1>

        <form>
          {signState==="Sign Up"? <input
          value={name}
          onChange={(e)=>{setname(e.target.value)}}
            type="text"
            placeholder="Your name"
            className="my-3 h-[50px] w-full rounded bg-[#333] px-5 text-base font-medium text-white outline-none placeholder:text-base placeholder:font-medium"
          />:<></>
}
         
          <input
           value={email}
          onChange={(e)=>{setemail(e.target.value)}}
            type="email"
            placeholder="Your email"
            className="my-3 h-[50px] w-full rounded bg-[#333] px-5 text-base font-medium text-white outline-none placeholder:text-base placeholder:font-medium"
          />

          <input
           value={password}
           onChange={(e)=>{setpassword(e.target.value)}}
            type="password"
            placeholder="Your password"
            className="my-3 h-[50px] w-full rounded bg-[#333] px-5 text-base font-medium text-white outline-none placeholder:text-base placeholder:font-medium"
          />

          <button
          onClick={user_auth}
            type="submit"
            className="mt-5 w-full cursor-pointer rounded bg-[#e50914] p-4 text-base font-medium text-white hover:bg-[#c11119]"
          >
            {signState}
          </button>

          
          <div className="flex items-center justify-between text-[13px] text-[#b3b3b3]">

            <div className="flex items-center gap-[5px]">
              <input
                type="checkbox"
                id="remember"
                className="h-[18px] w-[18px] accent-[#e50914]"
              />

              <label htmlFor="remember">
                Remember Me
              </label>
            </div>

            <p className="cursor-pointer">
              Need Help?
            </p>

          </div>
        </form>
        <div className="form-switch mt-10 text-[#737373]">
          {signState==="Sign In"?
            <p>New to Netflix? <span className='ml-[6px] cursor-pointer font-medium text-white'
            onClick={()=>{setsignState("Sign Up")}}>Sign Up Now</span> </p>:
            <p>Already have accound? <span  className='ml-[6px] cursor-pointer font-medium text-white'
            onClick={()=>{setsignState("Sign In")}}>Sign In Now</span> </p>
          }
        
        </div>
      </div>
    </div>
  );
}

export default Login;

