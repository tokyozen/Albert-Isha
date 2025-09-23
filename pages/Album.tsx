import React, { useState } from 'react';
import Card from '../components/Card';

const albumImages = [
  {
    id: 'img-1',
    src: 'https://i.imgur.com/wF2GTrA.jpeg',
    alt: 'Albert and Isha - Beautiful moment together',
  },
  {
    id: 'img-2',
    src: 'https://i.imgur.com/Jnr0b1m.jpeg',
    alt: 'Albert and Isha - Special celebration',
  },
  {
    id: 'img-3',
    src: 'https://i.imgur.com/6LHokp4.jpeg',
    alt: 'Albert and Isha - Romantic photo',
  },
  {
    id: 'img-4',
    src: 'https://i.imgur.com/K1u9XMV.jpeg',
    alt: 'Albert and Isha - Wedding day',
  },
  {
    id: 'img-5',
    src: 'https://i.imgur.com/pAHtcMm.jpeg',
    alt: 'Albert and Isha - Journey together',
  },
  {
    id: 'img-6',
    src: 'https://i.imgur.com/WhL80Oq.jpeg',
    alt: 'Albert and Isha - Happy couple',
  },
  {
    id: 'img-7',
    src: 'https://i.imgur.com/5FIt2y6.jpeg',
    alt: 'Albert and Isha - Love story',
  },
  {
    id: 'img-8',
    src: 'https://i.imgur.com/3Mz11hN.jpeg',
    alt: 'Albert and Isha - Portrait',
  },
  {
    id: 'img-9',
    src: 'https://i.imgur.com/NWzWm5k.jpeg',
    alt: 'Albert and Isha - Together forever',
  },
  {
    id: 'img-10',
    src: 'https://i.imgur.com/1p8YhZi.jpeg',
    alt: 'Albert and Isha - Precious moment',
  },
  {
    id: 'img-11',
    src: 'https://i.imgur.com/XGFHIOH.jpeg',
    alt: 'Albert and Isha - Celebration',
  },
  {
    id: 'img-12',
    src: 'https://i.imgur.com/QL7B4CX.jpeg',
    alt: 'Albert and Isha - Early days',
  },
  {
    id: 'img-13',
    src: 'https://i.imgur.com/m4CRmeA.jpeg',
    alt: 'Albert and Isha - Engagement',
  },
  {
    id: 'img-14',
    src: 'https://i.imgur.com/C2EJmXk.jpeg',
    alt: 'Albert and Isha - Sweet moment',
  },
  {
    id: 'img-15',
    src: 'https://i.imgur.com/7Ndxp3P.jpeg',
    alt: 'Albert and Isha - Ready for marriage',
  },
  {
    id: 'img-16',
    src: 'https://i.imgur.com/dCGgtOC.jpeg',
    alt: 'Albert and Isha - Beautiful couple',
  },
  {
    id: 'img-17',
    src: 'https://i.imgur.com/r3p6SJM.jpeg',
    alt: 'Albert and Isha - Final photo',
  },
];

const Album: React.FC = () => {
  const [images] = useState(albumImages);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (src: string) => {
    setSelectedImage(src);
    setTimeout(() => setModalVisible(true), 10);
  };

  const closeModal = () => {
    setModalVisible(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  return (
    <div>
      <Card>
        <div className="mb-8">
          <h2 className="text-4xl text-center text-[#cc5500]">Our Album</h2>
          <p className="text-gray-600 mt-1 text-center">A collection of our favorite moments together</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group aspect-w-1 aspect-h-1"
              onClick={() => openModal(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </Card>
      
      {selectedImage && (
        <div 
          className={`fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ${modalVisible ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeModal}
        >
          <div 
            className={`relative transition-all duration-300 ${modalVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            onClick={(e) => e.stopPropagation()}
          >
             <img src={selectedImage} alt="Enlarged view" className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl" />
            <button 
              onClick={closeModal}
              className="absolute -top-4 -right-4 text-white bg-black/60 rounded-full h-10 w-10 flex items-center justify-center text-2xl font-bold hover:bg-[#cc5500] transition-colors"
              aria-label="Close image viewer"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Album;