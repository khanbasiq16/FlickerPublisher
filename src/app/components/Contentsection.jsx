import React from 'react'

const Contentsection = () => {
  return (
    <>
    

    <section className='w-full   flex flex-col md:flex-row my-20 px-20 '>

        
    <div className='w-full md:w-1/2 border-r border-[#2E234B]   flex flex-col gap-4 '>

    <h2   className="text-[#2E234B] text-5xl custom-font  text-center sm:text-center md:text-start  lg:text-4xl  xl:text-4xl  2xl:text-5xl  3xl:text-7xl ">Literary Spotlight</h2>

    <p className='  md:pr-20 text-center md:text-start'>Fleck Publisher clients have been featured across top literary platforms, print and digital journals, podcasts, and media outlets.</p>
    </div>
        
    <div className=' 
 flex justify-center item-center xl:pl-20'>

    <img src="/Group35.png" alt="" />
    </div>

    </section>
    </>
  )
}

export default Contentsection