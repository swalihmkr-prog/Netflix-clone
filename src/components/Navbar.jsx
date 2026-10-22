import React, { useEffect, useRef } from 'react'
import logo from '../assets/logo.png'
import search_icon from '../assets/search_icon.svg'
import Bell_icon from '../assets/Bell_icon.svg'
import Profile_img from '../assets/profile_img.png'
import Caret_icon from '../assets/caret_icon.svg'
import { logout } from '../firebase'

function Navbar() {
    const navRef = useRef()

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY >=80){
                navRef.current.classList.add('nav-dark')
            }else{
                navRef.current.classList.remove('nav-dark')
            }
        })
    },[])
    return (
        <div ref={navRef}className='Navbar w-full py-[20px] px-[6%] flex justify-between fixed 
                       text-[14px] text-[#e5e5e5] bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_10%,transparent)] 
                       z-[1] font-[Josefin Sans]'>

            <div className='navbar-left flex items-center gap-[50px]'>
                <img src={logo} alt='' className='w-[90px]' />
                <ul className='flex list-none gap-[20px]'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>TV Shows</li>
                    <li className='cursor-pointer'>Movies</li>
                    <li className='cursor-pointer'>New & Populer</li>
                    <li className='cursor-pointer'>My List</li>
                    <li className='cursor-pointer'>Brows by Language</li>
                </ul>
            </div>


            <div className='navbar-right flex items-center gap-[20px] ml-[410px]'>
                <img src={search_icon} alt='' className='icons w-[20px] cursor-pointer'></img>
                <h1>Children</h1>
                <img src={Bell_icon} alt='' className='icons w-[20px] cursor-pointer'></img>
            </div>


            <div className='Navbar-profile group flex items-center gap-[10px] cursor-pointer relative'>
                <img src={Profile_img} alt='' className='profile w-[35px] rounded-[4px]'></img>
                <img src={Caret_icon} alt='' className='icons'></img>
                <div className='dropdown absolute top-full right-0 w-max bg-[#191919] py-[18px] px-[22px] 
                        rounded-[2px] underline z-[1] hidden group-hover:block'>
                    <p onClick={()=>{logout()}} className='text-[13px] cursor-pointer'>Sign Out of Netflix</p>
                </div>    
            </div>






        </div>
    )
}

export default Navbar