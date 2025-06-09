import React from 'react';

const drinks = [
  { name: 'Chai', price: 2.99, image: '/img/res_img_1.jpg' },
  { name: 'Coffee Shake', price: 4.50, image: '/img/res_img_2.jpg' },
  { name: 'Iced Latte', price: 3.99, image: '/img/res_img_3.jpg' },
  { name: 'Green Tea', price: 2.50, image: '/img/res_img_4.jpg' },
  { name: 'Mango Smoothie', price: 5.25, image: '/img/res_img_5.jpg' },
  { name: 'Cold Brew', price: 3.75, image: '/img/slide_1.jpg' },
  { name: 'Strawberry Shake', price: 4.00, image: '/img/slide_2.jpg' },
  { name: 'Hot Chocolate', price: 3.20, image: '/img/slide_3.jpg' },
  { name: 'Mocha Frappe', price: 4.80, image: '/img/res_img_1.jpg' },
  { name: 'Lemon Mint Juice', price: 3.40, image: '/img/res_img_2.jpg' },
];

const snacks = [
  { name: 'Momo', price: 6.50, image: '/img/res_img_3.jpg' },
  { name: 'Cookies', price: 2.99, image: '/img/res_img_4.jpg' },
  { name: 'Chowmein', price: 7.25, image: '/img/res_img_5.jpg' },
  { name: 'Chicken Wings', price: 8.75, image: '/img/slide_1.jpg' },
  { name: 'Samosa', price: 1.99, image: '/img/slide_2.jpg' },
  { name: 'French Fries', price: 3.50, image: '/img/slide_3.jpg' },
  { name: 'Spring Rolls', price: 4.25, image: '/img/res_img_1.jpg' },
  { name: 'Veg Sandwich', price: 4.80, image: '/img/res_img_2.jpg' },
];

const MenuSection = ({ title, icon, items }) => (
  <div className="w-full md:w-1/2 px-4">
    <div className="flex items-center mb-6">
      <span className="text-3xl mr-3 text-[var(--primary)]">{icon}</span>
      <h2 className="text-2xl italic font-semibold text-[var(--primary)]">{title}</h2>
    </div>
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between border-b pb-2"
        >
          <div className="flex items-center space-x-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <p className="font-semibold text-lg text-gray-50">{item.name}</p>
              <p className="text-gray-100 text-sm">Tasty and satisfying</p>
            </div>
          </div>
          <div className="text-[var(--primary)] font-semibold text-md">${item.price.toFixed(2)}</div>
        </div>
      ))}
    </div>
  </div>
);

const FoodMenu = () => (
  <section className="py-20 bg-white px-4 bg-[url('/img/broken_noise.png')] w-full" id="menu">
    <div className="max-w-7xl mx-auto text-center mb-12">
      <h1 className="text-4xl font-semibold italic mb-4 text-[var(--primary)]">Food Menu</h1>
      <p className="text-gray-100 max-w-xl mx-auto">
        A collection of refreshing drinks and delicious snacks to brighten your day.
      </p>
    </div>
    <div className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto px-4 md:px-12">
      <MenuSection title="Drinks" icon="🍹" items={drinks} />
      <MenuSection title="Snacks" icon="🍽️" items={snacks} />
    </div>
  </section>
);

export default FoodMenu;
