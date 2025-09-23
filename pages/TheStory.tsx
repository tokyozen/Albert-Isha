
import React from 'react';
import Card from '../components/Card';

const TheStory: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <Card>
        <h2 className="text-4xl text-center text-[#cc5500] mb-6">The Story</h2>
        <div className="flex justify-center mb-8">
          <img 
            src="https://i.imgur.com/m4CRmeA.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop" 
            alt="Albert and Isha together" 
            className="rounded-lg shadow-lg max-w-md w-full"
          />
        </div>
        <div className="space-y-6 text-lg text-justify leading-loose">
          <p>
            Albert and Isha’s journey began with friendship, laughter, and dreams that slowly turned into love. Their bond grew stronger with each passing day, filled with prayers, commitment, and unwavering support for each other.
          </p>
          <div className="flex justify-center my-8">
            <img 
              src="https://i.imgur.com/C2EJmXk.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
              alt="Early days together" 
              className="rounded-lg shadow-md"
            />
          </div>
          <p>
            From school memories to late-night conversations, they discovered that true love is built on trust, faith, and patience.
          </p>
          <p>
            And now, surrounded by their loved ones, Albert and Isha are ready to begin the most beautiful chapter of all — marriage.
          </p>
          <div className="flex justify-center mt-8">
            <img 
              src="https://i.imgur.com/7Ndxp3P.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
              alt="Ready for marriage" 
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TheStory;
