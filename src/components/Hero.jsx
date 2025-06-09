import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
    const contentRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = 3;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalSlides);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.transform = `translateX(-${currentIndex * 100}vw)`;
        }
    }, [currentIndex]);

    return (
        <div className="min-h-screen w-full relative " id="hero">
            <div className="w-full h-screen relative bg-black  ">
                <div className="w-full h-screen overflow-hidden">
                    <div
                        ref={contentRef}
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ width: `${totalSlides * 100}vw` }}
                    >
                        <img
                            src="./img/slide_1.jpg"
                            alt="Slide 1"
                            className="w-screen h-screen object-cover"
                        />
                        <img
                            src="./img/slide_2.jpg"
                            alt="Slide 2"
                            className="w-screen h-screen object-cover"
                        />
                        <img
                            src="./img/slide_3.jpg"
                            alt="Slide 3"
                            className="w-screen h-screen object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Content overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
                <div className="text-center text-white px-4">
                    <h1 className="text-4xl sm:text-5xl md:text-8xl  font-bold mb-4 tracking-wide drop-shadow-md    font-serif italic ">
                        Prime Chiya
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl mb-8 italic opacity-90 ">
                        Where conversations begin!!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#menu"
                            className="hover:opacity-75 px-6 py-3 sm:px-8 sm:py-4 bg-[var(--primary)] text-white rounded-lg text-base sm:text-lg font-medium hover:bg-opacity-90 transition-all duration-300"
                        >
                            View Menu
                        </a>
                        <a
                            href="#contact"
                            className="hover:opacity-75 px-6 py-3 sm:px-8 sm:py-4 bg-white text-[var(--primary)] rounded-lg text-base sm:text-lg font-medium hover:bg-gray-100 transition-all duration-300"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>


        </div>
    );
}
