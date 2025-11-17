import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

type NewsArticle = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
  author: string;
};

const NewsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Sample news articles
  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: 'Pembangunan Infrastruktur Jalan Desa Rampung',
      excerpt: 'Proyek pembangunan jalan desa sepanjang 5 kilometer telah selesai dikerjakan dan siap dimanfaatkan oleh masyarakat.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '12 Juni 2023',
      image: 'gambar/jln.PNG',
      category: 'infrastruktur',
      author: 'Admin Desa',
    },
    {
      id: 2,
      title: 'Pelatihan Pertanian Organik untuk Petani Desa',
      excerpt: 'Dinas Pertanian mengadakan pelatihan pertanian organik untuk meningkatkan kualitas hasil pertanian desa.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '5 Juni 2023',
      image: 'gambar/pelatihan.PNG',
      category: 'pertanian',
      author: 'Tim Penyuluh',
    },
    {
      id: 3,
      title: 'Festival Budaya Desa Akan Digelar Bulan Depan',
      excerpt: 'Festival budaya tahunan akan kembali digelar untuk mempromosikan kebudayaan dan tradisi desa.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '28 Mei 2023',
      image: 'gambar/festival.PNG',
      category: 'budaya',
      author: 'Panitia Festival',
    },
    {
      id: 4,
      title: 'Koperasi Desa Catat Peningkatan Laba 30% Tahun Ini',
      excerpt: 'Koperasi Desa Sibuluan mencatat peningkatan laba sebesar 30% dibandingkan tahun lalu berkat program-program inovatif.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '15 Mei 2023',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'ekonomi',
      author: 'Pengurus Koperasi',
    },
    {
      id: 5,
      title: 'Program Beasiswa untuk Siswa Berprestasi Diluncurkan',
      excerpt: 'Pemerintah desa meluncurkan program beasiswa untuk mendukung pendidikan siswa berprestasi dari keluarga kurang mampu.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '10 Mei 2023',
      image: 'gambar/beasiswa.PNG',
      category: 'pendidikan',
      author: 'Sekretaris Desa',
    },
    {
      id: 6,
      title: 'Posyandu Desa Mendapatkan Peralatan Medis Baru',
      excerpt: 'Posyandu Desa Sejahtera menerima bantuan peralatan medis baru untuk meningkatkan layanan kesehatan bagi warga.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '2 Mei 2023',
      image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'kesehatan',
      author: 'Kader Posyandu',
    },
    {
      id: 7,
      title: 'Desa Sibuluan Raih Penghargaan Desa Terbaik Tingkat Provinsi',
      excerpt: 'Desa Sibuluan berhasil meraih penghargaan sebagai desa terbaik tingkat provinsi dalam kategori pemberdayaan masyarakat.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '25 April 2023',
      image: 'https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'prestasi',
      author: 'Kepala Desa',
    },
    {
      id: 8,
      title: 'Penanaman 1000 Pohon di Kawasan Hutan Desa',
      excerpt: 'Program penghijauan dengan penanaman 1000 pohon dilakukan di kawasan hutan desa untuk menjaga kelestarian lingkungan.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '18 April 2023',
      image: 'https://images.pexels.com/photos/6152103/pexels-photo-6152103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'lingkungan',
      author: 'Kelompok Tani Hutan',
    },
  ];

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(newsArticles.map(article => article.category)))];

  // Filter articles based on search term and category
  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="gambar/desa1.PNG" 
            alt="Berita Desa" 
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
              Berita & Kegiatan
            </h1>
            <p className="text-xl text-gray-200">
              Informasi terbaru seputar kegiatan dan perkembangan Desa Sibuluan
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Search Bar */}
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Cari berita..."
                    className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-4 top-3.5 text-gray-400" size={18} />
                </div>
              </div>

              {/* Category Filter */}
              <div className="w-full md:w-2/3 flex flex-wrap gap-3">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full transition-colors flex items-center ${
                      activeCategory === category
                        ? 'bg-green-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    {category === 'all' ? (
                      'Semua'
                    ) : (
                      <>
                        <Tag size={14} className="mr-1" />
                        <span className="capitalize">{category}</span>
                      </>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* News Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar size={14} className="mr-1" />
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span className="capitalize">{article.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Link 
                    to={`/news/${article.id}`}
                    className="text-green-700 hover:text-green-800 font-medium inline-flex items-center"
                  >
                    Baca Selengkapnya
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Empty State */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">Tidak ada berita yang sesuai dengan pencarian Anda.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="mt-4 text-green-700 hover:text-green-800 font-medium"
              >
                Reset Pencarian
              </button>
            </div>
          )}

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-600 hover:bg-gray-50">
                Sebelumnya
              </button>
              <button className="px-3 py-2 rounded-md bg-green-600 text-white">1</button>
              <button className="px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-600 hover:bg-gray-50">2</button>
              <button className="px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-600 hover:bg-gray-50">3</button>
              <button className="px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-600 hover:bg-gray-50">
                Selanjutnya
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-green-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Dapatkan Berita Terbaru
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-green-100 mb-8"
            >
              Berlangganan newsletter kami untuk mendapatkan informasi terbaru tentang kegiatan dan perkembangan Desa Sejahtera
            </motion.p>
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                placeholder="Alamat email Anda"
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap"
              >
                Berlangganan
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsPage;