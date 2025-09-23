import React, { useState, useRef, useEffect } from 'react';
import Card from '../components/Card';

const imageSeeds = [
  'couple-happy', 'wedding-day', 'love-story', 'forever-us', 'engagement-photo',
  'romantic-walk', 'city-love', 'special-moment', 'joyful-couple', 'beautiful-bride',
  'handsome-groom', 'wedding-kiss', 'celebration-time', 'our-journey', 'happily-ever-after',
  'soulmates', 'perfect-pair', 'endless-love', 'new-beginnings', 'the-vows',
  'first-dance', 'wedding-cake', 'cheers-to-love', 'garden-romance', 'sunset-kiss',
  'city-lights-love', 'adventure-awaits', 'two-hearts'
];

const initialImages = imageSeeds.map((seed, i) => ({
  id: `initial-${i}`,
  src: `https://picsum.photos/seed/${seed}/600/400`,
  alt: `Albert and Isha's photo ${i + 1}`,
}));


const Album: React.FC = () => {
  const [images, setImages] = useState(initialImages);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cameraModalVisible, setCameraModalVisible] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const openModal = (src: string) => {
    setSelectedImage(src);
    setTimeout(() => setModalVisible(true), 10);
  };

  const closeModal = () => {
    setModalVisible(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  const openCamera = async () => {
    if (isCameraOpen) return;
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      setStream(mediaStream);
      setIsCameraOpen(true);
      setTimeout(() => setCameraModalVisible(true), 10);
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Could not access the camera. Please ensure you have granted permission in your browser settings.");
    }
  };

  const closeCamera = () => {
    setCameraModalVisible(false);
    setTimeout(() => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      setStream(null);
      setIsCameraOpen(false);
    }, 300);
  };
  
  useEffect(() => {
    if (isCameraOpen && stream && videoRef.current) {
      videoRef.current.srcObject = stream;
    }
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [isCameraOpen, stream]);

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        
        const dataUrl = canvas.toDataURL('image/jpeg');
        const newImage = {
          id: `user-${new Date().getTime()}`,
          src: dataUrl,
          alt: 'A lovely moment captured at the wedding!',
        };
        
        setImages(prevImages => [newImage, ...prevImages]);
        closeCamera();
      }
    }
  };

  return (
    <div>
      <Card>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-4xl text-left text-[#cc5500]">Our Album</h2>
            <p className="text-gray-600 mt-1">A collection of our favorite moments. Feel free to add yours!</p>
          </div>
          <button 
            onClick={openCamera}
            className="bg-[#cc5500] text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            aria-label="Add a new photo using your camera"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Add Photo
          </button>
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
      
      <canvas ref={canvasRef} className="hidden"></canvas>

      {isCameraOpen && (
        <div className={`fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${cameraModalVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`relative bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl shadow-xl w-full max-w-3xl flex flex-col items-center transition-all duration-300 ${cameraModalVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <h3 className="text-2xl text-white font-semibold mb-4">Add Your Moment</h3>
            <video ref={videoRef} autoPlay playsInline className="w-full h-auto rounded-lg mb-6 shadow-lg max-h-[65vh]"></video>
            <div className="flex items-center justify-center gap-4">
              <button 
                onClick={capturePhoto} 
                className="bg-[#cc5500] text-white rounded-full h-20 w-20 flex items-center justify-center text-4xl font-bold border-4 border-white/50 hover:border-white hover:bg-opacity-90 transition-all transform hover:scale-105"
                aria-label="Take Picture"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
             <button 
              onClick={closeCamera}
              className="absolute -top-3 -right-3 text-white bg-black/60 rounded-full h-10 w-10 flex items-center justify-center text-2xl font-bold hover:bg-[#cc5500] transition-colors"
              aria-label="Close camera"
            >
              &times;
            </button>
          </div>
        </div>
      )}

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