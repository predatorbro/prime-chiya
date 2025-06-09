import React from 'react';

const ContactSection = () => {
    return (
        <section className="bg-white text-gray-800  py-20 px-4 md:px-8" id="contact">
            {/* Header */}
            <div className="text-center mb-12">
                <div className="text-4xl mb-4 text-[var(--primary)]">
                    <i className="fa-solid fa-mug-hot"></i>
                </div>
                <h1 className="text-3xl md:text-4xl font-semibold italic mb-4 font-serif">Contact Now</h1>
                <p className="text-gray-600 max-w-2xl mx-auto italic text-base md:text-lg font-serif">
                    "I love connecting with new people. We never know who will bring about a significant
                    change in our lives. Like connecting with new people has brought me to where I am today.
                    So, let's connect now."
                </p>
            </div>

            {/* Main content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                {/* Contact Info */}
                <div>
                    <h2 className="text-xl font-semibold italic mb-6">Contact Info</h2>
                    <ul className="space-y-5 text-base text-gray-700">
                        <li className="flex items-start">
                            <i className="fa-solid fa-location-dot mr-3 text-[var(--primary)]"></i>
                            <span>
                                Santinagar Kathmandu,
                                Nepal
                            </span>
                        </li>
                        <li className="flex items-center">
                            <i className="fa-solid fa-phone mr-3 text-[var(--primary)]"></i>
                            <a
                                href="tel:+9779828926981"
                                className="text-[var(--primary)] hover:underline"
                            >
                                +977 9828926981
                            </a>
                        </li>
                        <li className="flex items-center">
                            <i className="fa-solid fa-envelope mr-3 text-[var(--primary)]"></i>
                            <a
                                href="mailto:chai@gmail.com"
                                className="text-[var(--primary)] hover:underline"
                            >
                                chai@gmail.com
                            </a>
                        </li>
                        <li className="flex items-center">
                            <i className="fa-solid fa-globe mr-3 text-[var(--primary)]"></i>
                            <a
                                href="https://primechiya.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--primary)] hover:underline"
                            >
                                primechiya.com
                            </a>
                        </li>
                    </ul>

                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-6 text-[var(--primary)] text-xl">
                        <a href="#" aria-label="Facebook" className="hover:opacity-75 transition-opacity">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#" aria-label="WhatsApp" className="hover:opacity-75 transition-opacity">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:opacity-75 transition-opacity">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>

                {/* Google Map */}
                <div className="w-full h-80">
                    <iframe
                        title="Google Map"
                        className="w-full h-full shadow-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9249501394115!2d85.34133471161574!3d27.68871437609406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199d75ac2b51%3A0xa012bc7304e3dcc!2sPrime%20Chiya!5e0!3m2!1sen!2snp!4v1749454434344!5m2!1sen!2snp"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
