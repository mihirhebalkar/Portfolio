import React from 'react'


import { ButtonPrimary, ButtonOutline } from './Button'


const Hero = () => {
  return (
    <section
      id='home'
      className='pt-28 lg:pt-36'>

        <div className='container items-center lg:grid lg:grid-cols-2 lg:gap-10'>
            <div>
               <div className='flex items-center gap-3'>
                    {/* <figure className='img-box w-9 h-9 rounded-lg'>
                        <img src="/images/avatar-1.png"
                        width={40}
                        height={40} alt="" 
                        className='img-cover'/>
                    </figure> */}

                    <div className='flex items-center gap-2 text-zinc-400 text-sm tracking-wide'>
                        <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                            <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping'></span>
                        </span>
                        Coding
                    </div>
                </div> 

                <h2 className='headline-1 max-w-[15ch] sm:max-w-[20ch]
                lg:max-w-[15ch] mt-5'>
                Mihir Hebalkar
                </h2>
                <h3 className='headline-3 max-w-[20ch] sm:max-w-[20ch] lg:max-w-[20ch] mt-5 mb-5 text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-zinc-300/100'>
                  Full Stack Developer
                </h3>


                <div className='flex items-center gap-3'>
                    < ButtonPrimary
                      href="/Resume.pdf"
                      target='_blank'
                      label="Download Resume"
                      icon="download" />

                    < ButtonOutline
                      href="#about"
                      label="Scroll down"
                      icon="arrow_downward"
                      />
                </div>
            </div>

            <div className='hiddent lg:block'>
                    <figure className='w-full max-w-[200px] ml-auto
                    overflow-hidden'>
                        <img 
                          src="/images/hero-final.png"
                          width={100}
                          height={180} alt="" className='w-full' />
                    </figure>
            </div>
        </div>
    </section>
  )
}

export default Hero