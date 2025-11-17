import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, MapPin, Calendar, FileText, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-800 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Website Resmi<br />
                Desa Sibuluan
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Kecamatan Pandan, Kabupaten Tapanuli Tengah, Provinsi Sumatera Utara
              </p>
              <p className="text-lg text-green-100 mb-8 leading-relaxed">
                Portal informasi resmi yang menyediakan layanan publik, informasi pembangunan, 
                dan potensi desa untuk masyarakat dan stakeholder.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/about"
                  className="bg-white text-green-700 hover:bg-green-50 px-6 py-3 rounded-lg font-medium inline-flex items-center transition-colors"
                >
                  Profil Desa
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link
                  to="/potential"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-green-700 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Potensi Desa
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="./gambar/desa1.PNG"
                alt="Sibuluan Indah" 
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800">Sibuluan</h3>
                <p className="text-gray-600 text-sm">Luas: 	1,11 km² | Penduduk: 4.639 jiwa</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-700 mb-2">62, 23 km²</div>
              <div className="text-gray-600">Luas Kecamatan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-700 mb-2">1.090</div>
              <div className="text-gray-600">Kepala Keluarga</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-700 mb-2">1,11</div>
              <div className="text-gray-600">Luas (km²)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-700 mb-2">25</div>
              <div className="text-gray-600">UMKM Aktif</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Welcome Message */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Sambutan Kepala Desa
                </h2>
                <div className="flex items-start space-x-4">
                  <img 
                    src="gambar/kades.PNG" 
                    alt="Kepala Desa" 
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">Bapak Suryanto Wijaya</h3>
                    <p className="text-gray-600 mb-4">Kepala Desa Sibuluan</p>
                    <p className="text-gray-700 leading-relaxed">
                      "Selamat datang di website resmi Desa Sejahtera. Melalui portal ini, kami berkomitmen 
                      untuk memberikan informasi yang transparan dan pelayanan terbaik kepada masyarakat. 
                      Mari bersama-sama membangun desa yang sejahtera dan berkelanjutan."
                    </p>
                  </div>
                </div>
              </div>

              {/* Latest News */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Berita Terbaru</h2>
                  <Link 
                    to="/news"
                    className="text-green-700 hover:text-green-800 font-medium inline-flex items-center"
                  >
                    Lihat Semua
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
                
                <div className="space-y-6">
                  <article className="flex space-x-4 pb-6 border-b border-gray-200">
                    <img 
                      src="gambar/jln.PNG" 
                      alt="Berita" 
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-2 hover:text-green-700 cursor-pointer">
                        Pembangunan Infrastruktur Jalan Desa Sibuluan
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Proyek pembangunan jalan desa sepanjang 5 kilometer telah selesai dikerjakan...
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar size={14} className="mr-1" />
                        <span>12 Juni 2023</span>
                      </div>
                    </div>
                  </article>

                  <article className="flex space-x-4 pb-6 border-b border-gray-200">
                    <img 
                      src="gambar/pelatihan.PNG" 
                      alt="Berita" 
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-2 hover:text-green-700 cursor-pointer">
                        Pelatihan Pertanian Organik untuk Petani Desa
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Dinas Pertanian mengadakan pelatihan pertanian organik untuk meningkatkan...
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar size={14} className="mr-1" />
                        <span>5 Juni 2023</span>
                      </div>
                    </div>
                  </article>

                  <article className="flex space-x-4">
                    <img 
                      src="gambar/festival.PNG" 
                      alt="Berita" 
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-2 hover:text-green-700 cursor-pointer">
                        Festival Budaya Desa Akan Digelar Bulan Depan
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Festival budaya tahunan akan kembali digelar untuk mempromosikan...
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar size={14} className="mr-1" />
                        <span>28 Mei 2023</span>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              
              {/* Quick Links */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Layanan Publik</h3>
                <div className="space-y-3">
                  <a href="#" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors">
                    <FileText size={20} className="text-green-700 mr-3" />
                    <span className="text-gray-700">Surat Keterangan</span>
                  </a>
                  <a href="#" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors">
                    <Users size={20} className="text-green-700 mr-3" />
                    <span className="text-gray-700">Data Kependudukan</span>
                  </a>
                  <a href="#" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors">
                    <MapPin size={20} className="text-green-700 mr-3" />
                    <span className="text-gray-700">Peta Desa</span>
                  </a>
                  <a href="#" className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors">
                    <TrendingUp size={20} className="text-green-700 mr-3" />
                    <span className="text-gray-700">APBDes</span>
                  </a>
                </div>
              </div>

              {/* Village Info */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Informasi Desa</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Alamat</h4>
                    <p className="text-gray-600 text-sm">
                      Jl. Padang Sidempuan, Sibuluan<br />
                      Kec. Pandan, Kab. Tapanuli Tengah<br />
                      Provinsi Sumatera Utara
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Kode Pos</h4>
                    <p className="text-gray-600 text-sm">22614</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Koordinat</h4>
                    <p className="text-gray-600 text-sm">1°41′45.600″N 98°49′26.400″E</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Agama</h4>
                    <p className="text-gray-600 text-sm">Islam 87,68%</p>
                    <p className="text-gray-600 text-sm">Kristen Protestan 9,95%</p>
                    <p className="text-gray-600 text-sm">Kristen Katolik 1,85%</p>
                    <p className="text-gray-600 text-sm">Buddha 0,08%</p>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              {/* <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Prestasi Desa</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Award size={20} className="text-yellow-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm">Desa Terbaik Tingkat Provinsi</h4>
                      <p className="text-gray-600 text-xs">Kategori Pemberdayaan Masyarakat 2023</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award size={20} className="text-yellow-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm">Desa Wisata Terpilih</h4>
                      <p className="text-gray-600 text-xs">Program Kemenparekraf 2022</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award size={20} className="text-yellow-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800 text-sm">Sertifikat Organik</h4>
                      <p className="text-gray-600 text-xs">Produk Pertanian Organik 2022</p>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Weather Widget */}
              {/* <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Cuaca Hari Ini</h3>
                <div className="text-center">
                  <div className="text-3xl mb-2">🌤️</div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">28°C</div>
                  <div className="text-gray-600 text-sm">Cerah Berawan</div>
                  <div className="text-gray-500 text-xs mt-2">Kelembaban: 65%</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Prestasi Desa
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link 
              to="#"
              className="bg-green-50 hover:bg-green-100 p-6 rounded-lg text-center transition-colors group"
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-700 transition-colors">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Desa Terbaik Tingkat Provinsi</h3>
              <p className="text-gray-600 text-sm">Kategori Pemberdayaan Masyarakat 2023</p>
            </Link>

            <Link 
              to="#"
              className="bg-blue-50 hover:bg-blue-100 p-6 rounded-lg text-center transition-colors group"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
                <TrendingUp size={32} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Desa Wisata Terpilih</h3>
              <p className="text-gray-600 text-sm">Program Kemenparekraf 2022</p>
            </Link>

            <Link 
              to="#"
              className="bg-purple-50 hover:bg-purple-100 p-6 rounded-lg text-center transition-colors group"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-700 transition-colors">
                <MapPin size={32} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Sertifikat Organik</h3>
              <p className="text-gray-600 text-sm">Produk Pertanian Organik 2022</p>
            </Link>

            <Link 
              to="#"
              className="bg-amber-50 hover:bg-amber-100 p-6 rounded-lg text-center transition-colors group"
            >
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-700 transition-colors">
                <FileText size={32} className="text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Desa Yang Aman</h3>
              <p className="text-gray-600 text-sm">Desa Sibuluan Indah yang Aman</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
