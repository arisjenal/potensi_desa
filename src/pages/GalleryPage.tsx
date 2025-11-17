import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category: string;
};

const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'pertanian', name: 'Pertanian' },
    { id: 'tourism', name: 'Wisata' },
    { id: 'crafts', name: 'Kerajinan' },
    { id: 'culture', name: 'Budaya' },
    { id: 'events', name: 'Kegiatan' },
  ];

  const galleryImages: GalleryImage[] = [
    // Agriculture
    {
      id: 1,
      src: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Lahan Pertanian Desa',
      category: 'pertanian',
    },
    {
      id: 2,
      src: 'gambar/pengolahan.PNG',
      alt: 'Padi Organik',
      category: 'pertanian',
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Hasil Panen',
      category: 'pertanian',
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Petani Lokal',
      category: 'pertanian',
    },
    
    // Tourism
    {
      id: 5,
      src: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Air Terjun Desa',
      category: 'tourism',
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/2832039/pexels-photo-2832039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Bukit Pemandangan',
      category: 'tourism',
    },
    {
      id: 7,
      src: 'gambar/sungai.PNG',
      alt: 'Sungai Desa',
      category: 'tourism',
    },
    {
      id: 8,
      src: 'gambar/danau.PNG',
      alt: 'Danau Sibuluan',
      category: 'tourism',
    },
    
    // Crafts
    {
      id: 9,
      src: 'gambar/bambu.PNG',
      alt: 'Anyaman Bambu',
      category: 'crafts',
    },
    {
      id: 10,
      src: 'gambar/kerajinan2.PNG',
      alt: 'Kerajinan Tenun',
      category: 'crafts',
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/175709/pexels-photo-175709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Ukiran Kayu',
      category: 'crafts',
    },
    {
      id: 12,
      src: 'gambar/kerajinan1.PNG',
      alt: 'Kerajinan Gerabah',
      category: 'crafts',
    },
    
    // Culture
    {
      id: 13,
      src: 'gambar/festival.PNG',
      alt: 'Tari Tradisional',
      category: 'culture',
    },
    {
      id: 14,
      src: 'gambar/budaya1.PNG',
      alt: 'Upacara Adat',
      category: 'culture',
    },
    {
      id: 15,
      src: 'gambar/budaya4.PNG',
      alt: 'Pakaian Tradisional',
      category: 'culture',
    },
    {
      id: 16,
      src: 'gambar/budaya3.PNG',
      alt: 'Pertunjukan Musik',
      category: 'culture',
    },
    
    // Events
    {
      id: 17,
      src: 'gambar/jln.PNG',
      alt: 'Pembangunan Jalan',
      category: 'events',
    },
    {
      id: 18,
      src: 'gambar/pelatihan.PNG',
      alt: 'Pelatihan Pertanian',
      category: 'events',
    },
    {
      id: 19,
      src: 'gambar/budaya2.PNG',
      alt: 'Festival Budaya',
      category: 'events',
    },
    {
      id: 20,
      src: 'gambar/royong.PNG',
      alt: 'Gotong Royong',
      category: 'events',
    },
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="gambar/desa3.PNG" 
            alt="Galeri Desa" 
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
              Galeri Desa Sibuluan
            </h1>
            <p className="text-xl text-gray-200">
              Kumpulan foto-foto yang menampilkan keindahan dan potensi Desa Sibuluan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layoutId={`gallery-item-${image.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-lg shadow-md cursor-pointer group"
                onClick={() => openLightbox(image)}
              >
                <div className="h-64 overflow-hidden bg-gray-100">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 bg-white border-t border-gray-100">
                  <h3 className="text-gray-800 font-medium truncate">{image.alt}</h3>
                  <p className="text-gray-500 text-sm capitalize">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">Tidak ada gambar ditemukan untuk kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="absolute top-4 right-4 z-50">
            <button 
              onClick={closeLightbox}
              className="text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            className="absolute left-4 md:left-10 text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-colors"
          >
            <ChevronLeft size={28} />
          </button>

          <div 
            className="max-w-4xl max-h-[80vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-full object-contain"
            />
          </div>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            className="absolute right-4 md:right-10 text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-colors"
          >
            <ChevronRight size={28} />
          </button>

          <div className="absolute bottom-6 left-0 right-0 text-center text-white">
            <p className="text-lg font-medium">{selectedImage.alt}</p>
            <p className="text-sm capitalize">{selectedImage.category}</p>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default GalleryPage;