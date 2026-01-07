// app/admin/dashboard/layout.tsx
"use client";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {Package, FileText, LogOut, Menu, X} from "lucide-react";
import {AuthService} from "@/lib/service/auth-service";
import {useState} from "react";

export default function AdminLayout({children}: {children: React.ReactNode}) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await AuthService.logout();
    router.push("/admin/login");
    router.refresh();
  };

  const navigation = [
    {
      name: "Produk",
      href: "/admin/products",
      icon: Package,
      active: pathname === "/admin/products",
    },
    {
      name: "Artikel",
      href: "/admin/articles",
      icon: FileText,
      active: pathname === "/admin/articles",
    },
  ];

  return (
    <div className='min-h-screen bg-[#0a0908]'>
      {/* Header */}
      <div className='sticky top-0 z-50 bg-[#0a0908]/95 backdrop-blur-md border-b border-[#292524]'>
        <div className='max-w-7xl mx-auto px-6 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-6'>
              <Link href='/' className='flex items-center gap-3 cursor-pointer'>
                <div className='w-10 h-10 bg-linear-to-br from-accent to-[#b85c2e] rounded-lg flex items-center justify-center'>
                  <Package className='w-6 h-6 text-white' />
                </div>
                <div>
                  <h1 className='text-xl font-bold text-white'>Admin Dashboard</h1>
                  <p className='text-white/60 text-sm'>Aerisartis</p>
                </div>
              </Link>
              {/* Desktop Navigation */}
              <nav className='hidden md:flex items-center gap-2'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-lg transition-all
                      ${item.active ? "bg-accent text-white" : "text-white/70 hover:text-white hover:bg-[#1c1917]"}
                    `}>
                    <item.icon className='w-4 h-4' />
                    <span className='font-medium'>{item.name}</span>
                  </Link>
                ))}
              </nav>
            </div>

            <div className='flex items-center gap-4'>
              {/* Mobile Menu Button */}
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className='md:hidden text-white/70 hover:text-white transition-colors'>
                {mobileMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
              </button>

              {/* Logout Button */}
              <button onClick={handleLogout} className='hidden md:flex items-center gap-2 text-white/70 hover:text-red-400 transition-colors'>
                <LogOut className='w-5 h-5' />
                <span>Keluar</span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className='md:hidden mt-4 pt-4 border-t border-[#292524]'>
              <nav className='flex flex-col gap-2'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      flex items-center gap-2 px-4 py-3 rounded-lg transition-all
                      ${item.active ? "bg-accent text-white" : "text-white/70 hover:text-white hover:bg-[#1c1917]"}
                    `}>
                    <item.icon className='w-4 h-4' />
                    <span className='font-medium'>{item.name}</span>
                  </Link>
                ))}
                <button onClick={handleLogout} className='flex items-center gap-2 px-4 py-3 text-white/70 hover:text-red-400 transition-colors'>
                  <LogOut className='w-5 h-5' />
                  <span>Keluar</span>
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <main>{children}</main>
    </div>
  );
}
