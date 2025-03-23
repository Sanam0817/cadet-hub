
import React from 'react';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="flex-1 container px-4 sm:px-6 py-6 max-w-7xl mx-auto">
        <div className="opacity-0 animate-fade-in">
          {pageTitle && (
            <h1 className="text-3xl font-bold mb-6 text-ncc-navy">{pageTitle}</h1>
          )}
          {children}
        </div>
      </main>
      <footer className="py-6 border-t border-border">
        <div className="container px-4 sm:px-6 mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © 2023 Navrachana University NCC Unit. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

function getPageTitle(pathname: string) {
  switch (pathname) {
    case '/':
      return '';
    case '/announcements':
      return 'Announcements & Circulars';
    case '/events':
      return 'Events & Activities';
    case '/resources':
      return 'Resources & Study Materials';
    case '/achievements':
      return 'Rank & Achievement Board';
    default:
      return '';
  }
}

export default Layout;
