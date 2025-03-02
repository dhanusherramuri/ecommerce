import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingBag, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: '2025 Calendar', path: '/calendar-2025' },
  { name: 'Magnetic Bookmarks', path: '/magnetic-bookmarks' },
  { name: 'Bookmarks', path: '/bookmarks' },
  { name: 'Glass Cans', path: '/glass-cans' },
  { name: 'Notepads', path: '/notepads' },
  { name: 'Stickers', path: '/stickers' },
  { name: 'Art Prints', path: '/art-prints' },
  { name: 'Gift Card', path: '/gift-card' },
  { name: 'Shop All', path: '/shop' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0);
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 bg-white z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-md' : ''
        } ${isVisible ? 'translate-y-8' : '-translate-y-full'}`}
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl font-serif text-[#1a472a] font-semibold hover:opacity-80 transition-opacity">
                Riya Designs
              </h1>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden xl:flex flex-1 justify-center">
              <div className="flex space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-gray-700 hover:text-[#1a472a] px-2 py-2 text-sm font-medium transition-colors ${
                      location.pathname === item.path ? 'text-[#1a472a] font-semibold' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button className="text-gray-700 hover:text-[#1a472a] transition-colors p-2">
                <Search size={20} />
              </button>
              <button className="text-gray-700 hover:text-[#1a472a] transition-colors p-2">
                <User size={20} />
              </button>
              <button className="text-gray-700 hover:text-[#1a472a] transition-colors p-2">
                <ShoppingBag size={20} />
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden text-gray-700 hover:text-[#1a472a] transition-colors p-2"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span className={`w-full h-0.5 bg-current transform transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <span className={`w-full h-0.5 bg-current transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`w-full h-0.5 bg-current transform transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col">
          <div className="pt-6 pb-4 flex items-center justify-between px-6">
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 hover:text-[#1a472a] transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            
            <Link to="/" className="absolute left-1/2 -translate-x-1/2" onClick={() => setIsMobileMenuOpen(false)}>
              <h1 className="text-xl sm:text-2xl font-serif text-[#1a472a] font-semibold">
                Riya Designs
              </h1>
            </Link>
            
            <Link to="/cart" className="text-gray-700 hover:text-[#1a472a] transition-colors">
              <ShoppingBag size={24} />
            </Link>
          </div>
          
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <div className="space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block py-3 text-lg font-medium ${
                    location.pathname === item.path 
                      ? 'text-[#1a472a] font-semibold' 
                      : 'text-gray-700 hover:text-[#1a472a]'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="p-6 border-t border-gray-100">
            <div className="flex items-center mb-6">
              <User size={20} className="text-gray-700 mr-2" />
              <Link 
                to="/account" 
                className="text-gray-700 hover:text-[#1a472a] font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Log in
              </Link>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-[#1a472a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-700 hover:text-[#1a472a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-700 hover:text-[#1a472a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;