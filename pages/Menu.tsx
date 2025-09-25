import React from 'react';
import Card from '../components/Card';

const menuItems = [
  {
    category: "Rice & Grains",
    dishes: [
      {
        name: "Jollof Rice",
        description: "Aromatic rice cooked in a rich tomato and spice blend, a West African celebration staple"
      },
      {
        name: "Agidi (Pap)",
        description: "Smooth, creamy corn pudding served as a delightful accompaniment"
      }
    ]
  },
  {
    category: "Traditional Stews",
    dishes: [
      {
        name: "Cassava Leaves",
        description: "Tender cassava leaves slow-cooked with meat and aromatic spices"
      },
      {
        name: "Potato Leaves",
        description: "Fresh sweet potato leaves prepared in traditional Sierra Leonean style"
      },
      {
        name: "Groundnut Soup",
        description: "Rich and creamy peanut-based soup with vegetables and tender meat"
      }
    ]
  },
  {
    category: "Main Dishes",
    dishes: [
      {
        name: "Pepper Chicken",
        description: "Succulent chicken pieces marinated in fiery Sierra Leonean pepper sauce"
      },
      {
        name: "Fish Balls",
        description: "Delicately seasoned fish formed into tender balls and perfectly cooked"
      }
    ]
  },
  {
    category: "Sides & Snacks",
    dishes: [
      {
        name: "Fried Plantains",
        description: "Sweet, golden plantains fried to caramelized perfection"
      },
      {
        name: "Puff-Puff",
        description: "Light, fluffy deep-fried dough balls dusted with sugar"
      },
      {
        name: "Akara (Bean Cakes)",
        description: "Crispy black-eyed pea fritters seasoned with onions and spices"
      }
    ]
  },
  {
    category: "Beverages",
    dishes: [
      {
        name: "Ginger Beer",
        description: "Refreshing homemade ginger drink with a perfect balance of spice and sweetness"
      }
    ]
  }
];

const Menu: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          </div>
          <div className="relative bg-gradient-to-b from-gray-900 via-stone-200 to-[#cc5500] px-8">
            <h1 className="text-5xl md:text-6xl font-bold text-[#cc5500] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Wedding Feast
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-4 mt-6 mb-8">
          <div className="w-16 h-px bg-yellow-400"></div>
          <div className="text-2xl text-yellow-600">✦</div>
          <div className="w-16 h-px bg-yellow-400"></div>
        </div>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Join us in celebrating our union with the authentic flavors of Sierra Leone. 
          Each dish has been lovingly prepared to honor our heritage and bring joy to our special day.
        </p>
      </div>

      {/* Cultural Pattern Divider */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center space-x-2 text-yellow-500">
          <span className="text-2xl">◆</span>
          <span className="text-lg">◇</span>
          <span className="text-2xl">◆</span>
          <span className="text-lg">◇</span>
          <span className="text-2xl">◆</span>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="grid gap-8 md:gap-12">
        {menuItems.map((category, categoryIndex) => (
          <Card key={categoryIndex} className="relative overflow-hidden">
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-yellow-400 opacity-30"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-r-4 border-t-4 border-yellow-400 opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-yellow-400 opacity-30"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-yellow-400 opacity-30"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#cc5500] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {category.category}
                </h2>
                <div className="flex justify-center">
                  <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
                </div>
              </div>
              
              <div className="grid gap-6 md:gap-8">
                {category.dishes.map((dish, dishIndex) => (
                  <div key={dishIndex} className="group">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-200 pb-4 group-hover:border-yellow-300 transition-colors duration-300">
                      <div className="flex-grow">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 group-hover:text-[#cc5500] transition-colors duration-300">
                          {dish.name}
                        </h3>
                        <p className="text-gray-600 leading-relaxed max-w-2xl">
                          {dish.description}
                        </p>
                      </div>
                      <div className="mt-3 md:mt-0 md:ml-6 flex-shrink-0">
                        <div className="text-yellow-500 text-2xl group-hover:scale-110 transition-transform duration-300">
                          ✦
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Footer Message */}
      <Card className="mt-12 text-center bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="py-8">
          <div className="text-4xl text-yellow-500 mb-4">✦ ◆ ✦</div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#cc5500] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            A Taste of Home, A Celebration of Love
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            These traditional Sierra Leonean dishes represent the flavors that brought us together 
            and the culture we're proud to share with you on our wedding day. 
            Each bite tells a story of heritage, love, and celebration.
          </p>
          <div className="mt-6 text-xl font-semibold text-[#cc5500]">
            With love and gratitude,<br />
            Albert & Isha
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Menu;