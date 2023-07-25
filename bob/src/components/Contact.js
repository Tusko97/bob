import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full'>
      <section>
      <div className='title'>
        <h2 className='subtitle'>Let's Engage</h2>
        </div>
        <div>
        <div className="flex justify-center items-center">
          <div className="container mx-auto my-4 px-4 lg:px-20">
            <form method="POST" action="https://getform.io/f/921232b8-36c6-47eb-9946-5af2b6f3ae05" className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl dark:bg-[var(--primary)]">
              <div className="flex">
                <h1 className="font-bold uppercase md:text-2xl dark:text-[var(--secondary1)]">Send me a message</h1>
              </div>
              <div className="grid grid-cols-1 gap-1 md:grid-cols-2 mt-5">
                <input className="form-input" type="text" placeholder="First Name*" name="first_name" required/>
                <input className="form-input" type="text" placeholder="Last Name*" name="last_name" required/>
                <input className="form-input" type="email" placeholder="Email*" name="email" required/>
                <input className="form-input" type="phone" placeholder="Phone*" name="phone" required/>
                <textarea placeholder="Message*" rows="10" className=" form-input w-full bg-[var(--primary3)] p-3" defaultValue={""} />
              </div>
              <div className="mt-1">
                <button className="btn dark:text-[var(--secondary1)] dark:bg-[#000]">SEND MESSAGE</button>
              </div>
            </form>
            <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-[var(--primary2)] rounded-2xl dark:bg-[#000]">
              <div className="flex flex-col text-white dark:text-[var(--secondary1)]">
                <h1 className="font-bold uppercase text-2xl md:text-4xl my-4 dark:text-[var(--secondary1)]">Drop by the office</h1>
                <p className=''>Welcome to our office! We provide a warm and inviting environment for our clients to visit. Our team is ready to assist you with any web development needs you have. Come experience our professional workspace and discover how we can bring your digital vision to life. Feel free to stop by, meet our team, and discuss your project in person. We look forward to collaborating with you and creating exceptional web solutions together.
                </p>
                <div className="flex my-4 w-2/3 lg:w-1/2">
                  <div className="flex flex-col">
                    <i className="fas fa-map-marker-alt pt-2 pr-2">
                    </i></div>
                    <div className="flex flex-col">
                      <h2 className="text-2xl">Main Office</h2>
                      <p >Naivasha Rd, off-Ngong Rd, NRB.</p>
                    </div>
                  </div>
                  <div className="flex my-4 w-2/3 lg:w-full">
                    <div className="flex flex-col">
                      </div>
                      <div className="flex flex-col">
                        <h2 className="text-2xl">Call Us</h2>
                        <p>Tel: +254-727-081-637</p>
                        <p>Telegram: 0727-081-637</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}

export default Contact
