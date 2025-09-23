
import React from 'react';
import Card from '../components/Card';

const TheStory: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <Card>
        <h2 className="text-4xl text-center text-[#cc5500] mb-6">The Story</h2>
        <div className="space-y-6 text-lg text-justify leading-loose">
          <p>
            Albert and Isha’s journey began with friendship, laughter, and dreams that slowly turned into love. Their bond grew stronger with each passing day, filled with prayers, commitment, and unwavering support for each other.
          </p>
          <p>
            From school memories to late-night conversations, they discovered that true love is built on trust, faith, and patience.
          </p>
          <p>
            And now, surrounded by their loved ones, Albert and Isha are ready to begin the most beautiful chapter of all — marriage.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default TheStory;
