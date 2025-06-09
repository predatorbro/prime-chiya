import React from "react";

const dishes = [
  {
    title: "Fresh Mushrooms",
    price: "$7.50",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    img: "slide_1.jpg",
    bg: "bg-[var(--quinary)]"
  },
  {
    title: "Grilled Chicken Salad",
    price: "$12.00",
    description: "Far far away, behind the word mountains.",
    img: "slide_2.jpg",
  },
  {
    title: "Cheese and Garlic Toast",
    price: "$4.50",
    description: "Far far away, behind the word mountains.",
    img: "slide_3.jpg",
  },
  {
    title: "Organic Egg",
    price: "$4.99",
    description: "Far far away, behind the word mountains.",
    img: "res_img_1.jpg",
  },
  {
    title: "Salad with Crispy Chicken",
    price: "$8.50",
    description: "Far far away, behind the word mountains.",
    img: "res_img_2.jpg",

  },
  {
    title: "Tomato Soup with Chicken",
    price: "$12.99",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    img: "res_img_3.jpg",
    bg: "bg-[var(--quinary)]"
  }
];

const FeaturedDishes = () => {
  return (
    <div className="bg-[url('/img/broken_noise.png')] bg-repeat py-20 md:px-16 text-center w-full px-6" id="featured">
      <h2 className="text-4xl   font-bold  text-white mb-4 flex justify-center items-center gap-2 font-serif italic">

        Featured Dishes
      </h2>
      <p className="text-white  text-md max-w-xl mx-auto mb-12">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.map((dish, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white rounded overflow-hidden shadow-md"
          >
            <div className="w-full md:w-1/2">
              <img
                src={`/img/${dish.img}`}
                alt={dish.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className={`w-full md:w-1/2 p-6 text-left ${dish.bg}`}>
              <h3 className="text-lg font-semibold mb-2">{dish.title}</h3>
              <div className="text-2xl font-bold mb-2 border-b border-orange-400 inline-block pb-1">
                {dish.price}
              </div>
              <p className="text-sm text-gray-700 leading-snug">
                {dish.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedDishes;
