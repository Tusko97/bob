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
            <img src="./images/karthik-balakrishnan-Y4zNMW3pQAs-unsplash.jpg" alt="event-booking" className='animated-image' />
            <div className='project'>
              <a href="https://events-manager-rose.vercel.app" target="_blank" className='hover:text-[var(--secondary)]'>CODE</a>
              
            </div>
          </div>
          <div className='relative mx-5 rounded-md'>
            <img src="./images/justin-essah-8bPw733XN-g-unsplash.jpg" alt="beauty-shop" className='animated-image' />
            <div className='project'>
              <a href="https://the-nail-spot.netlify.app/" target="_blank" className='hover:text-[var(--secondary)]'>CODE</a>
              
            </div>
          </div>
          <div className='relative mx-5 rounded-md'>
            <img src="./images/yura-fresh-n31x0hhnzOs-unsplash.jpg" alt="to-do app" className='animated-image' />
            <div className='project'>
              <a href="https://strong-raindrop-be683c.netlify.app/" target="_blank" className='hover:text-[var(--secondary)]'>CODE</a>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;


