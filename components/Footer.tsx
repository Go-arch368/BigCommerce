import {
    Twitter,
    Facebook,
    Linkedin,
    Youtube,
    Instagram,
  } from 'lucide-react';
  
  const Footer = () => {
    return (
      <div className="w-full bg-[#021649] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Features Column */}
            <div className="md:col-span-1">
              <h2 className="text-xl font-bold mb-6">Features</h2>
              <ul className="space-y-4">
                <li className="text-gray-300 hover:text-white cursor-pointer transition">Create</li>
                <li className="text-gray-300 hover:text-white cursor-pointer transition">Convert</li>
                <li className="text-gray-300 hover:text-white cursor-pointer transition">Market</li>
                <li className="text-gray-300 hover:text-white cursor-pointer transition">Grow</li>
                <li className="text-gray-300 hover:text-white cursor-pointer transition">Operate</li>
              </ul>
            </div>
  
            {/* Resources Column */}
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold mb-6">Resources</h2>
              <div className="grid grid-cols-2 gap-6">
                <ul className="space-y-4">
                  <li className="text-gray-300 hover:text-white cursor-pointer transition">Pricing</li>
                  <li className="text-gray-300 hover:text-white cursor-pointer transition">Free Trial</li>
                  <li className="text-gray-300 hover:text-white cursor-pointer transition">Request a Demo</li>
                  <li className="text-gray-300 hover:text-white cursor-pointer transition">Apps & Integrations</li>
                  <li className="text-gray-300 hover:text-white cursor-pointer transition">Themes & Templates</li>
                </ul>
                <ul className="space-y-4">
                  <li className="text-gray-300 hover:text-white cursor-pointer transition">Events</li>
                  <li className="text-gray-300 hover:text-white cursor-pointer transition">Become a Partner</li>
                  <li className="text-gray-300 hover:text-white cursor-pointer transition">Find a Partner</li>
                  <li className="text-gray-300 hover:text-white cursor-pointer transition">Become an Affiliate</li>
                  <li className="text-gray-300 hover:text-white cursor-pointer transition">BigCommerce Blog</li>
                  <li className="text-gray-300 hover:text-white cursor-pointer transition">BigCommerce Services</li>
                </ul>
              </div>
            </div>
  
            {/* Help Center Column */}
            <div className="md:col-span-1">
              <h2 className="text-xl font-bold mb-6">Help Center</h2>
              <ul className="space-y-4">
                <li className="text-gray-300 hover:text-white cursor-pointer transition">BigCommerce Community</li>
                <li className="text-gray-300 hover:text-white cursor-pointer transition">Knowledge Base</li>
                <li className="text-gray-300 hover:text-white cursor-pointer transition">Videos</li>
                <li className="text-gray-300 hover:text-white cursor-pointer transition">Contact Tech Support</li>
                <li className="text-gray-300 hover:text-white cursor-pointer transition">Developer Center</li>
                <li className="text-gray-300 hover:text-white cursor-pointer transition">Developer Community</li>
                <li className="text-gray-300 hover:text-white cursor-pointer transition">API Documentation</li>
                <li className="text-gray-300 hover:text-white cursor-pointer transition">Theme Documentation</li>
              </ul>
            </div>
  
            {/* Company Column */}
            <div className="md:col-span-1">
              <h2 className="text-xl font-bold mb-6">Company</h2>
              <ul className="space-y-4">
                <li className="text-gray-300 hover:text-white cursor-pointer transition">About Us</li>
                <li className="text-gray-300 hover:text-white cursor-pointer transition">Careers</li>
                <li className="text-gray-300 hover:text-white cursor-pointer transition">Awards</li>
                <li className="text-gray-300 hover:text-white cursor-pointer transition">Platform Trust Center</li>
                <li className="text-gray-300 hover:text-white cursor-pointer transition">Leaders</li>
                <li className="text-gray-300 hover:text-white cursor-pointer transition">Press</li>
                <li className="text-gray-300 hover:text-white cursor-pointer transition">Investor Relations</li>
              </ul>
            </div>
          </div>
  
          {/* Divider */}
          <div className="border-t border-gray-700 my-10"></div>
  
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center">
         
            
            {/* Social Icons */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer