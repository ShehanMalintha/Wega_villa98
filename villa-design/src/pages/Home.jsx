import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center bg-[url('https://explore.vacations/wp-content/uploads/2024/12/Unawatuna-Beach-Sri-Lanka-.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ENJOY & RELAX YOUR TIME
          </h1>
          <p className="text-xl text-white mb-8">
            Make your day relaxing and enjoyable day, join with us
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-md text-lg font-medium transition transform hover:scale-105">
            Book Now
          </button>
        </div>
      </div>

       {/* Welcome Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <img
            src="/assets/couple.png"
            alt="Couple"
            className="mx-auto w-40 mb-8"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
            Welcome to Wega Villa 98 !
          </h2>
          <p className="text-lg leading-relaxed">
            Welcome to WEGA VILLA 98, your peaceful getaway nestled in the heart
            of Unawatuna, Galle. Enjoy a calm and relaxing environment surrounded
            by nature, with comfortable rooms and modern amenities. Whether
            you're here to unwind or explore, our villa offers easy access to
            nearby attractions, cultural sites, and beautiful beaches. We're here
            to make your stay memorable and enjoyable.
          </p>
        </div>
      </section>

      {/* BBQ Section */}
      <section className="py-16 px-4 bg-[#fff5eb]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <img
            src="/assets/BBQ.jpg"
            alt="BBQ"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div>
            <h3 className="text-2xl font-bold mb-4">BBQ Party</h3>
            <p className="text-lg">
              Join us for a fun-filled BBQ party under the stars at WEGA VILLA 98!
              Enjoy delicious grilled dishes, good music, and a garden setting
              perfect for relaxing and making memories with friends and family.
            </p>
          </div>
        </div>
      </section>

      {/* Night Functions */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Night Functions</h3>
            <p className="text-lg">
              Celebrate your special moments at WEGA VILLA 98 with unforgettable
              night functions! Whether it's a birthday, friends' meetup, or
              anniversary, our peaceful garden and lighting set the perfect mood
              for a joyful and private evening.
            </p>
          </div>
          <img
            src="/assets/night.png"
            alt="Night Party"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Tour Guide */}
      <section className="py-16 px-4 bg-[#fff5eb]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <img
            src="/assets/travel.jpg"
            alt="Tour Guide"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div>
            <h3 className="text-2xl font-bold mb-4">Tour Guide</h3>
            <p className="text-lg">
              Explore the beauty of Galle with the help of our friendly tour
              guides. From historic sites like the Galle Fort and Dutch Reformed
              Church to relaxing beaches, turtle hatcheries, and local markets,
              our guides will help you discover the best nearby attractions with
              comfort and local insight.
            </p>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Home;