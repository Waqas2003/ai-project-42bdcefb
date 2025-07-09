import React from 'react';

const Features = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h2 className="text-3xl font-bold">What We Offer</h2>
        <ul className="flex flex-wrap justify-center">
          <li className="w-full md:w-1/2 lg:w-1/3 p-6">
            <i className="fas fa-globe-americas text-4xl text-orange-500"></i>
            <h3 className="text-2xl font-bold">Global Destinations</h3>
            <p>Explore over 100 destinations worldwide</p>
          </li>
          <li className="w-full md:w-1/2 lg:w-1/3 p-6">
            <i className="fas fa-hotel text-4xl text-orange-500"></i>
            <h3 className="text-2xl font-bold">Luxury Accommodations</h3>
            <p>Stay in style with our handpicked hotels</p>
          </li>
          <li className="w-full md:w-1/2 lg:w-1/3 p-6">
            <i className="fas fa-utensils text-4xl text-orange-500"></i>
            <h3 className="text-2xl font-bold">Local Experiences</h3>
            <p>Indulge in authentic local cuisine and activities</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;