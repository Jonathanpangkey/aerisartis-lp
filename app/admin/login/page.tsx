// app/admin/login/page.tsx
"use client";
import {useState} from "react";
import {Lock, Mail, Loader2, AlertCircle} from "lucide-react";
import {AuthService} from "@/lib/service/auth-service";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const {user, error} = await AuthService.login(email, password);

      if (error) {
        setError(error);
        setLoading(false);
        return;
      }

      if (user) {
        await new Promise((resolve) => setTimeout(resolve, 100));

        window.location.href = "/admin/products";
        return;
      }
    } catch (err) {
      setError("Terjadi kesalahan saat login");
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-[#0a0908] flex items-center justify-center px-6'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl'></div>
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#b85c2e]/5 rounded-full blur-3xl'></div>
      </div>

      <div className='relative w-full max-w-md'>
        <div className='bg-[#1c1917]/50 backdrop-blur-sm border border-[#292524] rounded-2xl p-8'>
          <div className='text-center mb-8'>
            <div className='w-16 h-16 bg-linear-to-br from-accent to-[#b85c2e] rounded-xl flex items-center justify-center mx-auto mb-4'>
              <Lock className='w-8 h-8 text-white' />
            </div>
            <h1 className='text-3xl font-bold text-white mb-2'>Admin Login</h1>
            <p className='text-white/60'>Masuk untuk mengelola produk</p>
          </div>

          {error && (
            <div className='bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-6 flex items-start gap-3'>
              <AlertCircle className='w-5 h-5 text-red-400 shrink-0 mt-0.5' />
              <p className='text-red-400 text-sm'>{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className='space-y-6'>
            <div>
              <label className='text-white/70 text-sm mb-2 block'>Email</label>
              <div className='relative'>
                <Mail className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40' />
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='admin@aerisartis.com'
                  required
                  disabled={loading}
                  className='w-full bg-[#0a0908] border border-[#292524] rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors disabled:opacity-50'
                />
              </div>
            </div>

            <div>
              <label className='text-white/70 text-sm mb-2 block'>Password</label>
              <div className='relative'>
                <Lock className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40' />
                <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='••••••••'
                  required
                  disabled={loading}
                  className='w-full bg-[#0a0908] border border-[#292524] rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors disabled:opacity-50'
                />
              </div>
            </div>

            <button
              type='submit'
              disabled={loading}
              className='w-full bg-linear-to-r from-accent to-[#b85c2e] hover:from-[#b85c2e] hover:to-accent text-white py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'>
              {loading ? (
                <>
                  <Loader2 className='w-5 h-5 animate-spin' />
                  Memproses...
                </>
              ) : (
                <>
                  <Lock className='w-5 h-5' />
                  Masuk
                </>
              )}
            </button>
          </form>
        </div>

        <div className='text-center mt-6'>
          <a href='/' className='text-white/60 hover:text-accent transition-colors text-sm'>
            ← Kembali ke Beranda
          </a>
        </div>
      </div>
    </div>
  );
}
