import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Building2 size={40} className="mr-3 text-white-700" />
                Desa Sibuluan
            </h3>
            <p className="text-green-100 mb-4">
              Mengembangkan potensi desa untuk kemajuan masyarakat dan kesejahteraan bersama.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-green-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-300 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-green-100 hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-green-100 hover:text-white transition-colors">
                  Tentang Desa
                </Link>
              </li>
              <li>
                <Link to="/potential" className="text-green-100 hover:text-white transition-colors">
                  Potensi Desa
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-green-100 hover:text-white transition-colors">
                  Galeri
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-green-100 hover:text-white transition-colors">
                  Berita & Acara
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>Jl. Padang Sidempuan, Sibuluan Kec. Pandan, Kab. Tapanuli Tengah Provinsi Sumatera Utara</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>(021) 1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>info@sibuluan.desa.id</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Berita Terbaru</h3>
            <p className="text-green-100 mb-4">
              Dapatkan informasi terbaru tentang potensi dan kegiatan desa.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Email Anda"
                className="px-4 py-2 rounded-md bg-green-800 text-white placeholder-green-300 border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-md transition-colors font-medium"
              >
                Langganan
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-green-800 mt-12 pt-6 text-center text-green-300">
          <p>&copy; {new Date().getFullYear()} Desa Sibuluan. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;