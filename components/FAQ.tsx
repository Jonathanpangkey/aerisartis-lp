"use client";
import {useState} from "react";
import {Plus, Minus} from "lucide-react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Apa material yang digunakan untuk produk Aerisartis?",
      answer:
        "Kami menggunakan tembaga dan kuningan berkualitas tinggi yang dipilih secara teliti. Setiap material telah melalui proses seleksi ketat untuk memastikan kualitas dan ketahanan produk jangka panjang.",
    },
    {
      question: "Berapa lama proses pembuatan custom order?",
      answer:
        "Waktu pembuatan custom order bervariasi tergantung kompleksitas desain, biasanya berkisar antara 2-4 minggu. Kami akan memberikan estimasi waktu yang lebih detail setelah konsultasi desain awal dengan Anda.",
    },
    {
      question: "Apakah produk tembaga memerlukan perawatan khusus?",
      answer:
        "Ya, produk tembaga memerlukan perawatan rutin untuk menjaga kilaunya. Kami menyarankan pembersihan dengan kain lembut dan produk pembersih khusus tembaga. Panduan perawatan lengkap akan diberikan bersama setiap pembelian.",
    },
    {
      question: "Apakah ada garansi untuk produk yang dibeli?",
      answer:
        "Semua produk Aerisartis dilengkapi dengan garansi 1 tahun untuk cacat produksi. Garansi tidak mencakup kerusakan akibat penggunaan yang tidak sesuai atau perawatan yang kurang tepat.",
    },
    {
      question: "Bagaimana cara memesan produk custom?",
      answer:
        "Anda dapat menghubungi kami melalui WhatsApp atau email untuk konsultasi desain. Tim kami akan membantu mewujudkan ide Anda, dari konsep awal hingga produk jadi. Kami juga menyediakan mock-up desain sebelum proses produksi dimulai.",
    },
    {
      question: "Apakah produk bisa dikirim ke luar kota?",
      answer:
        "Tentu! Kami melayani pengiriman ke seluruh Indonesia. Produk akan dikemas dengan sangat hati-hati menggunakan packaging khusus untuk memastikan barang sampai dengan aman. Biaya pengiriman disesuaikan dengan lokasi tujuan.",
    },
    {
      question: "Apakah harga yang tertera sudah final?",
      answer:
        "Harga yang tertera untuk produk standar sudah final. Untuk custom order, harga akan ditentukan berdasarkan kompleksitas desain, ukuran, dan detail finishing yang diinginkan. Kami akan memberikan quotation lengkap setelah konsultasi.",
    },
    {
      question: "Bisakah saya mengunjungi workshop langsung?",
      answer:
        "Kami menerima kunjungan ke workshop dengan perjanjian terlebih dahulu. Anda dapat melihat langsung proses pembuatan dan koleksi produk kami. Silakan hubungi kami untuk membuat janji kunjungan.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id='faq' className='relative py-24 px-6 overflow-hidden'>
      <div className='absolute top-1/4 left-1/5 w-96 h-96 bg-[#d4a373]/8 rounded-full blur-3xl'></div>
      <div className='absolute bottom-1/4 right-1/5 w-96 h-96 bg-[#b85c2e]/8 rounded-full blur-3xl'></div>

      <div className='relative max-w-4xl mx-auto'>
        <div className='text-center mb-16'>
          <p className='text-accent text-sm font-semibold tracking-wider uppercase mb-4'>PERTANYAAN UMUM</p>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Ada <span className='text-accent'>Pertanyaan?</span>
          </h2>
          <p className='text-white/70 text-lg max-w-2xl mx-auto'>
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang produk dan layanan kami
          </p>
        </div>

        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='group relative bg-[#1c1917]/30 backdrop-blur-sm border border-[#292524] rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300'>
              <button onClick={() => toggleFAQ(index)} className='w-full flex items-center justify-between p-6 text-left'>
                <h3 className='text-lg font-semibold text-white pr-8 group-hover:text-accent transition-colors'>{faq.question}</h3>
                <div
                  className={`
                  shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center
                  transition-all duration-300
                  ${openIndex === index ? "bg-accent rotate-180" : "group-hover:bg-accent/20"}
                `}>
                  {openIndex === index ? <Minus className='w-5 h-5 text-accent' /> : <Plus className='w-5 h-5 text-accent' />}
                </div>
              </button>

              <div
                className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                `}>
                <div className='px-6 pb-6'>
                  <div className='pt-2 border-t border-[#292524]'>
                    <p className='text-white/70 leading-relaxed mt-4'>{faq.answer}</p>
                  </div>
                </div>
              </div>

              <div className='absolute inset-0 border-2 border-accent rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none'></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
