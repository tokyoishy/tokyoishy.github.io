import React from 'react'
import {
    FaGithubSquare,
    FaLinkedin,
    FaTwitterSquare

} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-w-[1230px] mx-auto py-16 px-3 grid lg:grid-cols-4 gap-8 text-[black]'>
            <div>
                <h1 className='w-full text-3xl font-bold'>ismaeel</h1>
                <p className='py-4'>made with <b>React JS + Tailwind CSS</b> + <em>willpower + caffeine &#9749;</em></p>
                <div className='flex md:w-[75%] my-6'>
                    <div className='socials'>
                        <a href="https://www.linkedin.com/in/ismaeel-aziz" target="_blank" rel="noreferrer"><FaLinkedin size={30}/></a>
                    </div>
                    <div className='socials'>
                        <a href="https://github.com/tokyoishy" target="_blank" rel="noreferrer"><FaGithubSquare size={30}/></a>
                    </div>
                    <div className='socials'>
                        <a href="https://twitter.com/lackofserenity" target="_blank" rel="noreferrer"><FaTwitterSquare size={30}/></a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer