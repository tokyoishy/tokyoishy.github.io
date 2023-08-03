import React from 'react'

const Newsletter = () => {
    return (
        <div id="newsletter" className='newsletter-box'>
            <div className='w-full py-16 text-white px-4'>
                <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                    <div className='lg:col-span-2 my-4'>
                        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>get my latest content sent to you.</h1>
                        <p>soon you can get my latest blogs, podcast episodes, and more.. straight to you! </p>
                    </div>
                    <div className='my-4'>
                        <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                            {/* <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='enter email'/> */}
                            <button style={{width:"410px"}} className='bg-[white] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-3 py-3 text-black'>coming soon</button>
                        </div>
                        <p>no spam, marketing, or selling. just the best of my work.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Newsletter