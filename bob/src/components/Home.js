import { useEffect, useState } from 'react'
import ReactTyped from 'react-typed'
import { Link } from 'react-scroll'
import {BsGithub, BsFacebook, BsLinkedin, BsWhatsapp, BsTwitter} from 'react-icons/bs'
import {SlArrowUp} from 'react-icons/sl'

const Home = () => {
const [showButton, setShowButton] = useState()

// Handling the scroll-to-top button
useEffect(() => {
const handleScrollButton = () => {
const scrollTop = window.pageYOffset; 
const threshold = 100;

setShowButton(scrollTop > threshold)
}
window.addEventListener('scroll', handleScrollButton); 
return () => window.removeEventListener('scroll', handleScrollButton)
},[])

  return (
    <div name='home' className='w-full pt-32'>
        <section className='w-full h-full max-w-[1000px] mx-auto flex flex-col justify-center px-6'>
            <div>
                <div className='w-full flex justify-between items-center'>
                    <h2 className='text-xl md:text-3xl px-2 dark:text-[var(--primary1)]'>Hi, I AM</h2>
                    <button className='btn text-sm sm:text-lg font-bold md:text-xl animated-image dark:text-[var(--secondary2)] dark:hover:text-[#fff]'><Link to="contact" smooth={true} duration="700" activeClass='active-link' spy={true}>Shoot me an email</Link></button>
                </div>
                <h1 className='text-4xl md:text-8xl font-bold text-[var(--secondary2)]'>Mark Mutuku</h1>
             </div>
             <div className='text-2xl md:text-4xl px-2 mt-4 text-[var(--primary2)]'>
                <ReactTyped 
                    strings={['A software Developer']}
                    typeSpeed={30}
                />
             </div>
             <div className='text-2xl px-2 mt-6 dark:text-[var(--primary1)]'>
                <ReactTyped 
                    strings={[
                        'Currently focused on',
                        'developing fully-responsive', 
                        'full-stack web applications.'
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
             </div>
             <div className='px-2 mt-6'>
                <button className='btn'><Link to="about" smooth={true} duration="700">More...</Link></button>
             </div>
             <div className='mt-8 dark:text-[var(--primary1)] hover:text-[var(--secondary2)] dark:hover:text-[var(--primary2)]'>
                    <a className='flex items-center' href="https://github.com/Tusko97" target="_blank" rel="noreferrer" >Jump straight to my Github <span> <BsGithub className='ml-6'/></span></a>             
             </div>
             <div className='flex justify-evenly mt-6 text-3xl dark:text-[var(--primary1)] max-w-[600px]'>
                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><BsLinkedin className='icon dark:hover:text-white'/></a>
                <a href="/"><BsFacebook className='icon dark:hover:text-white'/></a>
                <a href="/"><BsTwitter className='icon dark:hover:text-white'/></a>
                <a href="/"><BsWhatsapp className='icon dark:hover:text-white'/></a>
             </div>
        </section>
            <Link to="home" smooth={true} duration="700"><button className={`fixed bottom-2 right-3 z-10 bg-[var(--primary2)] p-4 rounded-full animate-bounce ${showButton? 'block': 'hidden'}`}><SlArrowUp /></button></Link>
    </div>
  )
}

export default Home