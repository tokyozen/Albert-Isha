
import React from 'react';
import Card from '../components/Card';

const Welcome: React.FC = () => {
  return (
    <div className="text-center">
      <div 
        className="h-96 bg-cover bg-center rounded-lg shadow-lg mb-8" 
        style={{ backgroundImage: `url('https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop')` }}
      >
        <div className="h-full w-full bg-black/40 flex items-center justify-center rounded-lg">
          <h1 className="text-5xl md:text-7xl text-white font-bold drop-shadow-lg">Celebrating Our Love</h1>
        </div>
      </div>
      <Card>
        <div className="mb-6">
          <img 
            src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
            alt="Albert and Isha" 
            className="w-64 h-64 object-cover rounded-full mx-auto shadow-lg border-4 border-[#cc5500]"
          />
        </div>
        <h2 className="text-4xl text-center text-[#cc5500] mb-4">Welcome to Our Wedding Website</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          We are so excited to celebrate our special day with you. Here you'll find all the details about our wedding, from our story to the menu. Thank you for being a part of our journey. We can't wait to see you!
        </p>
        <p className="text-2xl mt-6 font-bold text-[#cc5500]">With love, <br /> Albert & Isha</p>
      </Card>
    </div>
  );
};

export default Welcome;
