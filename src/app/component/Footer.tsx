import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-rose-200">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          {/* Logo Section */}
          <a
            href="#"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <span className="text-3xl text-dark dark:text-light">AQSA</span>
          </a>

          {/* Branding */}
          <span className="text-3xl text-pink-700 sm:ml-4">
            AURA
            <a
              href="https://twitter.com/aqsaarshi"
              className="text-gray-600 ml-2"
              rel="noopener noreferrer"
              target="_blank"
            >
              @aqsaarshi
            </a>
          </span>

          {/* Social Media Icons */}
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              href="https://facebook.com"
              className="text-gray-500"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="w-6 h-6 hover:text-blue-600" />
            </a>
            <a
              href="https://twitter.com"
              className="ml-3 text-gray-500"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="w-6 h-6 hover:text-blue-400" />
            </a>
            <a
              href="https://instagram.com"
              className="ml-3 text-gray-500"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-6 h-6 hover:text-pink-600" />
            </a>
            <a
              href="https://linkedin.com"
              className="ml-3 text-gray-500"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6 hover:text-blue-700" />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
