import React from 'react'

const Contact = () => {
    return (
        <div id="contact" className='contact-box'>
            <div className='w-full py-16 text-black px-4'>
                <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                    <div className='lg:col-span-2 my-4 mx-4'>
                        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>ask me anything.</h1>
                        <p>send me a message on LinkedIn and i'll get back to you asap! </p>
                    </div>
                    <div className='flex flex-col items-center justify-between w-full'>
                           <a href="https://www.linkedin.com/in/ismaeel-aziz" target="_blank" rel="noreferrer"><button style={{width:"350px"}} className='bg-[black] rounded-md font-medium my-6 mx-auto md:mx-0 py-5 text-white'>message me on LinkedIn</button></a> 
                        </div>

                </div>

            </div>
        </div>
    )
}

export default Contact