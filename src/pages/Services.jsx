import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-20 space-y-24">
      {/* Page Heading */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Our Ayurvedic Services</h1>
        <p className="text-gray-600 text-lg">
          Discover our range of holistic services designed to restore balance, vitality, and well-being — rooted in ancient Ayurvedic wisdom.
        </p>
      </section>

      {/* Services Grid */}
      <section>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Personalized Ayurveda Consultation",
              desc: "One-on-one sessions with certified Ayurvedic practitioners to understand your dosha and create a custom wellness plan.",
              link: "/services/consultation",
            },
            {
              title: "Herbal Therapy & Detox Plans",
              desc: "Tailored herbal programs and detox routines that align with your body type and lifestyle.",
              link: "/services/herbal-therapy",
            },
            {
              title: "Panchakarma Treatments",
              desc: "Experience deep purification and rejuvenation with our traditional Panchakarma therapy.",
              link: "/services/panchakarma",
            },
            {
              title: "Diet & Lifestyle Coaching",
              desc: "Learn how to align your nutrition, daily routine, and habits with Ayurvedic principles.",
              link: "/services/lifestyle",
            },
            {
              title: "Workshops & Webinars",
              desc: "Join our interactive sessions on Ayurvedic living, herbal self-care, and seasonal health practices.",
              link: "/services/workshops",
            },
            {
              title: "Yoga & Meditation Guidance",
              desc: "Access guided sessions that complement Ayurvedic healing through mindful movement and breathwork.",
              link: "/services/yoga",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.desc}</p>
              <Link
                to={service.link}
                className="inline-block bg-primary text-white py-2 px-4 rounded-full hover:bg-opacity-90 transition"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <h2 className="text-3xl font-semibold text-center text-primary mb-10">Why Choose Forest Veda?</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            {
              icon: "/assets/natural-icon.svg",
              title: "Authentic & Natural",
              desc: "We only use 100% organic, traditionally sourced herbs in every recommendation and treatment.",
            },
            {
              icon: "/assets/balance-icon.svg",
              title: "Certified Experts",
              desc: "Our team includes certified Ayurvedic doctors, lifestyle coaches, and herbalists.",
            },
            {
              icon: "/assets/energy-icon.svg",
              title: "Holistic Approach",
              desc: "We integrate diet, detox, herbal care, and mindfulness for complete well-being.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-xl hover:shadow-md transition">
              <img
                src={item.icon}
                alt={item.title}
                className="w-14 h-14 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold text-primary mb-4">Start Your Wellness Journey Today</h2>
        <p className="text-gray-600 mb-6">
          Schedule a consultation or explore our programs to begin your transformation through Ayurveda.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-primary text-white py-3 px-6 rounded-full text-lg hover:bg-opacity-90 transition"
        >
          Book a Session
        </Link>
      </section>
    </div>
  );
};

export default Services;
