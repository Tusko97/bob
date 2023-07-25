import React from 'react'
import { Link } from 'react-scroll'

const About = () => {
  return (
    <div name='about' className='w-full px-4'>
        <section className='w-full h-full max-w-[1000px] mx-auto flex flex-col justify-center]'>
          <div className='title'>
            <h2 className='subtitle'>About Me</h2>
            </div>
            <div className='grid md:grid-cols-2 shadow-xl rounded-xl p-4'>
            <div className='flex flex-col'>
              <section>
                <h1 className='text-2xl sm:text-3xl md:text-5xl text-[var(--primary2)] my-5'>I'M BASED IN NAIROBI, KENYA</h1>
              </section>
            </div>
            <div className='flex flex-col'>
              <section>
                <p className='text-md md:text-lg text-[var(--secondary2)]'>With a passion for coding and natural talent for problem-solving, I'm out there to create a positive change in the software development industry. <span className='span'>Mark</span> is a quick learner and enjoys staying current with the latest trends and best practices. He is excited and looking forward to collaborate with others to innovate projects and solutions. I'm willing to take up new projects on a <span className='span'>full-time</span>  or <span className='span'>freelance basis.</span></p>
              </section>
            </div>
          </div>
          <div className='px-2 mt-6 flex justify-center'>
              <button className='btn'><Link to="skills" smooth={true} duration="700">More...</Link></button>
          </div>
        </section>
    </div>
  )
}

export default About