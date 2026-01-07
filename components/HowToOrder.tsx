"use client";
import {Wallet, FileCheck, Hammer, Search, Truck, CheckCircle, X, Info} from "lucide-react";
import {useState} from "react";

export const HowToOrder = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const steps = [
    {
      icon: <FileCheck className='w-8 h-8' />,
      title: "Desain & Persetujuan",
      description: " Konsultasikan desain anda ke kami. Kami menyusun desain bedasarkan materi Anda. Produksi dimulai setelah desain disetujui.",
      gradientFrom: "#b85c2e",
      gradientTo: "#d46e3d",
    },
    {
      icon: <Wallet className='w-8 h-8' />,
      title: "Pemesanan & Pembayaran",
      description: "Pembayaran di lakukan bertahap lalu kirimkan detail pesanan, referensi desain, ukuran melalui WhatsApp atau email resmi.",
      gradientFrom: "#c97846",
      gradientTo: "#b85c2e",
    },
    {
      icon: <Hammer className='w-8 h-8' />,
      title: "Proses Produksi",
      description: "Produk dikerjakan handmade dengan detail sempurna. Estimasi waktu disesuaikan dengan kompleksitas pesanan.",
      gradientFrom: "#d46e3d",
      gradientTo: "#c97846",
    },
    {
      icon: <Search className='w-8 h-8' />,
      title: "Quality Control",
      description: "Setiap produk melalui pemeriksaan kualitas ketat sebelum diserahkan. Kami pastikan sesuai pesanan Anda.",
      gradientFrom: "#c97846",
      gradientTo: "#b85c2e",
    },
    {
      icon: <CheckCircle className='w-8 h-8' />,
      title: "Pelunasan",
      description: "Selesaikan pembayaran pelunasan dan biaya pengiriman sebelum produk dikirim.",
      gradientFrom: "#b85c2e",
      gradientTo: "#d46e3d",
    },
    {
      icon: <Truck className='w-8 h-8' />,
      title: "Pengiriman",
      description: "Produk dikemas aman dan dikirim ke alamat Anda atau dapat diambil langsung di workshop.",
      gradientFrom: "#d46e3d",
      gradientTo: "#c97846",
    },
  ];

  const policies = [
    {
      title: "Revisi Desain",
      description: "Perubahan setelah desain disetujui dan produksi berjalan akan dikenakan biaya tambahan sesuai tahapan produksi.",
    },
    {
      title: "Pengambilan Barang",
      description: "Batas waktu pengambilan langsung maksimal 1 bulan sejak pemberitahuan barang selesai.",
    },
    {
      title: "Pembatalan Pesanan",
      description:
        "Pengembalian dana 100% hanya jika kami tidak dapat menyelesaikan produksi. Pembatalan oleh pelanggan akan dipotong sesuai kesepakatan.",
    },
    {
      title: "Karakter Handmade",
      description: "Perbedaan minor pada tekstur, warna, atau detail adalah bagian dari keunikan produk handmade, bukan cacat produksi.",
    },
  ];

  return (
    <section id='how-to-order' className='relative py-24 px-6 overflow-hidden'>
      <div className='absolute top-1/4 right-1/4 w-96 h-96 bg-[#c97846]/10 rounded-full blur-3xl'></div>
      <div className='absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#b85c2e]/10 rounded-full blur-3xl'></div>

      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center mb-20'>
          <p className='text-[#c97846] text-sm font-semibold tracking-wider uppercase mb-4'>PROSEDUR PEMESANAN</p>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
            Cara <span className='text-[#c97846]'>Memesan</span>
          </h2>
          <p className='text-white/70 text-lg max-w-2xl mx-auto'>
            Proses pemesanan yang jelas dan terstruktur untuk memastikan hasil terbaik sesuai keinginan Anda
          </p>
        </div>

        <div className='relative mb-20'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {steps.map((step, index) => (
              <div key={index} className='relative group'>
                <div className='relative bg-[#1c1917]/30 backdrop-blur-sm border border-[#292524] rounded-2xl p-6 hover:border-[#c97846]/50 transition-all duration-300 h-full flex flex-col'>
                  <div
                    className='absolute -top-4 -left-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg'
                    style={{background: `linear-gradient(to bottom right, #c97846, #b85c2e)`}}>
                    {index + 1}
                  </div>

                  <div
                    className='w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg'
                    style={{background: `linear-gradient(to bottom right, ${step.gradientFrom}, ${step.gradientTo})`}}>
                    <div className='text-white'>{step.icon}</div>
                  </div>

                  <h3 className='text-xl font-bold text-white mb-3 group-hover:text-[#c97846] transition-colors'>{step.title}</h3>
                  <p className='text-white/60 text-sm leading-relaxed grow'>{step.description}</p>

                  {index === 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowPaymentModal(true);
                      }}
                      className='relative z-10 mt-2 flex items-center gap-2 text-accent hover:text-primary transition-colors text-[12px] font-semibold cursor-pointer'>
                      <Info className='w-4 h-4' />
                      Lihat Ketentuan Pembayaran
                    </button>
                  )}

                  <div className='absolute inset-0 border-2 border-[#c97846] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity'></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='mb-6'>
          <div className='text-center mb-12'>
            <h3 className='text-3xl font-bold text-white mb-4'>
              Ketentuan <span className='text-[#c97846]'>Penting</span>
            </h3>
            <p className='text-white/60 max-w-2xl mx-auto'>Mohon perhatikan kebijakan berikut untuk kelancaran proses pemesanan</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {policies.map((policy, index) => (
              <div
                key={index}
                className='bg-[#1c1917]/30 backdrop-blur-sm border border-[#292524] rounded-xl p-6 hover:border-[#c97846]/30 transition-all'>
                <div className='flex items-start gap-4'>
                  <div className='w-2 h-2 bg-[#c97846] rounded-full mt-2 shrink-0'></div>
                  <div>
                    <h4 className='text-white font-semibold mb-2'>{policy.title}</h4>
                    <p className='text-white/60 text-sm leading-relaxed'>{policy.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='bg-[#1c1917]/50 backdrop-blur-sm border border-[#c97846]/20 rounded-2xl p-8 mb-16'>
          <h4 className='text-white font-bold text-lg mb-4 flex items-center gap-3'>
            <span className='text-[#c97846]'>ℹ</span> Catatan Penting
          </h4>
          <ul className='space-y-3 text-white/70 text-sm'>
            <li className='flex items-start gap-3'>
              <span className='text-[#c97846] mt-1'>•</span>
              <span>Biaya pengiriman menjadi tanggung jawab pelanggan, kecuali ada kesepakatan tertulis untuk subsidi atau gratis ongkir.</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-[#c97846] mt-1'>•</span>
              <span>Pengiriman dilakukan setelah seluruh kewajiban pembayaran terpenuhi.</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-[#c97846] mt-1'>•</span>
              <span>Apabila terdapat kendala teknis dalam produksi, pelanggan akan segera diinformasikan oleh tim Aerisartis.</span>
            </li>
          </ul>
        </div>
      </div>

      {showPaymentModal && (
        <div
          className='fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4'
          onClick={() => setShowPaymentModal(false)}>
          <div
            className='bg-[#1c1917] border border-[#c97846]/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'
            onClick={(e) => e.stopPropagation()}>
            <div className='sticky top-0 bg-[#1c1917] border-b border-[#292524] p-6 flex items-center justify-between'>
              <h3 className='text-2xl font-bold text-white flex items-center gap-3'>
                <Wallet className='w-6 h-6 text-[#c97846]' />
                Ketentuan Pembayaran & Pemesanan
              </h3>
              <button
                onClick={() => setShowPaymentModal(false)}
                className='w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#292524] transition-colors'>
                <X className='w-5 h-5 text-white/70' />
              </button>
            </div>

            <div className='p-6 space-y-6'>
              <div className='space-y-4'>
                <div className='bg-[#292524]/50 rounded-xl p-5 border border-[#c97846]/10'>
                  <h4 className='text-[#c97846] font-semibold text-lg mb-3 flex items-center gap-2'>
                    <span className='w-2 h-2 bg-[#c97846] rounded-full'></span>
                    Produk Ready Stock
                  </h4>
                  <p className='text-white/70 text-sm leading-relaxed'>
                    Produk yang tersedia (ready stock) akan dikirimkan setelah pembayaran penuh kami terima.
                  </p>
                </div>

                <div className='bg-[#292524]/50 rounded-xl p-5 border border-[#c97846]/10'>
                  <h4 className='text-[#c97846] font-semibold text-lg mb-3 flex items-center gap-2'>
                    <span className='w-2 h-2 bg-[#c97846] rounded-full'></span>
                    Pemesanan Custom
                  </h4>
                  <p className='text-white/70 text-sm leading-relaxed'>
                    Untuk pemesanan produk custom, pelanggan diwajibkan melakukan pembayaran uang muka minimal 50% dari total nilai pesanan.
                  </p>
                </div>

                <div className='bg-[#292524]/50 rounded-xl p-5 border border-[#c97846]/10'>
                  <h4 className='text-[#c97846] font-semibold text-lg mb-3 flex items-center gap-2'>
                    <span className='w-2 h-2 bg-[#c97846] rounded-full'></span>
                    Pelunasan Pembayaran
                  </h4>
                  <p className='text-white/70 text-sm leading-relaxed'>
                    Sisa pembayaran dilakukan setelah pelanggan menerima invoice serta dokumentasi berupa foto produk yang telah selesai dan siap
                    dikirim.
                  </p>
                </div>

                <div className='bg-[#292524]/50 rounded-xl p-5 border border-[#c97846]/10'>
                  <h4 className='text-[#c97846] font-semibold text-lg mb-3 flex items-center gap-2'>
                    <span className='w-2 h-2 bg-[#c97846] rounded-full'></span>
                    Diskon Pembelian
                  </h4>
                  <p className='text-white/70 text-sm leading-relaxed'>
                    Diskon khusus tersedia untuk pembelian dalam jumlah lebih dari 10 pcs, dengan ketentuan dan besaran yang disesuaikan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HowToOrder;
