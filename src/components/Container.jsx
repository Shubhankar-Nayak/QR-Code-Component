import React from 'react'
import image from "../assets/image-qr-code.png"

const Container = () => {
  return (
    <div className='w-[320px] h-[499px] bg-white rounded-xl px-[16px] pt-[19px] pb-[40px]'>
        <div className='rounded-lg overflow-hidden'>
            <img src={image} alt="QR Code" />
        </div>
        <div className='font-Outfit text-center pt-[24px] px-[16px]'>
            <p className='text-[20px] font-bold text-Slate900'>Improve your front-end skills by building projects</p>
            <p className='text-[15px] text-Slate500 pt-[10px]'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
    </div>
  )
}

export default Container