import React from 'react'
import laptop_image from '../assets/laptop.jpg';

const About = () => {
    return (
        <div id="about" className='w-full bg-white py-16'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='laptop-img w-[500px]' src={laptop_image} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='about-text text-[black] font-bold'>third year cybersecurity student</p>
                    <h1 className='about-text md:text-4xl sm:text-3xl text-2xl font-bold py-2'>continously learning</h1>
                    <p className='about-text'>
                        I’m passionate about all things tech, and dedicated towards a career in <b>Cyber Security</b>. 
                        Currently a student working towards an <b>Honours Bachelor of Applied Information Sciences</b> at Sheridan College, and always looking for ways to learn and become the best at what I do. 
                        I’m always looking for new ways to improve, and learning from fellow students and professionals in the space.
                    </p>
                    <a href="https://www.linkedin.com/in/ismaeel-aziz" target="_blank" rel="noreferrer"><button className='connect-btn bg-[blanchedalmond] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black'>let's connect!</button></a>
                </div>
                
            </div>
        </div>
    );
};

export default About;