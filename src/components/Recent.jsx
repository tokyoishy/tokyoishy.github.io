import React from 'react'
import pihole from '../assets/pihole.png';
import passkeys from '../assets/passkeysblog.png'


const Recent = () => {
    return (
        <div id="recent" className='w-full py-[5rem] px-4 bg-white'>
            <div className='box-recent text-center pd-4px flex-col w-8'>
                <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-6 '>recently</h1>
            </div>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 py-10'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[black]'>
                    <h2 className='text-[white] text-2xl font-bold text-center py-8'>pihole demo</h2>
                    <img className='w-[500px] h-[300px] cardimage' src={pihole} alt="/"/>
                    <div className='text-center font-medium'>
                        <p className='text-[white] mt-8'>check out my pi-hole blog post on Medium!</p>
                    </div>
                    <div className='text-center'>
                        <a href="https://medium.com/@tokyoishy/pihole-ad-blocking-party-trick-aa9f0b1878d2" target="_blank" rel="noreferrer">
                        <button className='bg-[blanchedalmond] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>
                            click here!</button>
                        </a>
                    </div>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[black]'>
                    <h2 className='text-[white] text-2xl font-bold text-center py-8'>latest blog</h2>
                    <img className='w-[500px] h-[300px] cardimage' src={passkeys} alt="/"/>
                    <div className='text-center font-medium'>
                        <p className='text-[white] mt-8'>check out my Passkeys blog post on Medium!</p>
                    </div>
                    <div className='text-center'>
                        <a href="https://medium.com/@tokyoishy/passkeys-whats-the-big-deal-618be83c17f4" target="_blank" rel="noreferrer">
                        <button className='bg-[blanchedalmond] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>
                            click here!</button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Recent