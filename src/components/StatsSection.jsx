import React from "react";

const stats = [
    {
        icon: <i className="fa-solid fa-store"></i>,
        title: "Outlets",
        description:
            "Started with a vision to serve delicious and varied meals at affordable prices, we currently operate three outlets in schools across the city."
    },
    {
        icon: <i className="fa-solid fa-users"></i>,
        title: "Team",
        description:
            "With five staff, including three chefs and two helpers, we ensure delicious meals and seamless operations."
    },
    {
        icon: <i className="fa-solid fa-trophy"></i>,
        title: "Achievements",
        description:
            "Celebrating an achievement worth savoring, we take pride in serving over 1500 students each day."
    },
    {
        icon: <i className="fa-solid fa-stars"></i>,
        title: "Goals",
        description:
            "We're on a mission to expand from 3 to 6 outlets and be capable of serving 5000 students with exceptional dining experiences each day."
    }
];

const StatsSection = () => {
    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat py-20 px-4 text-white w-full"
            style={{ backgroundImage: `url('/img/slide_3.jpg')` }}
            id="explore"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl"
                    >
                        <div className="mb-4 p-4 rounded-full text-4xl sm:text-5xl text-[var(--primary)]">
                            {stat.icon}
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold italic mb-2">{stat.title}</h3>
                        <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                            {stat.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatsSection;
