import React from 'react';

const VideoSection = () => {
  return (
    <div className='bg-[#2E234B] text-white'>
      <div className="w-full h-full flex justify-center items-center px-3 md:px-10 xl:px-20 pt-12 py-8">
        <div className=' flex flex-col gap-4 items-center px-4 md:px-10 text-center'>
          <h1 className='text-[2rem] md:text-[2.5rem] 2xl:text-[2.5vw] custom-font'>
            Your Book Deserves to Be Seen and Celebrated
          </h1>
          <h5 className='text-xl md:text-2xl'>
            Fleck Publisher supports writing enthusiasts in their journeys:
          </h5>
          <p className='text-md'>
            Are you an author with a half-written manuscript, an entrepreneur or coach with some lessons to offer,
            a literary artist with a message worth sharing? We have the time and skill to take you to the launch!
          </p>
          {/* Responsive Video Section */}
          <div className='w-full max-w-3xl mt-6 aspect-w-16 aspect-h-9'>
            <video
               src="/Bg-Video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className='w-full h-   object-cover rounded-lg shadow-md'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoSection;