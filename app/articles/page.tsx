"use client";
import {useState} from "react";
import Link from "next/link";
import {ArrowLeft, Search, Calendar, Clock, ArrowRight, Tag} from "lucide-react";

export default function page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const categories = ["Semua", "Tutorial", "Inspirasi", "Berita", "Tips & Trik"];

  const articles = [
    {
      id: 1,
      title: "Seni Menempa Tembaga: Warisan Budaya yang Tak Lekang Waktu",
      excerpt: "Menelusuri sejarah dan teknik menempa tembaga yang telah diwariskan turun-temurun selama ratusan tahun di Nusantara.",
      category: "Berita",
      author: "Aeris Artis",
      date: "15 Desember 2024",
      readTime: "5 menit",
    },
    {
      id: 2,
      title: "Cara Merawat Kerajinan Tembaga dan Kuningan Agar Tetap Berkilau",
      excerpt: "Tips praktis untuk menjaga keindahan dan kilau alami kerajinan logam Anda agar awet dan tahan lama.",
      category: "Tips & Trik",
      author: "Tim Aeris",
      date: "10 Desember 2024",
      readTime: "4 menit",
    },
    {
      id: 3,
      title: "Inspirasi Desain: Memadukan Kerajinan Tembaga dengan Interior Modern",
      excerpt: "Bagaimana mengintegrasikan kerajinan tembaga tradisional ke dalam desain interior kontemporer untuk menciptakan estetika unik.",
      category: "Inspirasi",
      author: "Desi Kusuma",
      date: "5 Desember 2024",
      readTime: "6 menit",
    },
    {
      id: 4,
      title: "Proses Pembuatan Vas Tembaga: Dari Lembaran hingga Karya Seni",
      excerpt: "Mengintip proses detail pembuatan vas tembaga handmade, dari tahap desain hingga finishing yang memukau.",
      category: "Tutorial",
      author: "Budi Santoso",
      date: "1 Desember 2024",
      readTime: "8 menit",
    },
    {
      id: 5,
      title: "Tembaga vs Kuningan: Memilih Material yang Tepat untuk Proyek Anda",
      excerpt: "Panduan lengkap memahami perbedaan karakteristik, kegunaan, dan keunggulan tembaga dan kuningan untuk berbagai keperluan.",
      category: "Tips & Trik",
      author: "Aeris Artis",
      date: "28 November 2024",
      readTime: "5 menit",
    },
    {
      id: 6,
      title: "Kolaborasi dengan Arsitek: Menciptakan Entrance Gate Megah",
      excerpt: "Kisah di balik pembuatan pintu gerbang tembaga monumental untuk sebuah kompleks pemerintahan di Jakarta.",
      category: "Berita",
      author: "Tim Aeris",
      date: "20 November 2024",
      readTime: "7 menit",
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const matchCategory = selectedCategory === "Semua" || article.category === selectedCategory;
    const matchSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) || article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className='min-h-screen bg-[#0a0908]'>
      {/* Header */}
      <div className='relative bg-linear-to-b from-[#1c1917] to-[#0a0908] border-b border-[#292524]'>
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl'></div>
          <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#b85c2e]/5 rounded-full blur-3xl'></div>
        </div>

        <div className='relative max-w-7xl mx-auto px-6 py-12'>
          <Link href='/' className='inline-flex items-center gap-2 text-white/70 hover:text-accent transition-colors mb-8'>
            <ArrowLeft className='w-5 h-5' />
            <span>Kembali</span>
          </Link>

          <div className='text-center mb-8'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>
              Artikel & <span className='text-accent'>Inspirasi</span>
            </h1>
            <p className='text-white/70 text-lg max-w-2xl mx-auto'>Temukan wawasan, tips, dan cerita menarik seputar dunia kerajinan logam</p>
          </div>

          <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
            <div className='relative w-full md:w-96'>
              <Search className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40' />
              <input
                type='text'
                placeholder='Cari artikel...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-full bg-[#1c1917]/50 backdrop-blur-sm border border-[#292524] rounded-full pl-12 pr-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-accent/50 transition-colors'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className='sticky top-0 z-40 bg-[#0a0908]/95 backdrop-blur-md border-b border-[#292524]'>
        <div className='max-w-7xl mx-auto px-6 py-4'>
          <div className='flex items-center gap-2 overflow-x-auto scrollbar-hide'>
            <Tag className='w-5 h-5 text-white/60 shrink-0' />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300
                  ${selectedCategory === category ? "bg-accent text-white" : "bg-[#1c1917]/50 text-white/70 hover:text-white hover:bg-[#1c1917]"}
                `}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className='max-w-7xl mx-auto px-6 py-12'>
        <div className='mb-6 text-white/60 text-sm'>Menampilkan {filteredArticles.length} artikel</div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              href={`/article/${article.id}`}
              className='group bg-[#1c1917]/30 backdrop-blur-sm border border-[#292524] rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300'>
              <div className='p-6'>
                <div className='flex items-center gap-4 text-white/60 text-xs mb-3'>
                  <div className='flex items-center gap-1'>
                    <Calendar className='w-3.5 h-3.5' />
                    <span>{article.date}</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <Clock className='w-3.5 h-3.5' />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className='text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors line-clamp-2'>{article.title}</h3>

                <p className='text-white/60 text-sm leading-relaxed mb-4 line-clamp-3'>{article.excerpt}</p>

                <div className='flex items-center justify-between'>
                  <span className='text-white/60 text-sm'>Oleh {article.author}</span>
                  <div className='flex items-center gap-2 text-accent text-sm font-semibold group-hover:gap-3 transition-all'>
                    Baca Selengkapnya
                    <ArrowRight className='w-4 h-4' />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className='text-center py-20'>
            <p className='text-white/60 text-lg mb-4'>Tidak ada artikel ditemukan</p>
            <button
              onClick={() => {
                setSelectedCategory("Semua");
                setSearchQuery("");
              }}
              className='text-accent hover:underline'>
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
