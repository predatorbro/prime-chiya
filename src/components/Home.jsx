import React from 'react'
import { useState, useRef, useEffect } from 'react' 

function Home() {
  const [count, setCount] = useState(0);
  const contentRef = useRef(null);

  const handlePrev = () => {
    const imgLength = contentRef.current.children.length;
    setCount((prev) => (prev - 1 + imgLength) % imgLength);
  };

  const handleNext = () => {
    const imgLength = contentRef.current.children.length;
    setCount((prev) => (prev + 1) % imgLength);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const imgLength = contentRef.current.children.length;
      setCount((prev) => (prev + 1) % imgLength);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const content = contentRef.current;
    if (content) {
      const containerWidth = content.parentElement.offsetWidth;
      const slideWidth = containerWidth;
      content.style.transform = `translateX(-${count * slideWidth}px)`;
    }
  }, [count]);

  return (
    <div className="flex flex-col lg:flex-row w-full relative" id="home">
      <div className="w-full lg:w-1/2">
        <div className="slider-box overflow-hidden aspect-square relative">
          <div
            className="content flex h-full transition-transform duration-700 ease-in-out"
            ref={contentRef}
            style={{ width: '100%' }}
          >
            <img src="/img/res_img_1.jpg" alt="img1" className="w-full h-full object-cover flex-shrink-0" />
            <img src="/img/res_img_2.jpg" alt="img2" className="w-full h-full object-cover flex-shrink-0" />
            <img src="/img/res_img_3.jpg" alt="img3" className="w-full h-full object-cover flex-shrink-0" />
            <img src="/img/res_img_4.jpg" alt="img4" className="w-full h-full object-cover flex-shrink-0" />
            <img src="/img/res_img_5.jpg" alt="img5" className="w-full h-full object-cover flex-shrink-0" />
          </div>
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button 
              onClick={handlePrev}
              className="bg-[var(--primary)] text-white p-2 rounded-full hover:bg-opacity-80 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="bg-[var(--primary)] text-white p-2 rounded-full hover:bg-opacity-80 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center items-center p-6 md:p-8 lg:px-12">
        <div className="max-w-2xl space-y-4 md:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--primary)]">About</h1>
          <div className="space-y-3 md:space-y-4 text-gray-700">
            <p className="text-base md:text-lg leading-relaxed">
              Welcome to Prime Chiya, where tradition meets modern comfort. Our cozy cafe is more than just a place to enjoy tea - it's a sanctuary where the rich aroma of freshly brewed chai mingles with the warmth of community.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              We take pride in crafting the perfect cup of chai using carefully selected spices and premium tea leaves. Each sip tells a story of heritage and passion, served in an atmosphere that invites you to relax, connect, and savor the moment.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              From our signature masala chai to innovative fusion flavors, every cup is brewed with love and served with a smile. Join us in celebrating the timeless tradition of chai in a contemporary setting.
            </p>
          </div>
          <div className="interactionBtns flex gap-3 md:gap-6 pt-4 md:pt-6 flex-col sm:flex-row">
            <button className="transform hover:scale-105 transition-transform w-full sm:w-auto">
              <a href={"#menu"} className='w-full block text-center lg:px-8 lg:py-3 px-4 py-2 font-medium rounded-md bg-[var(--primary)] text-white hover:bg-opacity-90'>
                View Menu
              </a>
            </button>
            <button className="transform hover:scale-105 transition-transform w-full sm:w-auto">
              <a href={"#contact"} className='w-full block text-center lg:px-8 lg:py-3 px-4 py-2 font-medium rounded-md bg-[var(--primary)] text-white hover:bg-opacity-90'>
                Contact Us
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home