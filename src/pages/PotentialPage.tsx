import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Briefcase, Map, ShoppingBag, Users, FileText, ArrowRight } from 'lucide-react';

const PotentialPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="gambar/desa2.PNG" 
            alt="Potensi Desa" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Potensi Desa Sibuluan
            </h1>
            <p className="text-xl text-gray-200">
              Menggali dan mengembangkan potensi desa untuk kesejahteraan masyarakat
            </p>
          </motion.div>
        </div>
      </section>

      {/* Agriculture Potential */}
      <section id="agriculture" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4 flex items-center">
                <Leaf size={16} className="mr-2" />
                Potensi Pertanian
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Pertanian Organik yang Produktif
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Desa Sibuluan memiliki lahan pertanian yang subur seluas 500 hektar dengan sistem irigasi yang baik.
                  Komoditas utama yang dihasilkan adalah padi organik, dan sayuran.
                </p>
                <p>
                  Hasil pertanian organik dari Desa Sibuluan telah mendapatkan sertifikasi organik nasional dan 
                  menjadi incaran pasar domestik dan internasional karena kualitasnya yang tinggi.
                </p>
                <p>
                  Program pertanian terpadu juga telah dikembangkan dengan menggabungkan pertanian tanaman pangan, 
                  peternakan, dan perikanan dalam satu sistem yang saling mendukung dan berkelanjutan.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <h4 className="text-2xl font-bold text-green-700 mb-1">500</h4>
                  <p className="text-gray-600">Hektar Lahan</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <h4 className="text-2xl font-bold text-green-700 mb-1">10+</h4>
                  <p className="text-gray-600">Komoditas</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <h4 className="text-2xl font-bold text-green-700 mb-1">800</h4>
                  <p className="text-gray-600">Petani</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Pertanian Desa" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="gambar/jagung.PNG" 
                  alt="Pertanian Desa" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Pertanian Desa" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Pertanian Desa" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tourism Potential */}
      <section id="tourism" className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Wisata Desa" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="https://images.pexels.com/photos/2832039/pexels-photo-2832039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Wisata Desa" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="gambar/sungai.PNG" 
                  alt="Wisata Desa" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Wisata Desa" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4 flex items-center">
                <Map size={16} className="mr-2" />
                Potensi Wisata
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Keindahan Alam yang Memukau
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Desa Sibuluan dikelilingi oleh pegunungan, sungai, dan air terjun yang menawarkan pemandangan 
                  alam yang memukau. Wisata alam menjadi potensi utama yang dapat dikembangkan untuk meningkatkan 
                  perekonomian desa.
                </p>
                <p>
                  Beberapa destinasi wisata yang sudah dikembangkan antara lain Air Terjun Sejahtera, 
                  Bukit Pemandangan, Taman Bunga, dan Desa Wisata yang menampilkan kehidupan pedesaan 
                  yang otentik.
                </p>
                <p>
                  Pengembangan homestay dan kuliner lokal juga menjadi fokus untuk mendukung pariwisata berkelanjutan 
                  yang melibatkan masyarakat setempat dalam pengelolaannya.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-100">
                  <h4 className="text-2xl font-bold text-blue-700 mb-1">12</h4>
                  <p className="text-gray-600">Destinasi</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-100">
                  <h4 className="text-2xl font-bold text-blue-700 mb-1">15</h4>
                  <p className="text-gray-600">Homestay</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-100">
                  <h4 className="text-2xl font-bold text-blue-700 mb-1">5K+</h4>
                  <p className="text-gray-600">Pengunjung/Bulan</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Crafts Potential */}
      <section id="crafts" className="py-16 md:py-24 bg-amber-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-sm font-medium mb-4 flex items-center">
                <ShoppingBag size={16} className="mr-2" />
                Potensi Kerajinan
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Kerajinan Tradisional yang Unik
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Desa Sibuluan memiliki tradisi kerajinan tangan yang diwariskan secara turun-temurun. 
                  Kerajinan anyaman bambu, tenun, dan ukiran kayu menjadi produk unggulan yang diminati 
                  oleh wisatawan domestik dan internasional.
                </p>
                <p>
                  Kelompok pengrajin desa telah membentuk koperasi untuk memudahkan pemasaran dan pengembangan 
                  produk kerajinan. Pelatihan desain dan peningkatan kualitas juga rutin dilakukan untuk 
                  meningkatkan nilai jual produk.
                </p>
                <p>
                  Produk kerajinan Desa Sibuluan tidak hanya dijual sebagai souvenir wisata, tetapi juga 
                  telah memasuki pasar nasional dan ekspor dengan nilai ekonomi yang tinggi.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-amber-50 p-4 rounded-lg text-center border border-amber-100">
                  <h4 className="text-2xl font-bold text-amber-700 mb-1">8</h4>
                  <p className="text-gray-600">Jenis Kerajinan</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg text-center border border-amber-100">
                  <h4 className="text-2xl font-bold text-amber-700 mb-1">50+</h4>
                  <p className="text-gray-600">Pengrajin</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg text-center border border-amber-100">
                  <h4 className="text-2xl font-bold text-amber-700 mb-1">3</h4>
                  <p className="text-gray-600">Negara Tujuan Ekspor</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="gambar/kerajinan2.PNG" 
                  alt="Kerajinan Desa" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="gambar/kerajinan1.PNG" 
                  alt="Kerajinan Desa" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="https://images.pexels.com/photos/175709/pexels-photo-175709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Kerajinan Desa" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="gambar/kerajinan3.PNG"
                  alt="Kerajinan Desa" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture Potential */}
      <section id="culture" className="py-16 md:py-24 bg-purple-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="gambar/budaya1.PNG" 
                  alt="Budaya Desa" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="gambar/budaya2.PNG" 
                  alt="Budaya Desa" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="gambar/budaya3.PNG" 
                  alt="Budaya Desa" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="gambar/budaya4.PNG" 
                  alt="Budaya Desa" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium mb-4 flex items-center">
                <Users size={16} className="mr-2" />
                Potensi Budaya
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Kekayaan Tradisi dan Budaya
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Desa Sibuluan memiliki kekayaan budaya dan tradisi yang masih terjaga hingga saat ini. 
                  Berbagai upacara adat, kesenian tradisional, dan kearifan lokal menjadi daya tarik 
                  tersendiri bagi wisatawan.
                </p>
                <p>
                  Seni tari, musik, dan teater tradisional secara rutin dipentaskan dalam acara-acara 
                  desa dan festival budaya tahunan. Sanggar seni desa juga aktif melakukan pelatihan 
                  bagi generasi muda untuk melestarikan warisan budaya.
                </p>
                <p>
                  Berbagai upacara adat seperti upacara panen, upacara syukuran desa, dan upacara 
                  pernikahan tradisional menjadi atraksi budaya yang diminati oleh wisatawan yang 
                  ingin mengenal lebih dalam kehidupan masyarakat desa.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-purple-50 p-4 rounded-lg text-center border border-purple-100">
                  <h4 className="text-2xl font-bold text-purple-700 mb-1">6</h4>
                  <p className="text-gray-600">Kesenian Tradisional</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center border border-purple-100">
                  <h4 className="text-2xl font-bold text-purple-700 mb-1">4</h4>
                  <p className="text-gray-600">Upacara Adat</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center border border-purple-100">
                  <h4 className="text-2xl font-bold text-purple-700 mb-1">1</h4>
                  <p className="text-gray-600">Festival Tahunan</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Small Business Potential */}
      <section id="business" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-4 flex items-center">
                <Briefcase size={16} className="mr-2" />
                Potensi UMKM
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                UMKM yang Berkembang Pesat
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Desa Sibuluan memiliki 25 UMKM aktif yang bergerak di berbagai bidang seperti pengolahan 
                  hasil pertanian, kerajinan, kuliner, dan jasa wisata. UMKM ini menjadi motor penggerak 
                  perekonomian desa dan penyerap tenaga kerja lokal.
                </p>
                <p>
                  Produk-produk UMKM desa seperti makanan olahan (keripik, manisan, selai), minuman herbal, 
                  dan produk kecantikan berbahan alami telah memasuki pasar regional dan mendapatkan sertifikasi 
                  PIRT dan halal.
                </p>
                <p>
                  Pemerintah desa aktif memberikan pelatihan manajemen, pemasaran digital, dan akses permodalan 
                  untuk mendukung pengembangan UMKM dan meningkatkan daya saing produk-produk lokal.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <h4 className="text-2xl font-bold text-green-700 mb-1">25</h4>
                  <p className="text-gray-600">UMKM Aktif</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <h4 className="text-2xl font-bold text-green-700 mb-1">150+</h4>
                  <p className="text-gray-600">Tenaga Kerja</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <h4 className="text-2xl font-bold text-green-700 mb-1">12</h4>
                  <p className="text-gray-600">Jenis Produk</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/4353618/pexels-photo-4353618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="UMKM Desa" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="gambar/umkm1.PNG" 
                  alt="UMKM Desa" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="gambar/umkm2.PNG" 
                  alt="UMKM Desa" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="gambar/umkm4.PNG" 
                  alt="UMKM Desa" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm font-medium mb-4 flex items-center justify-center mx-auto"
            >
              <FileText size={16} className="mr-2" />
              Peluang Investasi
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Mari Berinvestasi di Desa Sibuluan
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Berbagai peluang investasi yang dapat dikembangkan di Desa Sibuluan
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Investment 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="gambar/homestay.PNG" 
                  alt="Resort & Homestay" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Resort & Homestay
                </h3>
                <p className="text-gray-600 mb-4">
                  Investasi dalam pembangunan resort dan homestay untuk mendukung pengembangan pariwisata desa.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Potensi ROI: 20-25% per tahun</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Periode BEP: 4-5 tahun</span>
                  </li>
                </ul>
                <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  Detail Investasi
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </motion.div>

            {/* Investment 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="gambar/pengolahan.PNG" 
                  alt="Pengolahan Hasil Pertanian" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Pengolahan Hasil Pertanian
                </h3>
                <p className="text-gray-600 mb-4">
                  Pengembangan industri pengolahan hasil pertanian untuk meningkatkan nilai tambah produk.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Potensi ROI: 18-22% per tahun</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Periode BEP: 3-4 tahun</span>
                  </li>
                </ul>
                <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  Detail Investasi
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </motion.div>

            {/* Investment 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="gambar/wisata.PNG" 
                  alt="Pengembangan Wisata Edukasi" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Wisata Edukasi
                </h3>
                <p className="text-gray-600 mb-4">
                  Pengembangan wisata edukasi berbasis pertanian organik dan kerajinan tradisional.
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Potensi ROI: 15-18% per tahun</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight size={16} className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Periode BEP: 3-5 tahun</span>
                  </li>
                </ul>
                <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  Detail Investasi
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="#contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center"
            >
              Hubungi Kami untuk Investasi
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PotentialPage;