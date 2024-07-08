import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6">
            <h5 className="text-xl font-bold mb-2">Company</h5>
            <ul>
              <li className="mb-1">
                <a href="#" className="hover:text-gray-400">About Us</a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:text-gray-400">Careers</a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:text-gray-400">Press</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Blog</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6">
            <h5 className="text-xl font-bold mb-2">Support</h5>
            <ul>
              <li className="mb-1">
                <a href="#" className="hover:text-gray-400">Help Center</a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:text-gray-400">Safety Center</a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:text-gray-400">Community Guidelines</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Customer Support</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6">
            <h5 className="text-xl font-bold mb-2">Contact</h5>
            <p className="mb-2">123 Main Street</p>
            <p className="mb-2">Anytown, USA 12345</p>
            <p className="mb-2">(123) 456-7890</p>
            <p>support@company.com</p>
          </div>
          <div className="w-full md:w-1/4 mb-6">
            <h5 className="text-xl font-bold mb-2">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M24 4.56v14.88a4.56 4.56 0 01-4.56 4.56H4.56A4.56 4.56 0 010 19.44V4.56A4.56 4.56 0 014.56 0h14.88A4.56 4.56 0 0124 4.56zM8.09 20.2V9.55h-3.2v10.65h3.2zm-1.6-12.2a1.84 1.84 0 110-3.68 1.84 1.84 0 010 3.68zm15.32 12.2v-5.84c0-3.14-1.65-4.6-3.84-4.6-1.77 0-2.57 1.01-3.03 1.72V9.55h-3.2c.04.78 0 10.65 0 10.65h3.2v-5.95c0-.32.02-.64.11-.87.23-.6.76-1.21 1.65-1.21 1.16 0 1.62.92 1.62 2.26v5.77h3.2zm-12.5-10.65h-3.2V20.2h3.2V9.55zm-1.6-12.2a1.84 1.84 0 110-3.68 1.84 1.84 0 010 3.68zm15.32 12.2v-5.84c0-3.14-1.65-4.6-3.84-4.6-1.77 0-2.57 1.01-3.03 1.72V9.55h-3.2c.04.78 0 10.65 0 10.65h3.2v-5.95c0-.32.02-.64.11-.87.23-.6.76-1.21 1.65-1.21 1.16 0 1.62.92 1.62 2.26v5.77h3.2z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M12 2.04C6.48 2.04 2.04 6.48 2.04 12c0 4.42 3.32 8.08 7.68 8.82v-6.26h-2.3v-2.56h2.3v-1.95c0-2.28 1.38-3.53 3.41-3.53.98 0 1.82.07 2.07.1v2.4h-1.42c-1.12 0-1.34.53-1.34 1.31v1.67h2.68l-.35 2.56h-2.33V20.82c4.36-.74 7.68-4.4 7.68-8.82 0-5.52-4.44-9.96-9.96-9.96z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M24 4.56v14.88a4.56 4.56 0 01-4.56 4.56H4.56A4.56 4.56 0 010 19.44V4.56A4.56 4.56 0 014.56 0h14.88A4.56 4.56 0 0124 4.56zM8.09 20.2V9.55h-3.2v10.65h3.2zm-1.6-12.2a1.84 1.84 0 110-3.68 1.84 1.84 0 010 3.68zm15.32 12.2v-5.84c0-3.14-1.65-4.6-3.84-4.6-1.77 0-2.57 1.01-3.03 1.72V9.55h-3.2c.04.78 0 10.65 0 10.65h3.2v-5.95c0-.32.02-.64.11-.87.23-.6.76-1.21 1.65-1.21 1.16 0 1.62.92 1.62 2.26v5.77h3.2zm-12.5-10.65h-3.2V20.2h3.2V9.55zm-1.6-12.2a1.84 1.84 0 110-3.68 1.84 1.84 0 010 3.68zm15.32 12.2v-5.84c0-3.14-1.65-4.6-3.84-4.6-1.77 0-2.57 1.01-3.03 1.72V9.55h-3.2c.04.78 0 10.65 0 10.65h3.2v-5.95c0-.32.02-.64.11-.87.23-.6.76-1.21 1.65-1.21 1.16 0 1.62.92 1.62 2.26v5.77h3.2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
