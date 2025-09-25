import React from 'react';
import Card from '../components/Card';

const menuItems = {
  starters: [
    {
      name: "Groundnut Soup",
      description: "Rich and creamy peanut-based soup with vegetables and tender meat"
    },
    {
      name: "Akara (Bean Cakes)",
      description: "Crispy black-eyed pea fritters seasoned with onions and spices"
    }
  ],
  mains: [
    {
      name: "Jollof Rice",
      description: "Aromatic rice cooked in a rich tomato and spice blend"
    },
    {
      name: "Cassava Leaves",
      description: "Tender cassava leaves slow-cooked with meat and aromatic spices"
    },
    {
      name: "Potato Leaves",
      description: "Fresh sweet potato leaves prepared in traditional Sierra Leonean style"
    },
    {
      name: "Pepper Chicken",
      description: "Succulent chicken pieces marinated in fiery Sierra Leonean pepper sauce"
    },
    {
      name: "Fish Balls",
      description: "Delicately seasoned fish formed into tender balls and perfectly cooked"
    }
  ],
  sides: [
    {
      name: "Fried Plantains",
      description: "Sweet, golden plantains fried to caramelized perfection"
    },
    {
      name: "Agidi (Pap)",
      description: "Smooth, creamy corn pudding served as a delightful accompaniment"
    }
  ],
  desserts: [
    {
      name: "Puff-Puff",
      description: "Light, fluffy deep-fried dough balls dusted with sugar"
    },
    {
      name: "Ginger Beer",
      description: "Refreshing homemade ginger drink with a perfect balance of spice and sweetness"
    }
  ]
};

const Menu: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-amber-50 to-orange-50 relative overflow-hidden">
      {/* Subtle African-inspired background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.3'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '60px 60px'
             }}>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700"
              style={{ fontFamily: 'Dancing Script, cursive' }}>
            Our Wedding Menu
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 font-light tracking-wide"
             style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            A Taste of Sierra Leone
          </p>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center mt-8 mb-12">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400"></div>
              <div className="text-3xl text-amber-500">🌺</div>
              <div className="w-8 h-px bg-amber-400"></div>
              <div className="text-2xl text-orange-400">💍</div>
              <div className="w-8 h-px bg-amber-400"></div>
              <div className="text-3xl text-amber-500">🌺</div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>
          </div>
        </div>

        {/* Menu Sections */}
        <div className="grid gap-12 lg:gap-16">
          {/* Starters */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-amber-700 mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                🥣 Starters
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {menuItems.starters.map((dish, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-amber-100">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-amber-700 transition-colors">
                      {dish.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {dish.description}
                    </p>
                    <div className="mt-4 text-right">
                      <span className="text-2xl text-amber-500 group-hover:scale-110 transition-transform inline-block">🌿</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Main Courses */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-amber-700 mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                🍽️ Main Courses
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.mains.map((dish, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-amber-100">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-amber-700 transition-colors">
                      {dish.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {dish.description}
                    </p>
                    <div className="mt-4 text-right">
                      <span className="text-2xl text-orange-500 group-hover:scale-110 transition-transform inline-block">🍖</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Sides */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-amber-700 mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                🥘 Sides
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {menuItems.sides.map((dish, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-amber-100">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-amber-700 transition-colors">
                      {dish.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {dish.description}
                    </p>
                    <div className="mt-4 text-right">
                      <span className="text-2xl text-yellow-500 group-hover:scale-110 transition-transform inline-block">🌽</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Desserts & Drinks */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-amber-700 mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                🧁 Desserts & Drinks
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {menuItems.desserts.map((dish, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-amber-100">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-amber-700 transition-colors">
                      {dish.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {dish.description}
                    </p>
                    <div className="mt-4 text-right">
                      <span className="text-2xl text-pink-500 group-hover:scale-110 transition-transform inline-block">🥤</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Footer Section */}
        <div className="text-center mt-20">
          {/* Floral divider */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-3">
              <div className="text-2xl text-pink-400">🌸</div>
              <div className="text-3xl text-red-400">❤️</div>
              <div className="text-2xl text-pink-400">🌸</div>
            </div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-100 max-w-2xl mx-auto">
            <p className="text-2xl text-gray-700 font-light mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Thank you for celebrating with us.
            </p>
            <p className="text-3xl font-bold text-amber-700" style={{ fontFamily: 'Dancing Script, cursive' }}>
              Enjoy the feast!
            </p>
            <div className="mt-6 text-lg text-gray-600">
              With love, Albert & Isha 💕
            </div>
          </div>
        </div>
      </div>

      {/* Add Dancing Script font */}
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet" />
    </div>
  );
};

export default Menu;