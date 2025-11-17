import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, User, Briefcase, Award, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Profil Desa Sibuluan
            </h1>
            <p className="text-xl text-green-100">
              Mengenal lebih dekat sejarah, profil, dan visi misi Desa Sibuluan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="text-sm">
            <span className="text-gray-600">Beranda</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-green-700 font-medium">Profil Desa</span>
          </nav>
        </div>
      </section>

      {/* Village History */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Sejarah Desa
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Perjalanan Panjang Desa Sibuluan
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Desa Sibuluan memiliki sejarah panjang yang dimulai sejak tahun 1943. Pada awalnya, 
                  desa ini merupakan pemukiman kecil yang dihuni oleh beberapa keluarga yang mencari 
                  penghidupan dari hasil pertanian.
                </p>
                <p>
                  Nama "Sibuluan" diberikan pada tahun 1943 oleh seorang tokoh masyarakat bernama Ki Yuji Sibuluan, 
                  yang di ambil dari nama belakangnya. Selama masa penjajahan, 
                  desa ini menjadi salah satu basis perjuangan kemerdekaan.
                </p>
                <p>
                  Setelah kemerdekaan, Desa Sibuluan mulai berkembang pesat dengan pembangunan infrastruktur 
                  dan peningkatan sektor pertanian. Hingga saat ini, Desa Sibuluan terus bertransformasi 
                  menjadi desa yang mandiri dan inovatif dengan tetap menjaga nilai-nilai tradisional.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <div className="relative">
                <img 
                  src="gambar/desa2.PNG" 
                  alt="Sejarah Desa Sibuluan" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 left-0 bg-green-700 text-white px-6 py-3 rounded-tr-lg">
                  <div className="flex items-center">
                    <Calendar size={20} className="mr-2" />
                    <span>Sejak 1943</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Village Profile */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              Data Desa
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Profil Desa Sibuluan
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Informasi umum mengenai demografi, geografi, dan potensi Desa Sibuluan Indah
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Geographic Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <MapPin size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Geografi</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Lintang Utara: 01°33'</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Bujur Timur: 99°08'</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Terletak di ketinggian 0-800 Meter</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Jarak kantor Camat ke kantor Bupati: 0,25 km²</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span>70% lahan adalah Permukiman</span>
                </li>
              </ul>
            </motion.div>

            {/* Demographic Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <User size={28} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Demografi</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Jumlah penduduk: 4.639 jiwa</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Jumlah KK: 1.090 keluarga</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Kepadatan: 2566,82 jiwa</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Rasio gender: 6,12% pria, 6,40% wanita</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Tingkat pendidikan: 85% tamat SMA</span>
                </li>
              </ul>
            </motion.div>

            {/* Economic Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Briefcase size={28} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Ekonomi</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Mata pencaharian utama: pertanian</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Jumlah UMKM: 25 unit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Komoditas unggulan: beras organik</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Pendapatan per kapita: Rp3.5 juta/bulan</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Tingkat kesejahteraan: menengah</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Visi & Misi
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                Arah Pembangunan Desa Sibuluan
              </h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center text-gray-800">
                  <Award size={24} className="mr-3 text-green-600" />
                  Visi
                </h3>
                <p className="text-gray-600 ml-10 leading-relaxed">
                  "Mewujudkan Desa Sejahtera yang mandiri, produktif, dan berkelanjutan 
                  berbasis pertanian dan pariwisata dengan tetap menjunjung tinggi nilai-nilai budaya"
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center text-gray-800">
                  <Clock size={24} className="mr-3 text-green-600" />
                  Misi
                </h3>
                <ul className="space-y-3 text-gray-600 ml-10">
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Mengembangkan pertanian organik dan berkelanjutan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Memperkuat ekonomi lokal melalui UMKM dan industri kreatif</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Mengembangkan potensi wisata alam dan budaya</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Meningkatkan kualitas SDM melalui pendidikan dan pelatihan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Membangun infrastruktur yang memadai dan berkelanjutan</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="gambar/desa3.PNG" 
                alt="Visi Misi Desa Sejahtera" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Village Structure */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              Struktur Organisasi
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Pemerintahan Desa Sibuluan
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Struktur organisasi dan perangkat pemerintahan Desa Sibuluan periode 2020-2026
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Village Head */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="gambar/kades.PNG"
                  alt="Kepala Desa" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium inline-block mb-3">
                  Kepala Desa
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  Bapak Suryanto Wijaya
                </h3>
                <p className="text-gray-500 mb-4">Periode 2020-2026</p>
                <p className="text-gray-600 text-sm">
                  "Membangun desa sejahtera adalah tanggung jawab kita bersama. Mari bersatu untuk masa depan yang lebih baik."
                </p>
              </div>
            </motion.div>

            {/* Village Secretary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="gambar/sekretaris.PNG" 
                  alt="Sekretaris Desa"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium inline-block mb-3">
                  Sekretaris Desa
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  Bapak Arya Duli
                </h3>
                <p className="text-gray-500 mb-4">Periode 2020-2026</p>
                <p className="text-gray-600 text-sm">
                  "Administrasi yang baik adalah kunci penyelenggaraan pemerintahan desa yang efektif dan transparan."
                </p>
              </div>
            </motion.div>

            {/* Village Treasurer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="gambar/ben.PNG"
                  alt="Bendahara Desa" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <div className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium inline-block mb-3">
                  Bendahara Desa
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  Bapak Eko Sutrisno
                </h3>
                <p className="text-gray-500 mb-4">Periode 2020-2026</p>
                <p className="text-gray-600 text-sm">
                  "Pengelolaan keuangan yang transparan dan akuntabel untuk pembangunan desa yang berkelanjutan."
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center">
              Lihat Struktur Lengkap
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;