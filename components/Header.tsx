
import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Welcome', path: '/' },
  { name: 'The Story', path: '/the-story' },
  { name: 'Menu', path: '/menu' },
  { name: 'Our Story', path: '/our-story' },
  { name: 'Album', path: '/album' },
];

const Header: React.FC = () => {
  const activeLinkStyle = {
    color: '#cc5500',
    textDecoration: 'underline',
  };

  return (
    <header className="bg-black/85 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-4xl text-white font-bold tracking-wider">Albert & Isha</h1>
        <nav className="mt-4 sm:mt-0">
          <ul className="flex space-x-4 md:space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                  className="text-white font-semibold hover:text-[#cc5500] transition-colors duration-300"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
