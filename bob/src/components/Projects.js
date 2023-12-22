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
            <img src="https://images.unsplash.com/photo-1528298396603-cbf660af6180?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxhbmltYWwlMjBzaG9wfGVufDB8fDB8fHww" alt="ecommerce website" className='animated-image' />
            <div className='project'>
              <a href="https://farmart-delta.vercel.app/" target="_blank" className='hover:text-[var(--secondary)]'>DEMO</a>
             
            </div>
          </div>
          <div className='relative mx-5 rounded-md'>
            <img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGV2ZW50JTIwYm9va2luZ3xlbnwwfHwwfHx8MA%3D%3D" alt="event-booking" className='animated-image' />
            <div className='project'>
              <a href="https://events-manager-rose.vercel.app" target="_blank" className='hover:text-[var(--secondary)]'>DEMO</a>
              
            </div>
          </div>
          <div className='relative mx-5 rounded-md'>
            <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D" alt="beauty-shop" className='animated-image' />
            <div className='project'>
              <a href="https://the-nail-spot.netlify.app/" target="_blank" className='hover:text-[var(--secondary)]'>DEMO</a>
              
            </div>
          </div>
          <div className='relative mx-5 rounded-md'>
            <img src="https://plus.unsplash.com/premium_photo-1681487870238-4a2dfddc6bcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG8lMjBkbyUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D" alt="to-do app" className='animated-image' />
            <div className='project'>
              <a href="https://strong-raindrop-be683c.netlify.app/" target="_blank" className='hover:text-[var(--secondary)]'>DEMO</a>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;


