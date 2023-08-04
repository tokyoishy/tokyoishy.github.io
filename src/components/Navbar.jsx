import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='navbar'>
            <div className=' flex justify-between items-center max-w-[1240px] mx-auto px-4'>
                <h1 className='text-[white] w-full text-3xl font-bold'>ismaeel</h1>
                <ul className='hidden md:flex'>
                    <a href="#home"><li className='p-4 text-white'>home</li></a>
                    <a href="#about"><li className='p-4 text-white'>about</li></a>
                    <a href="#experience"><li className='p-4 text-white'>experience</li></a>
                    <a href="#recent"><li className='p-4 text-white'>projects</li></a>
                    <a href="#contact"><li className='p-4 text-white'>contact</li></a>
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </div>
                <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-grey-900 bg-white ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <h1 className='text-[black] w-full text-3xl font-bold m-4'>ismaeel</h1>
                    <ul className='p-4 lowercase'>
                        <a href="#home"><li className='p-4 border-b'>home</li></a>
                        <a href="#about" onClick={handleNav}><li className='p-4 border-b'>about</li></a>
                        <a href="#experience"><li className='p-4 border-b'>experience</li></a>
                        <a href="#recent"><li className='p-4 border-b'>projects</li></a>
                        <a className='anchor' href="#contact"><li className='p-4 border-b'>contact</li></a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar