"use client";
import Link from "next/link";
import {ArrowLeft, MapPin, Sparkles, Hammer, Users, Award, Target, CheckCircle} from "lucide-react";

export default function page() {
  const highlights = [
    {
      icon: <MapPin className='w-5 h-5' />,
      title: "Sentra Kerajinan Tumang",
      description:
        "Diproduksi langsung di sentra kerajinan tembaga dan kuningan Tumang, Boyolali yang telah dikenal secara nasional dan internasional.",
    },
    {
      icon: <Sparkles className='w-5 h-5' />,
      title: "Berbagai Karya Custom",
      description:
        "Menghadirkan berbagai karya untuk kebutuhan interior, eksterior, dan proyek custom mulai dari elemen dekoratif, ornamen arsitektural, hingga produk tematik.",
    },
    {
      icon: <Hammer className='w-5 h-5' />,
      title: "Handmade berkualitas",
      description: "Dikerjakan secara manual dengan perhatian tinggi pada detail, proporsi, dan kualitas material oleh pengrajin berpengalaman.",
    },
    {
      icon: <Users className='w-5 h-5' />,
      title: "Kolaborasi Profesional",
      description: "Dipercaya dalam berbagai kolaborasi dengan klien individu, desainer, arsitek, kontraktor, hingga instansi dan pihak swasta.",
    },
    {
      icon: <Award className='w-5 h-5' />,
      title: "Kualitas Terjamin",
      description: "Berkomitmen menghasilkan karya yang rapi, bernilai estetika, dan berdaya tahan jangka panjang.",
    },
    {
      icon: <Target className='w-5 h-5' />,
      title: "Jangkauan Luas",
      description: "Melayani kebutuhan lokal maupun internasional dengan standar kualitas yang konsisten.",
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='relative bg-white border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-6 py-12'>
          <Link href='/' className='inline-flex items-center gap-2 text-gray-600 hover:text-accent transition-colors mb-8'>
            <ArrowLeft className='w-5 h-5' />
            <span>Kembali</span>
          </Link>

          <div className='text-center'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4'>
              Tentang <span className='text-accent'>Aerisartis</span>
            </h1>
            <p className='text-gray-600 text-lg max-w-2xl mx-auto'>Kerajinan Tembaga & Kuningan Handmade dari Tumang, Boyolali</p>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-6 py-16'>
        {/* Main Description */}
        <div className='max-w-4xl mx-auto mb-16'>
          <div className='bg-white rounded-2xl border border-gray-200 p-4 md:p-8'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center'>
                <Sparkles className='w-6 h-6 text-accent' />
              </div>
              <h2 className='text-2xl md:text-3xl font-bold text-gray-900'>Cerita Kami</h2>
            </div>

            <div className='prose prose-lg max-w-none'>
              <p className='text-gray-700 leading-relaxed mb-6'>
                Aerisartis adalah usaha kerajinan produk anak bangsa yang bergerak dalam pembuatan tembaga dan kuningan handmade, diproduksi langsung
                di sentra kerajinan tembaga dan kuningan Tumang, Boyolali yang telah dikenal secara nasional dan internasional. <br /> Kami
                menghadirkan berbagai karya untuk kebutuhan interior, eksterior, dan proyek custom mulai dari elemen dekoratif, ornamen arsitektural,
                hingga produk tematik sesuai konsep klien yang dikerjakan secara manual dengan perhatian tinggi pada detail, proporsi, dan kualitas
                material.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className='max-w-6xl mx-auto mb-16'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12'>
            Keunggulan <span className='text-accent'>Kami</span>
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {highlights.map((item, index) => (
              <div
                key={index}
                className='bg-white border border-gray-200 rounded-xl p-6 hover:border-accent hover:shadow-lg transition-all duration-300 group'>
                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors'>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 mb-2 group-hover:text-accent transition-colors'>{item.title}</h3>
                    <p className='text-gray-600 text-sm leading-relaxed'>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className='mt-20 text-center'>
          <div className='bg-white border border-gray-200 rounded-2xl p-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Siap Mewujudkan Proyek Anda?</h2>
            <p className='text-gray-600 text-lg mb-8 max-w-2xl mx-auto'>
              Konsultasikan kebutuhan Anda dengan tim kami dan dapatkan solusi terbaik untuk proyek Anda
            </p>
            <Link href='/#contact'>
              <button className='bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg'>
                Hubungi Kami Sekarang
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
