import React from 'react'

const Experience = () => {
  return (
    <div id="experience" className='w-full py-[5rem] px-4 bg-[blanchedalmond]'>
        <div className='box-recent  text-center pd-40px w-20 mx-40'>
            <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-6 '>experience</h1>
        </div>
        <div className='container'>
            <div className='timeline'>
                <ul>
                    <li>
                        <div className='timeline-content'>
                            <h2 class="date">02/2021 - 03/2021</h2>
                            <h1>City of Vaughan</h1>
                            <p>STEM Instructor</p>
                            <p>Instructing HTML Web Development and STEM Courses for ages 6-12 virtually, as well as creating lesson plans for each course</p>
                        </div>
                    </li>
                    <li>
                        <div className='timeline-content'>
                            <h2 class="date">09/2020 - present</h2>
                            <h1>Sheridan College</h1>
                            <p>Pursuing an Honours Bachelor of Information Sciences (Cyber Security)</p>
                        </div>
                    </li>
                    <li>
                        <div className='timeline-content'>
                            <h2 class="date">09/2021 - 05/2023</h2>
                            <h1>Bell Canada</h1>
                            <p>Sales Consultant</p>
                            <p>Building connections with customers to determine the best solutions for their needs, including Internet, TV, and Mobility services.</p>
                        </div>
                    </li>
                    <li>
                        <div className='timeline-content'>
                            <h2 class="date">05/2023 - present</h2>
                            <h1>Government of Canada</h1>
                            <p>Cyber Security Analyst</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Experience