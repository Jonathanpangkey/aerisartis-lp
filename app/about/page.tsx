"use client";
import Link from "next/link";
import {ArrowLeft, MapPin} from "lucide-react";

export default function page() {
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
        <div className='max-w-4xl mx-auto mb-20'>
          <div className='bg-white rounded-2xl border border-gray-200 p-8 md:p-12'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center'>
                <MapPin className='w-6 h-6 text-accent' />
              </div>
              <h2 className='text-2xl md:text-3xl font-bold text-gray-900'>Cerita Kami</h2>
            </div>

            <div className='prose prose-lg max-w-none'>
              <p className='text-gray-700 leading-relaxed mb-4'>
                Aerisartis adalah usaha kerajinan produk anak bangsa yang bergerak dalam pembuatan tembaga dan kuningan handmade, diproduksi langsung
                di sentra kerajinan tembaga dan kuningan Tumang, Boyolali yang telah dikenal secara nasional dan internasional.
              </p>

              <p className='text-gray-700 leading-relaxed mb-4'>
                Kami menghadirkan berbagai karya untuk kebutuhan interior, eksterior, dan proyek custom mulai dari elemen dekoratif, ornamen
                arsitektural, hingga produk tematik sesuai konsep klien yang dikerjakan secara manual dengan perhatian tinggi pada detail, proporsi,
                dan kualitas material.
              </p>

              <p className='text-gray-700 leading-relaxed'>
                Menggabungkan keterampilan pengrajin berpengalaman dengan proses kerja yang terkontrol, Aerisartis berkomitmen menghasilkan karya yang
                rapi, bernilai estetika, dan berdaya tahan jangka panjang, serta telah dipercaya dalam berbagai kolaborasi dengan klien individu,
                desainer, arsitek, kontraktor, hingga instansi dan pihak swasta, baik untuk kebutuhan lokal maupun internasional.
              </p>
            </div>
          </div>
        </div>

        <div className='mt-20 text-center'>
          <div className='bg-white border border-gray-200 rounded-2xl p-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Siap Mewujudkan Proyek Anda?</h2>
            <p className='text-gray-600 text-lg mb-8 max-w-2xl mx-auto'>
              Konsultasikan kebutuhan Anda dengan tim kami dan dapatkan solusi terbaik untuk proyek Anda
            </p>
            <Link href='/#contact'>
              <button className='bg-linear-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg'>
                Hubungi Kami Sekarang
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
