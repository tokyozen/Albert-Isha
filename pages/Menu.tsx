
import React, { useState } from 'react';
import { generateWeddingMenu } from '../services/geminiService';
import { MenuCourse } from '../types';
import Card from '../components/Card';
import Spinner from '../components/Spinner';

const Menu: React.FC = () => {
  const [preferences, setPreferences] = useState('');
  const [menu, setMenu] = useState<MenuCourse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateMenu = async () => {
    if (!preferences.trim()) {
      setError('Please enter some preferences.');
      return;
    }
    setLoading(true);
    setError(null);
    setMenu([]);
    try {
      const generatedMenu = await generateWeddingMenu(preferences);
      setMenu(generatedMenu);
    } catch (err) {
      setError('Failed to generate menu. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <h2 className="text-4xl text-center text-[#cc5500] mb-4">Wedding Menu</h2>
        <p className="text-center text-lg mb-6">Let our AI chef help you imagine the perfect menu! Enter any dietary preferences, favorite cuisines, or key ingredients below.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
            placeholder="e.g., vegetarian, gluten-free, loves Italian"
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#cc5500] focus:outline-none"
            disabled={loading}
          />
          <button
            onClick={handleGenerateMenu}
            disabled={loading}
            className="bg-[#cc5500] text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-80 transition-all duration-300 disabled:bg-gray-400 flex items-center justify-center"
          >
            {loading ? <><Spinner /> Generating...</> : 'Generate Menu'}
          </button>
        </div>
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      </Card>

      {menu.length > 0 && (
        <Card className="mt-8">
          <h3 className="text-3xl text-center text-[#cc5500] mb-6">Your Custom Menu</h3>
          <div className="space-y-8">
            {menu.map((course) => (
              <div key={course.course}>
                <h4 className="text-2xl font-bold text-gray-800 border-b-2 border-[#cc5500] pb-2 mb-4">{course.course}</h4>
                <ul className="space-y-4">
                  {course.items.map((item) => (
                    <li key={item.name}>
                      <p className="font-semibold text-lg">{item.name}</p>
                      <p className="text-gray-600 ml-4">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};

export default Menu;
