import {Wallet, FileCheck, Hammer, Search, Truck, CheckCircle} from "lucide-react";
import Link from "next/link";

export const HowToOrder = () => {
  const steps = [
    {
      icon: <Wallet className='w-8 h-8' />,
      title: "Pemesanan & Pembayaran",
      description: "Lakukan pembayaran awal dan kirimkan detail pesanan, referensi desain, ukuran melalui WhatsApp atau email resmi.",
      color: "from-primary-background to-[#b85c2e]",
    },
    {
      icon: <FileCheck className='w-8 h-8' />,
      title: "Desain & Persetujuan",
      description: "Kami menyusun desain berdasarkan materi Anda. Produksi dimulai setelah desain disetujui.",
      color: "from-[#b85c2e] to-[#d46e3d]",
    },
    {
      icon: <Hammer className='w-8 h-8' />,
      title: "Proses Produksi",
      description: "Produk dikerjakan handmade dengan detail sempurna. Estimasi waktu disesuaikan dengan kompleksitas pesanan.",
      color: "from-[#d46e3d] to-primary-background",
    },
    {
      icon: <Search className='w-8 h-8' />,
      title: "Quality Control",
      description: "Setiap produk melalui pemeriksaan kualitas ketat sebelum diserahkan. Kami pastikan sesuai pesanan Anda.",
      color: "from-primary-background to-[#b85c2e]",
    },
    {
      icon: <CheckCircle className='w-8 h-8' />,
      title: "Pelunasan",
      description: "Selesaikan pembayaran pelunasan dan biaya pengiriman sebelum produk dikirim.",
      color: "from-[#b85c2e] to-[#d46e3d]",
    },
    {
      icon: <Truck className='w-8 h-8' />,
      title: "Pengiriman",
      description: "Produk dikemas aman dan dikirim ke alamat Anda atau dapat diambil langsung di workshop.",
      color: "from-[#d46e3d] to-primary",
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
      <div className='absolute top-1/4 right-1/4 w-96 h-96 bg-primary-background/10 rounded-full blur-3xl'></div>
      <div className='absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#b85c2e]/10 rounded-full blur-3xl'></div>

      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center mb-20'>
          <p className='text-accent text-sm font-semibold tracking-wider uppercase mb-4'>PROSEDUR PEMESANAN</p>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Cara <span className='text-accent'>Memesan</span>
          </h2>
          <p className='text-white/70 text-lg max-w-2xl mx-auto'>
            Proses pemesanan yang jelas dan terstruktur untuk memastikan hasil terbaik sesuai keinginan Anda
          </p>
        </div>

        <div className='relative mb-20'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {steps.map((step, index) => (
              <div key={index} className='relative group'>
                <div className='relative bg-[#1c1917]/30 backdrop-blur-sm border border-[#292524] rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 h-full flex flex-col'>
                  <div className='absolute -top-4 -left-4 w-10 h-10 bg-linear-to-br from-accent to-[#b85c2e] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg'>
                    {index + 1}
                  </div>

                  <div
                    className={`w-12 h-12 bg-linear-to-br ${step.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <div className='text-white'>{step.icon}</div>
                  </div>

                  <h3 className='text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors'>{step.title}</h3>
                  <p className='text-white/60 text-sm leading-relaxed grow'>{step.description}</p>

                  <div className='absolute inset-0 border-2 border-accent rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity'></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='mb-6'>
          <div className='text-center mb-12'>
            <h3 className='text-3xl font-bold text-white mb-4'>
              Ketentuan <span className='text-accent'>Penting</span>
            </h3>
            <p className='text-white/60 max-w-2xl mx-auto'>Mohon perhatikan kebijakan berikut untuk kelancaran proses pemesanan</p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {policies.map((policy, index) => (
              <div
                key={index}
                className='bg-[#1c1917]/30 backdrop-blur-sm border border-[#292524] rounded-xl p-6 hover:border-accent/30 transition-all'>
                <div className='flex items-start gap-4'>
                  <div className='w-2 h-2 bg-accent rounded-full mt-2 shrink-0'></div>
                  <div>
                    <h4 className='text-white font-semibold mb-2'>{policy.title}</h4>
                    <p className='text-white/60 text-sm leading-relaxed'>{policy.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='bg-[#1c1917]/50 backdrop-blur-sm border border-accent/20 rounded-2xl p-8 mb-16'>
          <h4 className='text-white font-bold text-lg mb-4 flex items-center gap-3'>
            <span className='text-accent'>ℹ</span> Catatan Penting
          </h4>
          <ul className='space-y-3 text-white/70 text-sm'>
            <li className='flex items-start gap-3'>
              <span className='text-accent mt-1'>•</span>
              <span>Biaya pengiriman menjadi tanggung jawab pelanggan, kecuali ada kesepakatan tertulis untuk subsidi atau gratis ongkir.</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-accent mt-1'>•</span>
              <span>Pengiriman dilakukan setelah seluruh kewajiban pembayaran terpenuhi.</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-accent mt-1'>•</span>
              <span>Apabila terdapat kendala teknis dalam produksi, pelanggan akan segera diinformasikan oleh tim Aerisartis.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

