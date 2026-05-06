import './App.css'

function App() {

  return (
    <>
      <section class="bg-black  ">
        <div class="p-4 flex justify-between items-center   py-10 w-11/12  ">
          <img src="./src/assets/Group 214.png" alt="hero" class="w-10 relative bottom-8" />
          <p className='text-amber-50 items-center text-2xl'>20+ SaaS Waitlist <br/>  Landing Page Examples</p>
          <img src="./src/assets/Figma.png" alt="figma" className='w-7'/>
        </div>
        
        <img src="./src/assets/Image wrap.png" alt="wrap"  class="px-2"/>
      </section>

      <section className='bg-amber-700 bg-linear-to-r from-blue-500 via-indigo-600 to-purple-500 '>
        <p>my name is John Doe</p>
        <p>my name is John Doe</p>
        <p>my name is John Doe</p>
      </section>

      <section className='grid md:grid-cols-2'>
          
          <section className="bg-[url('/src/assets/house.jpg')] bg-cover  bg-[22%_center] md:bg-[1%_center] bg-no-repeat h-screen relative  ">
            <div className="absolute inset-0 bg-black/40"></div>
            
            <div className='relative z-10 '>
              <h1 className='text-3xl  text-blue-700 font-extrabold p-5'>June Homes</h1>
              <div className='flex flex-col p-5'>
                <p className='text-3xl  text-blue-700 font-extrabold '>Nothing fits?</p>
                <p className='text-3xl  text-blue-700 font-extrabold mb-4 '>Here's the waitlist</p>
                <p>Tell us what kind of home you need and we'll reach you when it becomes available</p>
              </div>
            </div>
            
          </section>
          <section className='juneWaitlist p-7'>
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
