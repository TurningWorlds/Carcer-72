import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, ChevronDown, User, Globe, Mail, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: 'Home' },
  { name: 'About', path: 'About' },
  { name: 'Features', path: 'Features' },
  { name: 'Factions', path: 'Factions' },
  { name: 'Media', path: 'Media' },
  { name: 'Rules', path: 'Rules' },
];

const getStartedLinks = [
  { name: 'How to Join', path: 'HowToJoin' },
  { name: 'Applications', path: 'Applications' },
  { name: 'Wiki', path: 'Wiki' },
];

const communityLinks = [
  { name: 'Community', path: 'Community' },
  { name: 'Support', path: 'Support' },
  { name: 'Contact Us', path: 'ContactUs' },
];

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);
  const [showCommunity, setShowCommunity] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setShowLanguages(false);
    // In a real implementation, this would trigger translation
    console.log('Language changed to:', lang.code);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          {/* Gradient background box */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
          
          <div className="relative flex items-center justify-between">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="text-xl font-bold text-white z-10">
              CARCER <span className="text-amber-500 font-light">'72</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={createPageUrl(link.path)}
                  className={`text-sm tracking-wide transition-colors ${
                    location.pathname.includes(link.path) 
                      ? 'text-amber-500' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Get Started Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowGetStarted(true)}
                onMouseLeave={() => setShowGetStarted(false)}
              >
                <button className="text-sm tracking-wide text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                  Get Started
                  <ChevronDown className="w-3 h-3" />
                </button>
                <AnimatePresence>
                  {showGetStarted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-black/95 border border-white/10 backdrop-blur-md"
                    >
                      {getStartedLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={createPageUrl(link.path)}
                          className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Community Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowCommunity(true)}
                onMouseLeave={() => setShowCommunity(false)}
              >
                <button className="text-sm tracking-wide text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                  Community
                  <ChevronDown className="w-3 h-3" />
                </button>
                <AnimatePresence>
                  {showCommunity && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-black/95 border border-white/10 backdrop-blur-md"
                    >
                      {communityLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={createPageUrl(link.path)}
                          className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language Selector */}
              <div 
                className="relative"
                onMouseEnter={() => setShowLanguages(true)}
                onMouseLeave={() => setShowLanguages(false)}
              >
                <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors">
                  <Globe className="w-4 h-4" />
                  <span>{selectedLanguage.flag}</span>
                  <span>{selectedLanguage.name}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                <AnimatePresence>
                  {showLanguages && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-black/95 border border-white/10 backdrop-blur-md max-h-64 overflow-y-auto"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang)}
                          className={`w-full text-left px-4 py-3 text-sm flex items-center gap-2 transition-colors ${
                            selectedLanguage.code === lang.code 
                              ? 'text-amber-500 bg-white/5' 
                              : 'text-gray-300 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Login Button */}
              <div className="relative">
                <button 
                  onClick={() => setShowLogin(!showLogin)}
                  className="flex items-center gap-2 px-4 py-2 border border-white/20 hover:border-amber-500/50 text-white text-sm font-medium tracking-wide transition-all"
                >
                  <User className="w-4 h-4" />
                  Login
                </button>
                <AnimatePresence>
                  {showLogin && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 mt-2 w-64 bg-black/95 border border-white/10 backdrop-blur-md p-4"
                    >
                      <p className="text-gray-400 text-xs mb-4">Choose your login method:</p>
                      <div className="space-y-2">
                        <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white transition-colors">
                          <MessageSquare className="w-4 h-4" />
                          Login with Discord
                        </button>
                        <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white/10 hover:bg-white/20 text-white transition-colors">
                          <Mail className="w-4 h-4" />
                          Login with Email
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white p-2 z-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 bg-black/95 lg:hidden overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col items-center justify-center min-h-screen gap-6 py-24 px-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={createPageUrl(link.path)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl text-white hover:text-amber-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <div className="w-full max-w-xs border-t border-white/10 pt-6 mt-4">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-4 text-center">Get Started</p>
                {getStartedLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    to={createPageUrl(link.path)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-center text-white hover:text-amber-500 transition-colors py-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <div className="w-full max-w-xs border-t border-white/10 pt-6">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-4 text-center">Community</p>
                {communityLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    to={createPageUrl(link.path)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-center text-white hover:text-amber-500 transition-colors py-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <div className="w-full max-w-xs border-t border-white/10 pt-6 space-y-3">
                <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white transition-colors">
                  <MessageSquare className="w-4 h-4" />
                  Login with Discord
                </button>
                <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white/10 hover:bg-white/20 text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  Login with Email
                </button>
              </div>
              
              <div className="w-full max-w-xs border-t border-white/10 pt-6">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-4 text-center">Language</p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang)}
                      className={`px-3 py-2 text-sm flex items-center justify-center gap-2 transition-colors ${
                        selectedLanguage.code === lang.code 
                          ? 'bg-amber-500 text-white' 
                          : 'bg-white/5 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
