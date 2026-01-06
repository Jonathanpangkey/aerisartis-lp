// app/admin/dashboard/products/page.tsx
"use client";
import {useState, useEffect} from "react";
import {Plus, Edit, Trash2, Loader2, Package, Search, Image as ImageIcon, X, Save, AlertCircle, CheckCircle} from "lucide-react";
import {ProductService} from "@/lib/service/product-service";
import {AdminProductService, type ProductInput} from "@/lib/service/admin-product-service";
import {ImageValidator} from "@/lib/utils/image-utils";
import type {Product} from "@/lib/service/product-service";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState<"create" | "edit">("create");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState<ProductInput>({
    title: "",
    description: "",
    category: "",
    image: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [imageValidating, setImageValidating] = useState(false);
  const [imageInfo, setImageInfo] = useState<string>("");

  const categories = ["Dekorasi Rumah", "Seni Makan", "Seni Dinding", "Vas & Pot", "Lampu", "Peralatan"];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    const {data} = await ProductService.getAllProducts();
    setProducts(data || []);
    setLoading(false);
  };

  const openCreateModal = () => {
    setModalMode("create");
    setFormData({
      title: "",
      description: "",
      category: categories[0],
      image: "",
    });
    setImageFile(null);
    setImagePreview("");
    setImageInfo("");
    setError(null);
    setShowModal(true);
  };

  const openEditModal = (product: Product) => {
    setModalMode("edit");
    setSelectedProduct(product);
    setFormData({
      title: product.title,
      description: product.description,
      category: product.category,
      image: product.image,
    });
    setImagePreview(product.image);
    setImageFile(null);
    setImageInfo("");
    setError(null);
    setShowModal(true);
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageValidating(true);
    setError(null);
    setImageInfo("");

    try {
      const result = await ImageValidator.validate(file, {
        maxSizeMB: 5,
        allowedFormats: ["image/jpeg", "image/jpg", "image/png", "image/webp"],
        maxWidth: 2048,
        maxHeight: 2048,
      });

      if (!result.valid) {
        setError(result.error || "Gambar tidak valid");
        setImageValidating(false);
        e.target.value = "";
        return;
      }

      setImageFile(file);
      setImageInfo(`✓ Valid • ${ImageValidator.formatFileSize(file.size)}`);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } catch (err: any) {
      setError(err.message || "Gagal memproses gambar");
    } finally {
      setImageValidating(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      let imageUrl = formData.image;

      if (imageFile) {
        const {url, error: uploadError} = await AdminProductService.uploadImage(imageFile);
        if (uploadError) throw new Error(uploadError);
        imageUrl = url!;

        if (modalMode === "edit" && selectedProduct?.image) {
          await AdminProductService.deleteImage(selectedProduct.image);
        }
      }

      const productData = {
        ...formData,
        image: imageUrl,
      };

      if (modalMode === "create") {
        const {error} = await AdminProductService.createProduct(productData);
        if (error) throw new Error(error);
      } else {
        const {error} = await AdminProductService.updateProduct(selectedProduct!.id.toString(), productData);
        if (error) throw new Error(error);
      }

      await fetchProducts();
      setShowModal(false);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (product: Product) => {
    if (!confirm(`Yakin ingin menghapus "${product.title}"?`)) return;

    const {success, error} = await AdminProductService.deleteProduct(product.id.toString());

    if (error) {
      alert(error);
      return;
    }

    if (product.image) {
      await AdminProductService.deleteImage(product.image);
    }

    await fetchProducts();
  };

  const filteredProducts = products.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='max-w-7xl mx-auto px-6 py-8'>
      {/* Actions Bar */}
      <div className='flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-8'>
        <div>
          <h2 className='text-2xl font-bold text-white mb-1'>Kelola Produk</h2>
          <p className='text-white/60 text-sm'>Tambah, edit, atau hapus produk kerajinan</p>
        </div>
        <button
          onClick={openCreateModal}
          className='bg-linear-to-r from-accent to-[#b85c2e] hover:from-[#b85c2e] hover:to-accent text-white px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg'>
          <Plus className='w-5 h-5' />
          Tambah Produk
        </button>
      </div>

      {/* Search */}
      <div className='mb-8'>
        <div className='relative w-full sm:w-96'>
          <Search className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40' />
          <input
            type='text'
            placeholder='Cari produk...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full bg-[#1c1917]/50 border border-[#292524] rounded-full pl-12 pr-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors'
          />
        </div>
      </div>

      {/* Products Table */}
      {loading ? (
        <div className='flex flex-col items-center justify-center py-20'>
          <Loader2 className='w-12 h-12 text-accent animate-spin mb-4' />
          <p className='text-white/60'>Memuat produk...</p>
        </div>
      ) : (
        <div className='bg-[#1c1917]/30 backdrop-blur-sm border border-[#292524] rounded-2xl overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='border-b border-[#292524]'>
                  <th className='text-left py-4 px-6 text-white/70 font-semibold text-sm'>Produk</th>
                  <th className='text-left py-4 px-6 text-white/70 font-semibold text-sm'>Kategori</th>
                  <th className='text-left py-4 px-6 text-white/70 font-semibold text-sm'>Deskripsi</th>
                  <th className='text-left py-4 px-6 text-white/70 font-semibold text-sm'>Terakhir Diubah</th>
                  <th className='text-center py-4 px-6 text-white/70 font-semibold text-sm'>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan={5} className='text-center py-20'>
                      <Package className='w-16 h-16 text-white/20 mx-auto mb-4' />
                      <p className='text-white/60 text-lg'>{searchQuery ? "Tidak ada produk ditemukan" : "Belum ada produk"}</p>
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map((product) => (
                    <tr key={product.id} className='border-b border-[#292524] hover:bg-[#1c1917]/50 transition-colors'>
                      <td className='py-4 px-6'>
                        <div className='flex items-center gap-4'>
                          <div className='w-16 h-16 rounded-lg overflow-hidden bg-[#0a0908] shrink-0'>
                            <img src={product.image} alt={product.title} className='w-full h-full object-cover' />
                          </div>
                          <div>
                            <div className='text-white font-medium line-clamp-1'>{product.title}</div>
                          </div>
                        </div>
                      </td>
                      <td className='py-4 px-6'>
                        <span className='inline-block bg-accent/20 text-accent text-xs font-semibold px-3 py-1 rounded-full'>{product.category}</span>
                      </td>
                      <td className='py-4 px-6'>
                        <p className='text-white/70 text-sm line-clamp-2 max-w-md'>{product.description}</p>
                      </td>
                      <td className='py-4 px-6 text-white/70 text-sm'>
                        {new Date(product.updated_at).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className='py-4 px-6'>
                        <div className='flex items-center justify-center gap-2'>
                          <button
                            onClick={() => openEditModal(product)}
                            className='bg-[#292524] hover:bg-accent text-white p-2 rounded-lg transition-colors'>
                            <Edit className='w-4 h-4' />
                          </button>
                          <button
                            onClick={() => handleDelete(product)}
                            className='bg-[#292524] hover:bg-red-500 text-white p-2 rounded-lg transition-colors'>
                            <Trash2 className='w-4 h-4' />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modal - Same as before but extracted for clarity */}
      {showModal && (
        <div className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6'>
          <div className='bg-[#1c1917] border border-[#292524] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto'>
            {/* Modal content - Same as original */}
            <div className='sticky top-0 bg-[#1c1917] border-b border-[#292524] p-6 flex items-center justify-between'>
              <h2 className='text-2xl font-bold text-white'>{modalMode === "create" ? "Tambah Produk" : "Edit Produk"}</h2>
              <button onClick={() => setShowModal(false)} className='text-white/60 hover:text-white transition-colors'>
                <X className='w-6 h-6' />
              </button>
            </div>

            <form onSubmit={handleSubmit} className='p-6 space-y-6'>
              {error && (
                <div className='bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-start gap-3'>
                  <AlertCircle className='w-5 h-5 text-red-400 shrink-0 mt-0.5' />
                  <p className='text-red-400 text-sm'>{error}</p>
                </div>
              )}

              {imageInfo && !error && (
                <div className='bg-green-500/10 border border-green-500/20 rounded-xl p-4 flex items-start gap-3'>
                  <CheckCircle className='w-5 h-5 text-green-400 shrink-0 mt-0.5' />
                  <p className='text-green-400 text-sm'>{imageInfo}</p>
                </div>
              )}

              <div>
                <label className='text-white/70 text-sm mb-2 block'>Gambar Produk</label>
                <div className='text-white/50 text-xs mb-3'>Format: JPG, PNG, WebP • Maksimal: 5MB • Dimensi: 2048x2048px</div>
                <div className='relative'>
                  {imagePreview ? (
                    <div className='relative aspect-video bg-[#0a0908] rounded-xl overflow-hidden mb-3'>
                      <img src={imagePreview} alt='Preview' className='w-full h-full object-cover' />
                      <button
                        type='button'
                        onClick={() => {
                          setImageFile(null);
                          setImagePreview("");
                          setImageInfo("");
                        }}
                        className='absolute top-3 right-3 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors'>
                        <X className='w-4 h-4' />
                      </button>
                    </div>
                  ) : null}
                  <label
                    className={`flex items-center justify-center gap-2 w-full bg-[#0a0908] border-2 border-dashed border-[#292524] rounded-xl p-8 cursor-pointer hover:border-accent transition-colors ${
                      imageValidating ? "opacity-50 cursor-wait" : ""
                    }`}>
                    {imageValidating ? (
                      <>
                        <Loader2 className='w-6 h-6 text-accent animate-spin' />
                        <span className='text-white/60'>Memvalidasi gambar...</span>
                      </>
                    ) : (
                      <>
                        <ImageIcon className='w-6 h-6 text-white/40' />
                        <span className='text-white/60'>{imagePreview ? "Ganti Gambar" : "Upload Gambar"}</span>
                      </>
                    )}
                    <input
                      type='file'
                      accept='image/jpeg,image/jpg,image/png,image/webp'
                      onChange={handleImageChange}
                      className='hidden'
                      disabled={imageValidating}
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className='text-white/70 text-sm mb-2 block'>Nama Produk</label>
                <input
                  type='text'
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder='Contoh: Mangkuk Tembaga Klasik'
                  required
                  className='w-full bg-[#0a0908] border border-[#292524] rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors'
                />
              </div>

              <div>
                <label className='text-white/70 text-sm mb-2 block'>Kategori</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  required
                  className='w-full bg-[#0a0908] border border-[#292524] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors'>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className='text-white/70 text-sm mb-2 block'>Deskripsi</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder='Deskripsikan produk Anda...'
                  rows={4}
                  required
                  className='w-full bg-[#0a0908] border border-[#292524] rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors resize-none'
                />
              </div>

              <div className='flex gap-3 pt-4'>
                <button
                  type='button'
                  onClick={() => setShowModal(false)}
                  disabled={submitting}
                  className='flex-1 bg-[#292524] hover:bg-[#3a3633] text-white py-3 rounded-full font-semibold transition-colors disabled:opacity-50'>
                  Batal
                </button>
                <button
                  type='submit'
                  disabled={submitting || imageValidating || (!imageFile && !imagePreview)}
                  className='flex-1 bg-linear-to-r from-accent to-[#b85c2e] hover:from-[#b85c2e] hover:to-accent text-white py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'>
                  {submitting ? (
                    <>
                      <Loader2 className='w-5 h-5 animate-spin' />
                      Menyimpan...
                    </>
                  ) : (
                    <>
                      <Save className='w-5 h-5' />
                      Simpan
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
