import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [darkmode, setDarkMode] = useState(false);

  useEffect(() =>{
    if (darkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkmode]);

  return (
    <>
      <section class="bg-black h-100 md:h-screen ">
        <div class="p-4 flex justify-between items-center   py-10 w-11/12  ">
          <img src={`${import.meta.env.BASE_URL}images/Group 214.png`} alt="hero" class="w-10 relative bottom-8" />
          <p className='text-amber-50 items-center text-2xl'>20+ SaaS Waitlist <br/>  Landing Page Examples</p>
          <img src={`${import.meta.env.BASE_URL}images/Figma.png`} alt="figma" className='w-7'/>
        </div>
        
        <img src={`${import.meta.env.BASE_URL}images/Image wrap.png`} alt="wrap"  className="px-2 absolute top-67 md:top-78"/>
      </section>

      <section className='relative h-screen overflow-hidden bg-blue-100 dark:bg-black flex flex-col align-middle items-center p-2'>
        <div className='absolute left-10  h-72 w-72 md:left-90  rotate-1 rounded-tl-full rounded-br-full bg-blue-300/50 blur-xl'></div>
        <div className='absolute right-10 top-110 h-72 w-72 md:right-90 rotate-1 rounded-tl-full rounded-br-full bg-blue-300/50 blur-xl'></div>
        <div className='absolute bottom-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-300/30 blur-[120px]'></div>

        <nav className='flex justify-around align-middle p-1 backdrop-blur-sm mt-3 bg-blue-300/30 mb-15'>
          <div className='flex justify-around gap-25 rounded-sm bg-white dark:bg-black p-1 '>
            <img src={`${import.meta.env.BASE_URL}images/cycle.svg`} alt="" className='w-3' />
            <ul className='flex gap-5 text-sm dark:text-white'>
              <li>Updates</li>
              <li>Faq</li>
              <li>Contact Us</li>
            </ul>
            <button onClick={() => setDarkMode(!darkmode)}> 
              <img src={`${import.meta.env.BASE_URL}images/sunshine.svg`} alt="" className='w-3' />
            </button>
          </div>
          
        </nav>

        <div className='flex p-1 border-blue-300 bg-blue-300/30 w-45 mb-1'>
          <div className='backdrop-blur-sm bg-white rounded-lg p-1 text-sm w-50 flex justify-between px-2 dark:bg-black dark:text-white'><h6>Waitlist v1</h6> <h6>Coming soon</h6></div>
        </div>
        

        <p className='backdrop-blur-sm text-4xl md:text-6xl md:w-3xl font-bold text-center mb-4 dark:text-white'>The software that sparks your imagination</p>
        <p className='backdrop-blur-sm text-center mb-4 md:w-2xl dark:text-white'>Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
        <div className='backdrop-blur-sm flex flex-col gap-3 bg-blue-300/30 p-2 m-5 w-60'>
          <div className='bg-white rounded-sm p-1 flex  dark:bg-black dark:text-white'>
            <img src={`${import.meta.env.BASE_URL}images/envelope.svg`} alt=""  className='w-5 mr-1.5' />
            <input type="email" placeholder='Your email..' className='px-1'></input>
          </div>
          
          <button className='bg-black text-white rounded-sm text-sm p-1'>Join the waitlist</button>
        </div>

        <div className='backdrop-blur-sm'>

        <div className='flex relative right-10 justify-center items-center align-middle'>
          <img src={`${import.meta.env.BASE_URL}images/avatar.png`} alt=""  className='w-10 h-10 absolute left-5 '/>
          <img src={`${import.meta.env.BASE_URL}images/avatar.png`} alt="" className='w-10 h-10 absolute left-10 '/>
          <img src={`${import.meta.env.BASE_URL}images/avatar.png`} alt="" className='w-10 h-10 absolute left-15'/>
          <img src={`${import.meta.env.BASE_URL}images/avatar.png`} alt="" className='w-10 h-10 absolute left-20'/>
          <img src={`${import.meta.env.BASE_URL}images/avatar.png`} alt="" className='w-10 h-10 '/>
        </div>

        </div>
        <p className='backdrop-blur-sm dark:text-white'>Join the <strong>2000+</strong> members who have already signed up</p>
      </section>

      <section className='grid md:grid-cols-2 font-playfair'>
          
          <section className="bg-[url('/src/assets/house.jpg')] bg-cover  bg-position-[22%_center] md:bg-position-[1%_center] bg-no-repeat h-screen relative  ">
            <div className="absolute inset-0 bg-black/40"></div>
            
            <div className='relative z-10 p-20'>
              <h1 className='text-3xl  text-white font-extrabold p-5'>June Homes</h1>
              <div className='flex flex-col p-5'>
                <p className='text-3xl  text-white font-extrabold '>Nothing fits?</p>
                <p className='text-3xl  text-white font-extrabold mb-4 '>Here's the waitlist</p>
                <p className="text-white">Tell us what kind of home you need and we'll reach you when it becomes available</p>
              </div>
            </div>
            
          </section>
          <section className='juneWaitlist p-7 font-playfair'>
              <ul className='flex justify-around gap-1.5 mb-10'>
                <li>Promotions</li>
                <li>FaQs</li>
                <li>All Homes</li>
                <button className='bg-black text-white p-1.5'>Find Your Home</button>
              </ul>

            <h2 className='text-2xl mb-5' >What home do you need?</h2>
            <form action="" className=' '>
              <div className=' grid grid-cols-2 gap-5 mb-5'>
                    <div className='flex flex-col gap-2 mb-5'>
                  <label htmlFor="text">Country you need</label>
                  <select name="Place" id="" className='box'>
                    <option value="">Nigeria</option>
                    <option value="Seoul">Korea</option>
                    <option value="Lagos">South Africa</option>
                    <option value="New York">USA</option>
                  </select>
                </div>
                
                <div className='flex flex-col gap-2'>
                  <label htmlFor="text">City</label>
                  <select name="Place" id="" className='box'>
                    <option value="">Cape</option>
                    <option value="Seoul">Seoul</option>
                    <option value="Lagos">Lagos</option>
                    <option value="New York">New York</option>
                  </select>
                </div>

                <div className='flex flex-col gap-2'>
                  <label htmlFor="">When are you planning on moving?</label>
                  <input type="date"  className='box font-light border-neutral-300'/>
                </div>
                
                <div className='flex flex-col gap-2'>
                  <label htmlFor="">What lease term are you looking?</label>
                  <select name="Place" id="" className='box'>
                    <option value="">1-3 months</option>
                    <option value="Seoul">6 months</option>
                    <option value="Lagos">12 months</option>
                    <option value="New York">5 years</option>
                  </select>
                </div>
                
                <div className='flex flex-col gap-2'>
                  <label htmlFor="text">What is your name?</label>
                  <input type="text"  className='box font-light border-neutral-300' placeholder='Your name' />
                </div>
          
                <div className='flex flex-col gap-2'>
                  <label htmlFor="text">What is your email?</label>
                  <input type="email"  className='box font-light border-neutral-300' placeholder='Your email'/>
                </div>
              </div>
              
              <div className='flex flex-col gap-0.5'>
                <label htmlFor="">Your comments</label>
                <input type="text"  className='box mb-5'/>
              </div>
              <ul className='mb-5'>
                <li >
                  <input type="checkbox" />Yes, I would like to recieve emails and text messages with news  from June Homes
                </li>
              </ul>

              <div className='flex justify-center align-middle p-2 bg-black '>
                <button className=' text-white align-middle '>ADD TO WAITLIST</button>
              </div>
              
             </form>


      </section>
      </section>
      
    </>
  )
}



export default App

