import React from 'react';

const Projects = () => {
  return (
    <div name="projects" className='w-full'>
      <section>
        <div className='title'>
          <h2 className='subtitle'>Projects</h2>
          </div>
          <div className='flex justify-center'>
            <p className='text-xl mb-3 dark:text-[var(--primary2)]'>Here we sample a few of my <span className='span'>projects</span></p>
          </div>
        <div className='grid grid-cols-2 w-full h-full max-w-[1000px] mx-auto'>
          <div className='relative mx-5 rounded-md'>
            <img src="./images/pet-shop-website-template.jpg" alt="ecommerce website" className='animated-image' />
            <div className='project'>
              <a href="https://farmart-delta.vercel.app/" target="_blank" className='hover:text-[var(--secondary)]'>CODE</a>
              <a href="/" className='hover:text-[var(--secondary)]'>DEMO</a>
            </div>
          </div>
          <div className='relative mx-5 rounded-md'>
            <img src="./images/Screenshot from 2023-07-25 14-52-53.png" alt="event-booking" className='animated-image' />
            <div className='project'>
              <a href="https://events-manager-rose.vercel.app" target="_blank" className='hover:text-[var(--secondary)]'>CODE</a>
              <a href="/" className='hover:text-[var(--secondary)]'>DEMO</a>
            </div>
          </div>
          <div className='relative mx-5 rounded-md'>
            <img src="./images/Fast_X_poster.jpg" alt="movie-shop" className='animated-image' />
            <div className='project'>
              <a href="https://main--glittery-churros-16eb39.netlify.app/" target="_blank" className='hover:text-[var(--secondary)]'>CODE</a>
              <a href="/" className='hover:text-[var(--secondary)]'>DEMO</a>
            </div>
          </div>
          <div className='relative mx-5 rounded-md'>
            <img src="./images/covid.jpg" alt="motor-app" className='animated-image' />
            <div className='project'>
              <a href="https://github.com/DKarimi90/Covid-Tracker" target="_blank" className='hover:text-[var(--secondary)]'>CODE</a>
              <a href="/" className='hover:text-[var(--secondary)]'>DEMO</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;


