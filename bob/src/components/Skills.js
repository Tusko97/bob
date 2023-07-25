import React from 'react'
import {TbBrandHtml5, TbBrandCss3, TbBrandJavascript, TbBrandReact, TbBrandTailwind} from 'react-icons/tb'
import {SiRubyonrails} from 'react-icons/si'
import {DiRubyRough, DiPostgresql} from 'react-icons/di'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
// functionality for sliding in image logos
const [ref, inView] = useInView({
  triggerOnce: false, 
  threshold: 0.1
})
  return (
    <div name="skills" className='w-full md:mb-20'>
      <section className='w-full h-full max-w-[1000px] mx-auto'>
        <div className='title'>
          <h2 className='subtitle'>Skills</h2>
          </div>
        <div className='grid grid-cols-4 gap-4 px-4'>
          <div className={`logo transition duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} ref={ref}>
            <TbBrandHtml5 className="w-full h-full object-cover py-3 text-[#E44D26]"/>
            <span className='logo-labels left-14 md:left-20'>HTML</span>
          </div>
          <div className={`logo transition duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} ref={ref}>
            <TbBrandCss3 className="w-full h-full object-cover py-3 text-[#274DE4]"/>
            <span className='logo-labels left-14 md:left-20'>CSS3</span>
          </div>
          <div className={`logo transition duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} ref={ref}>
            <TbBrandJavascript className="w-full h-full object-cover py-3 text-[#D6BA32]"/>
            <span className='logo-labels left-8 md:left-14'>JavaScript</span>
          </div>
          <div className={`logo transition duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} ref={ref}>
            <TbBrandReact className="w-full h-full object-cover py-3 text-[#61DBFB]"/>
            <span className='logo-labels left-12 md:left-16 lg:left-20'>React</span>
          </div>
        <div className={`logo transition duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} ref={ref}>
            <TbBrandTailwind className="w-full h-full object-cover py-3 text-[#00B8D6]"/>
            <span className='logo-labels left-10 md:left-16'>TailWind</span>
          </div>
          <div className={`logo transition duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} ref={ref}>
            <DiRubyRough className="w-full h-full object-cover py-3 text-[#AF1409]"/>
            <span className='logo-labels left-12 md:left-20'>Ruby</span>
          </div>
          <div className={`logo transition duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} ref={ref}>
            <DiPostgresql className="w-full h-full object-cover py-3 text-[#336791]"/>
            <span className='logo-labels left-8 md:left-16'>Postgresql</span>
          </div>
          <div className={`logo transition duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} ref={ref}>
            <SiRubyonrails className="w-full h-full object-cover py-3 text-[#CC020C]"/>
            <span className='absolute bottom-0 left-5 md:left-16 md:text-md lg:text-lg dark:text-[var(--secondary1)] text-sm'>Ruby on Rails</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills