
"use client"

import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {


  return (

    <section className="py-28 bg-gray-100">

<img className="innovation-img z-10" src="/innovation-img.png" alt="ellipse-img" />

    <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
        <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            
            <motion.h1  initial={{x:-100,opacity:0}}
                whileInView={{ x:0, opacity:1}}
                transition={{ delay:0.2, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1 }} className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                Elevate your creativity
            </motion.h1>
            <motion.p  initial={{x:-100,opacity:0}}
                whileInView={{ x:0, opacity:1}}
                transition={{ delay:0.2, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1 }}>
            Explore AI-powered AR and VR applications to enhance immersive experiences. AI can be used to <span className='bg-red-300'> create intelligent simulations</span>   interactive environments, and personalized experiences that push the boundaries of traditional creativity..
            </motion.p>
            <motion.div  initial={{x:-100,opacity:0}}
                whileInView={{ x:0, opacity:1}}
                transition={{ delay:0.3, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1 }} className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                <a href="javascript:void(0)" className="block py-2 px-4 text-center text-white font-medium bg-red-600 duration-150 hover:bg-red-500 active:bg-red-700 rounded-full shadow-lg hover:shadow-none">
                    Let's get started
                </a>

                <a href="javascript:void(0)" className="block py-2 px-4 text-center text-red-600 font-medium bg-gray-100 duration-150 hover:bg-red-500 hover:text-white active:bg-red-700 rounded-full shadow-lg hover:shadow-none">
                    Explore Now
                </a>

                
            </motion.div>
        </div>
        <motion.div  initial={{x:100,opacity:0}}
                whileInView={{ x:0, opacity:1}}
                transition={{ delay:0.2, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1 }} className="flex-none mt-14 md:mt-0 md:max-w-xl">
            <img
                src="hero_img2.png"
                className=" md:rounded-tl-[108px]"
                alt="girl-image"
            />
        </motion.div>
    </div>
    
</section>
    
  )
}

export default Hero