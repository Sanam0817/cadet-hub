
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bell, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when location changes
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`w-full transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 py-4 max-w-7xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-10 w-10 bg-ncc-navy rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">NCC</span>
              </div>
              <span className="ml-3 text-xl font-bold text-ncc-navy">Nucleus</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" isActive={isActive('/')}>
              Dashboard
            </NavLink>
            <NavLink to="/announcements" isActive={isActive('/announcements')}>
              Announcements
            </NavLink>
            <NavLink to="/events" isActive={isActive('/events')}>
              Events
            </NavLink>
            <NavLink to="/resources" isActive={isActive('/resources')}>
              Resources
            </NavLink>
            <NavLink to="/achievements" isActive={isActive('/achievements')}>
              Achievements
            </NavLink>
          </div>

          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-600" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 z-50 bg-white transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <MobileNavLink to="/" isActive={isActive('/')} onClick={toggleMenu}>
            Dashboard
          </MobileNavLink>
          <MobileNavLink to="/announcements" isActive={isActive('/announcements')} onClick={toggleMenu}>
            Announcements
          </MobileNavLink>
          <MobileNavLink to="/events" isActive={isActive('/events')} onClick={toggleMenu}>
            Events
          </MobileNavLink>
          <MobileNavLink to="/resources" isActive={isActive('/resources')} onClick={toggleMenu}>
            Resources
          </MobileNavLink>
          <MobileNavLink to="/achievements" isActive={isActive('/achievements')} onClick={toggleMenu}>
            Achievements
          </MobileNavLink>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, isActive, children }) => {
  return (
    <Link
      to={to}
      className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive 
          ? 'text-ncc-navy' 
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
      }`}
    >
      {children}
      {isActive && (
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-ncc-navy rounded-full" />
      )}
    </Link>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, isActive, onClick, children }) => {
  return (
    <Link
      to={to}
      className={`text-2xl font-medium ${
        isActive ? 'text-ncc-navy' : 'text-gray-600'
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
