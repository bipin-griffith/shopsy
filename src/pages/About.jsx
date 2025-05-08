import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-20 space-y-24">
      {/* Hero / Intro */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Welcome to Forest Veda</h1>
        <p className="text-gray-600 text-lg">
          Experience the transformative power of Ayurveda with our 100% natural & herbal products.
        </p>
      </section>

      {/* Our Story */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-primary">Our Story</h2>
        <p className="text-gray-700 text-base leading-relaxed">
          Founded on the ancient wisdom of Ayurveda, Forest Veda is dedicated to bringing you natural, pure, and potent herbal remedies. 
          Our journey began with a passion for holistic healing and a commitment to sustainability. 
          We blend tradition with modern science to create products that nurture the mind, body, and spirit.
        </p>
      </section>

      {/* Philosophy */}
      <section>
        <h2 className="text-3xl font-semibold text-center text-primary mb-10">Our Philosophy</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Holistic Healing",
              desc: "Embracing the balance of body, mind, and spirit through natural remedies.",
            },
            {
              title: "Sustainability",
              desc: "Committed to eco-friendly practices that honor the earth.",
            },
            {
              title: "Innovation",
              desc: "Merging ancient wisdom with modern research to create effective products.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits of Ayurveda */}
      <section>
        <h2 className="text-3xl font-semibold text-center text-primary mb-10">The Benefits of Ayurveda</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              img: "/assets/natural-icon.svg",
              title: "Natural Ingredients",
              desc: "Our products are made with 100% natural and organic herbs.",
            },
            {
              img: "/assets/balance-icon.svg",
              title: "Balance & Harmony",
              desc: "Promoting a balanced lifestyle through holistic healing.",
            },
            {
              img: "/assets/energy-icon.svg",
              title: "Boost Energy",
              desc: "Enhance your vitality and well-being naturally.",
            },
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition duration-300"
            >
              <img
                src={benefit.img}
                alt={benefit.title}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-primary mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workshops */}
      <section>
        <h2 className="text-3xl font-semibold text-center text-primary mb-10">Workshops & Events</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Ayurvedic Lifestyle Workshop",
              desc: "Learn how to integrate Ayurveda into your daily routine.",
              link: "/events",
            },
            {
              title: "Herbal Medicine Seminar",
              desc: "Discover the secrets behind our herbal formulations.",
              link: "/events",
            },
          ].map((event, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.desc}</p>
              <Link
                to={event.link}
                className="inline-block bg-primary text-white py-2 px-4 rounded-full hover:bg-opacity-90 transition"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-3xl font-semibold text-center text-primary mb-10">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote:
                "Forest Veda's products have transformed my health. I feel more energetic and balanced.",
              name: "– Priya S.",
            },
            {
              quote:
                "A perfect blend of tradition and modern science. I trust their products for my family's health.",
              name: "– Ravi K.",
            },
            {
              quote: "I love the holistic approach they offer. Their products are a must-try!",
              name: "– Meera T.",
            },
          ].map((t, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition duration-300"
            >
              <p className="text-gray-700 italic">"{t.quote}"</p>
              <h4 className="mt-4 font-semibold text-primary">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Blog/Resources */}
      <section>
        <h2 className="text-3xl font-semibold text-center text-primary mb-10">Insights & Resources</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Ayurveda & Immunity",
              desc: "Discover how Ayurveda naturally boosts your immune system.",
              link: "/blog/ayurveda-immunity",
            },
            {
              title: "Herbs for Digestive Health",
              desc: "Learn about the best herbs to improve digestion and gut health.",
              link: "/blog/digestive-health",
            },
            {
              title: "Integrating Ayurveda into Modern Life",
              desc: "Practical tips for embracing Ayurvedic practices every day.",
              link: "/blog/modern-ayurveda",
            },
          ].map((blog, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.desc}</p>
              <Link
                to={blog.link}
                className="inline-block bg-primary text-white py-2 px-4 rounded-full hover:bg-opacity-90 transition"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us */}
      <section className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-primary mb-6">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          Have any questions or need personalized advice? Reach out to us!
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-primary"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-primary"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-primary"
            required
          />
          <button
            type="submit"
            className="bg-primary text-white py-2 px-6 rounded-full hover:bg-opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default About;
