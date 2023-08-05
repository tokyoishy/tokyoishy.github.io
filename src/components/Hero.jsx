import React from 'react';
import Typed from 'react-typed';
import memoji from '../assets/memoji_2.mp4';
import styles from '../index.css';
import down_arrow from '../assets/down-arrow.png';
import {Helmet} from "react-helmet";


const Hero = () => {

    return (
        <div id="home" className='text-black'>
            <Helmet>
                <meta name="viewport" content="width=1000; user-scalable=0;" />
            </Helmet>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <div className='memoji mx-auto'>
                    <video autoPlay loop muted src={memoji} width="300" height="300" autoplay="true" playsinline="true" />
                </div>
                <div className='box'>
                    <div className='flex text-center mx-auto justify-center py-5'>
                        <img className=' downarrow w-[50px]' src={down_arrow} alt="/" />
                    </div>
                    <h1 className='herotext md:text-7xl sm:text-6xl text-4xl font-bold md:py-3 sm:py-5'>hey there!</h1>
                </div>
                <div className='typed-tagline flex justify-center items-center'>
                    <p className='text-[black] md:text-5xl sm:text-4xl text-xl font-bold py-4'>i work with</p>
                    <Typed className='md:text-5xl sm:text-4xl text-xl font-bold text-[#32312e] md:pl-4 pl-2'
                        strings={['Python', 'HTML', 'CSS', 'Linux', 'Git']} 
                        typeSpeed={120} 
                        backSpeed={140} 
                        loop
                    />
                </div>
                <a href="#about"><button className='bg-[black] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:scale-105 duration-300'>learn more</button></a>
            </div>
        </div>
    )

}

export default Hero