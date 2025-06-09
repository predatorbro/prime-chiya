import React, { useEffect, useState } from 'react';

const quotes = [
  {
    text: "Coffee is a language in itself.",
    author: "Jackie Chan",
  },
  {
    text: "A cup of chai solves everything — heartbreaks, headaches, and awkward silences.",
    author: "Anonymous",
  },
  {
    text: "Milkshakes are like hugs you can drink.",
    author: "Unknown",
  },
  {
    text: "I like my coffee like I like myself: strong, sweet, and too hot for you.",
    author: "Jac Vanek",
  },
  {
    text: "Where there's tea, there's hope. Where there's chai, there's magic.",
    author: "Indian Saying",
  },
  {
    text: "You can't be sad when you're holding a cold, thick, chocolate shake.",
    author: "Me",
  },
];

const QuoteSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % quotes.length);
        setIsVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <blockquote className="text-2xl md:text-3xl text-gray-800 italic mb-6">
            "{quotes[current].text}"
          </blockquote>
          <p className="text-gray-500 text-lg">— {quotes[current].author}</p>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {quotes.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                index === current
                  ? 'bg-[var(--primary)] border-[var(--primary)]'
                  : 'bg-gray-300 border-gray-300'
              }`}
              onClick={() => {
                setIsVisible(false);
                setTimeout(() => {
                  setCurrent(index);
                  setIsVisible(true);
                }, 500);
              }}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuoteSlider;
