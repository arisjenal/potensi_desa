import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Profil Desa', path: '/about' },
    { name: 'Potensi Desa', path: '/potential' },
    { name: 'Galeri', path: '/gallery' },
    // { name: 'Berita', path: '/news' },
    { name: 'Kontak', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-green-800 text-white py-2">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span>📧 info@sibuluan.desa.id</span>
              <span>📞 (021) 1234-5678</span>
            </div>
            <div className="hidden md:block">
              <span>Selamat Datang di Website Resmi Desa Sibuluan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <Building2 size={40} className="mr-3 text-green-700" />
              <div>
                <h1 className="font-bold text-xl text-gray-800">Desa Sibuluan</h1>
                <p className="text-sm text-gray-600">Kecamatan Pandan</p>
              </div>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  font-medium transition-colors duration-200 py-2 px-3 rounded-md
                  ${isActive 
                    ? 'text-green-700 bg-green-50' 
                    : 'text-gray-700 hover:text-green-700 hover:bg-green-50'}
                `}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-gray-800" />
            ) : (
              <Menu size={24} className="text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `
                    font-medium transition-colors duration-200 py-2 px-3 rounded-md
                    ${isActive 
                      ? 'text-green-700 bg-green-50' 
                      : 'text-gray-700 hover:text-green-700 hover:bg-green-50'}
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;