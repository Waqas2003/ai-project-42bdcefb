import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 h-screen p-4 pt-6 md:p-6 lg:p-12">
      <div className="container mx-auto">
        <p className="text-lg text-gray-600">Copyright 2023 Travel Agency</p>
        <ul className="flex justify-center">
          <li className="mr-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;