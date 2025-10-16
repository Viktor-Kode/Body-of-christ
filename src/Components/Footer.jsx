import React from "react";
import { FaTiktok, FaYoutube, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Ministry Info */}
        <div>
          <h2 className="text-xl font-bold text-white">Body of Christ Ministry</h2>
          <p className="mt-3 text-gray-400">
            Sharing the truth of the Gospel with passion, knowledge, and love.
          </p>
        </div>

        {/* Quick Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FaEnvelope className="text-blue-400" /> 
            bodyofchristministry@email.com
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-5 text-2xl">
            <a href="https://tiktok.com/@yourpage" target="_blank" rel="noreferrer" className="hover:text-pink-500">
              <FaTiktok />
            </a>
            <a href="https://youtube.com/@yourchannel" target="_blank" rel="noreferrer" className="hover:text-red-500">
              <FaYoutube />
            </a>
            <a href="https://facebook.com/yourpage" target="_blank" rel="noreferrer" className="hover:text-blue-400">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Body of Christ Ministry. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
