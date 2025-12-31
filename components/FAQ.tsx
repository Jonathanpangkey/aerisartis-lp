"use client";
import {useState} from "react";
import {Plus, Minus} from "lucide-react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Berapa lama waktu pengerjaan pesanan di Aerisartis?",
      answer:
        "Waktu pengerjaan menyesuaikan jenis produk, tingkat kerumitan desain, ukuran, dan jumlah pesanan. Estimasi waktu produksi akan diinformasikan secara transparan sebelum proses dimulai.",
    },
    {
      question: "Apa keunggulan produk kerajinan tembaga dan kuningan Aerisartis?",
      answer:
        "Produk Aerisartis dikerjakan secara handmade dengan perhatian tinggi pada detail dan kualitas material. Tembaga dan kuningan dipilih karena karakter visualnya yang kuat, daya tahan yang baik, serta kemampuannya menghadirkan nilai estetika yang elegan dan timeless pada ruang.",
    },
    {
      question: "Bagaimana proses pemesanan dimulai?",
      answer:
        "Pemesanan dimulai setelah pembayaran awal sesuai kesepakatan. Detail pesanan, spesifikasi, dan referensi desain dikirimkan melalui WhatsApp atau email resmi Aerisartis.",
    },
    {
      question: "Apakah menerima desain custom dan file siap produksi?",
      answer: "Ya. Aerisartis menerima desain custom maupun file siap produksi. Produksi dimulai setelah desain disetujui oleh pelanggan.",
    },
    {
      question: "Apakah revisi desain diperbolehkan?",
      answer:
        "Revisi sebelum persetujuan desain dapat didiskusikan. Revisi setelah desain disetujui dan produksi berjalan akan dikenakan biaya tambahan sesuai tahapan produksi.",
    },
    {
      question: "Berapa lama proses produksi?",
      answer:
        "Waktu produksi menyesuaikan tingkat kerumitan, ukuran, dan jumlah pesanan. Estimasi waktu akan diinformasikan sebelum produksi dimulai.",
    },
    {
      question: "Bagaimana kontrol kualitas dilakukan?",
      answer:
        "Setiap produk diperiksa kualitas dan kesesuaiannya sebelum pengiriman. Jika terdapat kendala teknis, pelanggan akan diinformasikan terlebih dahulu.",
    },
    {
      question: "Kapan pesanan dikirim?",
      answer: "Pengiriman dilakukan setelah pembayaran pelunasan dan biaya pengiriman diterima sepenuhnya.",
    },
    {
      question: "Apakah melayani pengiriman internasional?",
      answer:
        "Ya. Aerisartis melayani pengiriman ke luar negeri dengan standar pengemasan ekspor. Biaya pengiriman, pajak, bea masuk, dan biaya kepabeanan menjadi tanggung jawab pelanggan, kecuali disepakati lain.",
    },
    {
      question: "Apakah ada kemungkinan perbedaan kecil/minor pada produk handmade?",
      answer:
        "Ya. Setiap produk handmade memiliki karakter unik. Perbedaan minor pada warna, tekstur, atau detail merupakan bagian dari nilai kerajinan dan tidak dianggap sebagai cacat.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id='faq' className='relative py-24 px-6 overflow-hidden'>
      <div className='absolute top-1/4 left-1/5 w-96 h-96 bg-primary-background/8 rounded-full blur-3xl'></div>
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
