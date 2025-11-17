import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Send, Clock, AlertCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nama tidak boleh kosong';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email tidak boleh kosong';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subjek tidak boleh kosong';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Pesan tidak boleh kosong';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="gambar/desa3.PNG" 
            alt="Kontak Desa" 
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
              Hubungi Kami
            </h1>
            <p className="text-xl text-gray-200">
              Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau saran
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-green-50 p-8 rounded-lg shadow-md h-full">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  Informasi Kontak
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <MapPin size={24} className="text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Alamat</h3>
                      <p className="text-gray-600">
                        Jl. Padang Sidempuan, Sibuluan, Kec. Pandan, Kab. Tapanuli Tengah, Provinsi Sumatera Utara
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <Phone size={24} className="text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Telepon</h3>
                      <p className="text-gray-600">(021) 1234-5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <Mail size={24} className="text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600">info@sibuluan.desa.id</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <Clock size={24} className="text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Jam Operasional</h3>
                      <p className="text-gray-600">
                        Senin - Jumat: 08.00 - 16.00<br />
                        Sabtu: 08.00 - 12.00<br />
                        Minggu: Tutup
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-bold text-gray-800 mb-3">Media Sosial</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                    <a 
                      href="#" 
                      className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a 
                      href="#" 
                      className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  Kirim Pesan
                </h2>
                
                {isSubmitted ? (
                  <div className="bg-green-100 border border-green-200 text-green-700 px-4 py-6 rounded-lg text-center">
                    <div className="flex justify-center mb-4">
                      <div className="bg-green-200 p-3 rounded-full">
                        <Send size={24} className="text-green-700" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Pesan Terkirim!</h3>
                    <p>Terima kasih telah menghubungi kami. Kami akan segera membalas pesan Anda.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                        placeholder="Masukkan nama lengkap"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle size={14} className="mr-1" />
                          {errors.name}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                        placeholder="Masukkan alamat email"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle size={14} className="mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                        Subjek
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.subject ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                      >
                        <option value="">Pilih subjek</option>
                        <option value="Informasi">Informasi Umum</option>
                        <option value="Layanan">Layanan Desa</option>
                        <option value="Kerjasama">Kerjasama/Investasi</option>
                        <option value="Saran">Saran/Masukan</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle size={14} className="mr-1" />
                          {errors.subject}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Pesan
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                        placeholder="Tulis pesan Anda di sini..."
                      ></textarea>
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle size={14} className="mr-1" />
                          {errors.message}
                        </p>
                      )}
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Mengirim...
                        </>
                      ) : (
                        <>
                          Kirim Pesan
                          <Send size={18} className="ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Lokasi Kami
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Temukan lokasi Kantor Desa Sibuluan dan kunjungi kami
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            {/* This is a placeholder for a map. In a real implementation, you would use a proper map library */}
            <div className="relative h-96 bg-gray-200">
              <img 
                src="gambar/kantor.PNG" 
                alt="Kantor Kepala Desa Sibuluan" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10"></div>
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-md max-w-sm">
                <h3 className="font-bold text-gray-800 mb-2">Kantor Desa Sibuluan</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Jl. Padang Sidempuan, Sibuluan, Gang Makmur, Kec. Pandan, Kab. Tapanuli Tengah, Provinsi Sumatera Utara
                </p>
                <a 
                  href="#"
                  className="text-green-700 font-medium text-sm flex items-center hover:text-green-800"
                >
                  Dapatkan Petunjuk Arah
                  {/* <ArrowRight size={14} className="ml-1" /> */}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              Pertanyaan Umum
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Beberapa pertanyaan yang sering diajukan tentang Desa Sibuluan
            </motion.p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">Apa saja layanan yang disediakan oleh Kantor Desa?</h3>
              <p className="text-gray-600">
                Kantor Desa Sibuluan menyediakan berbagai layanan administrasi seperti pembuatan surat keterangan, 
                surat pengantar, layanan kependudukan, serta informasi mengenai program pembangunan dan kegiatan desa.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">Bagaimana cara mengajukan proposal kegiatan di desa?</h3>
              <p className="text-gray-600">
                Untuk mengajukan proposal kegiatan, Anda dapat mengirimkan proposal tertulis ke Kantor Desa atau 
                melalui email resmi desa. Proposal akan dibahas dalam musyawarah desa dan akan diberikan tanggapan 
                sesuai dengan hasil musyawarah.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">Bagaimana cara mengajukan investasi di Desa Sibuluan?</h3>
              <p className="text-gray-600">
                Untuk melakukan investasi di Desa Sibuluan, Anda dapat menghubungi Kantor Desa untuk mengatur pertemuan 
                dengan Kepala Desa dan tim ekonomi desa. Tim akan membantu memberikan informasi tentang potensi investasi, 
                regulasi, dan prosedur yang diperlukan.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">Apakah ada homestay di Desa Sibuluan?</h3>
              <p className="text-gray-600">
                Ya, Desa Sibuluan memiliki 15 homestay yang dikelola oleh masyarakat desa. Untuk reservasi dan 
                informasi lebih lanjut, Anda dapat menghubungi koordinator homestay desa melalui nomor telepon 
                yang tertera di halaman Wisata.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;