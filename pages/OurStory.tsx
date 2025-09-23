
import React, { useState } from 'react';
import { generateWeddingToast } from '../services/geminiService';
import Card from '../components/Card';
import Spinner from '../components/Spinner';

const timelineEvents = [
  { year: "2018", title: "The Day We Met", description: "Our story began in the halls of our university, a chance meeting that sparked a lifelong friendship." },
  { year: "2020", title: "Our First Adventure", description: "A spontaneous road trip to the coast where we discovered our shared love for exploration and terrible car karaoke." },
  { year: "2022", title: "Becoming a Family", description: "We adopted our furry friend, Luna, who now runs our household with an iron paw." },
  { year: "2024", title: "The Proposal", description: "Under a sky full of stars, on our favorite hiking trail, one of us asked a very important question." },
  { year: "2025", title: "Our Next Chapter", description: "We get to say 'I do' and start our greatest adventure yet, with all of you by our side." },
];

const OurStory: React.FC = () => {
  const [relationship, setRelationship] = useState('');
  const [toast, setToast] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateToast = async () => {
    if (!relationship.trim()) {
      setError('Please describe your relationship to the couple.');
      return;
    }
    setLoading(true);
    setError(null);
    setToast('');
    try {
      const generatedToast = await generateWeddingToast(relationship);
      setToast(generatedToast);
    } catch (err) {
      setError('Failed to generate a toast. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <Card>
        <h2 className="text-4xl text-center text-[#cc5500] mb-8">Our Story: A Timeline</h2>
        <div className="flex justify-center mb-8">
          <img 
            src="https://i.imgur.com/C2EJmXk.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
            alt="Our journey together" 
            className="rounded-lg shadow-lg max-w-lg w-full"
          />
        </div>
        <div className="relative border-l-2 border-[#cc5500] ml-4">
          {timelineEvents.map((event, index) => (
            <div key={index} className="mb-8 ml-8">
              <div className="absolute w-4 h-4 bg-[#cc5500] rounded-full -left-[9px] border-2 border-white"></div>
              <p className="text-sm font-semibold text-gray-500">{event.year}</p>
              <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
              <p className="text-gray-700">{event.description}</p>
              {index === 0 && (
                <img 
                  src="https://i.imgur.com/QL7B4CX.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" 
                  alt="The day we met" 
                  className="mt-3 rounded-md shadow-sm max-w-xs"
                />
              )}
              {index === 3 && (
                <img 
                  src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop" 
                  alt="The proposal" 
                  className="mt-3 rounded-md shadow-sm max-w-xs"
                />
              )}
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="text-4xl text-center text-[#cc5500] mb-4">Write a Toast!</h2>
        <p className="text-center text-lg mb-6">Struggling with what to say? Let our AI assistant help you craft the perfect toast. Tell us your relationship to the couple.</p>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <input
            type="text"
            value={relationship}
            onChange={(e) => setRelationship(e.target.value)}
            placeholder="e.g., Isha's college roommate, Albert's cousin"
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#cc5500] focus:outline-none"
            disabled={loading}
          />
          <button
            onClick={handleGenerateToast}
            disabled={loading}
            className="bg-[#cc5500] text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-80 transition-all duration-300 disabled:bg-gray-400 flex items-center justify-center"
          >
            {loading ? <><Spinner /> Writing...</> : 'Generate Toast'}
          </button>
        </div>
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        {toast && (
          <div className="mt-6 p-4 bg-stone-100 rounded-lg border-l-4 border-[#cc5500]">
            <p className="text-gray-800 italic">{toast}</p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default OurStory;
