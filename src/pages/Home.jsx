import React from 'react'
import Navbar from '../components/Navbar'
import hero_banner from '../assets/hero_banner.jpg'
import hero_title from '../assets/hero_title.png'
import play_icon from '../assets/play_icon.png'
import info_icon from '../assets/info_icon.png'
import TitleCards from '../components/TitleCards'
import Footer from '../components/footer'


function Home() {
  return (
    <div className='home'>
      <Navbar />

      <div className='hero relative'>
        <img src={hero_banner} alt="" className='banner-img w-[100%]  [mask-image:linear-gradient(to_right,transparent,black_75%)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_75%)]' />
        <div className='hero-caption absolute w-full pl-[6%] bottom-0'>
          <img src={hero_title} alt="" className='caption-img w-[90%] max-w-[420px] mb-[30px]' />
          <p className='max-w-[700px] text-[17px] mb-[20px]'>
            Discovering his ties to a scret ancient order, a young
            man living in modern instanbul embarks on a quest to save the
            city from an immortal enemy.
          </p>
          <div className='hero-btns flex gap-[10px] mb-[50px]'>              


            <button className='btn btn py-[10px] px-[20px] items-center gap-[10px] inline-flex
                                    font-semibold outline-0 border-0 bg-white rounded-[4px] cursor-pointer text-black hover:bg-[#ffffffbf]'>

              <img src={play_icon} className='w-[25px]' /> Play</button>
            <button className='btn btn-dark  py-[10px] px-[20px] items-center gap-[10px] inline-flex
                                   font-semibold outline-0 border-0 rounded-[4px] cursor-pointer text-white 
                                   bg-[#6d6d6eb3] hover:bg-[#6d6d6e66]'>
               <img src={info_icon} className='w-[25px]' /> More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="morCards pl-[6%]">
          <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
          <TitleCards title={"Only On Netflix"} category={"popular"}/>
          <TitleCards title={"Upcoming"} category={"upcoming"}/>
          <TitleCards title={"Top Pics for You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home