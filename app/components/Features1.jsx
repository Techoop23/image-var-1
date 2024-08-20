
"use client"

import React from 'react'
import { motion } from 'framer-motion'

const Features1 = () => {

    const servicesItems = ["Mobile development", "UI/UX Design", "web development", "SEO"]

  return (

<main className="flex overflow-hidden bg-gray-100">
            <div className="flex-1 hidden lg:block bg-fixed relative bg-[url(/features1_img.png)] bg-cover bg-center bg-no-repeat">
                
            </div>
            <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
                <div className="max-w-lg flex-1 mx-auto px-4 text-gray-600">
                   
                   
                       <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Elevate your innovativeness
                        </p>
                        <p className="mt-3 text-gray-600">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
                        </p>
                        

                          </div>

                        <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Elevate your innovativeness
                        </p>
                        <p className="mt-3 text-gray-600">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es
                        </p>
                        <a href="javascript:void(0)" className="inline-flex gap-x-1 items-center text-red-600 hover:text-red-500 duration-150 font-medium">
                            Explore How
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </a>

                         

                    </div>
                       

                <motion.h3  initial={{x:100,opacity:0}}
                whileInView={{ x:0, opacity:1}}
                transition={{ delay:0.2, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1 }} className="text-4xl mt-10 text-red-200 font-extrabold md:text-5xl">
                INNOVATION
            </motion.h3>
                       
                </div>
            </div>
        </main>

  )
}

export default Features1