"use client";
import {useState, useEffect} from "react";
import {Plus, Edit, Trash2, Loader2, FileText, Search, X, Save, AlertCircle, CheckCircle} from "lucide-react";
import {ArticleService, type Article, type ArticleInput} from "@/lib/service/article-service";

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState<"create" | "edit">("create");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [formData, setFormData] = useState<ArticleInput>({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    author: "",
    read_time: "",
    slug: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const categories = ["Tips & Trik", "Inspirasi", "Tutorial", "Berita"];

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setLoading(true);
    const {data, error} = await ArticleService.getAllArticles();

    if (error) {
      console.error("Error fetching articles:", error);
    } else {
      setArticles(data || []);
    }

    setLoading(false);
  };

  const openCreateModal = () => {
    setModalMode("create");
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      category: categories[0],
      author: "",
      read_time: "",
      slug: "",
    });
    setError(null);
    setSuccess(null);
    setShowModal(true);
  };

  const openEditModal = (article: Article) => {
    setModalMode("edit");
    setSelectedArticle(article);
    setFormData({
      title: article.title,
      excerpt: article.excerpt,
      content: article.content,
      category: article.category,
      author: article.author,
      read_time: article.read_time,
      slug: article.slug,
    });
    setError(null);
    setSuccess(null);
    setShowModal(true);
  };

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: ArticleService.generateSlug(title),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setSubmitting(true);

    try {
      if (modalMode === "create") {
        const {data, error} = await ArticleService.createArticle(formData);
        if (error) {
          setError(error);
        } else {
          setSuccess("Artikel berhasil ditambahkan!");
          await fetchArticles();
          setTimeout(() => {
            setShowModal(false);
          }, 1500);
        }
      } else if (selectedArticle) {
        const {data, error} = await ArticleService.updateArticle(selectedArticle.id, formData);
        if (error) {
          setError(error);
        } else {
          setSuccess("Artikel berhasil diperbarui!");
          await fetchArticles();
          setTimeout(() => {
            setShowModal(false);
          }, 1500);
        }
      }
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (article: Article) => {
    if (!confirm(`Yakin ingin menghapus artikel "${article.title}"?`)) return;

    const {success, error} = await ArticleService.deleteArticle(article.id);

    if (error) {
      alert(error);
    } else {
      await fetchArticles();
    }
  };

  const filteredArticles = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='max-w-7xl mx-auto px-6 py-8'>
      {/* Header */}
      <div className='flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-8'>
        <div>
          <h2 className='text-2xl font-bold text-white mb-1'>Kelola Artikel</h2>
          <p className='text-white/60 text-sm'>Tambah, edit, atau hapus artikel blog</p>
        </div>
        <button
          onClick={openCreateModal}
          className='bg-linear-to-r from-accent to-[#b85c2e] hover:from-[#b85c2e] hover:to-accent text-white px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg'>
          <Plus className='w-5 h-5' />
          Tambah Artikel
        </button>
      </div>

      {/* Search */}
      <div className='mb-6'>
        <div className='relative w-full sm:w-96'>
          <Search className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40' />
          <input
            type='text'
            placeholder='Cari artikel...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full bg-[#1c1917]/50 border border-[#292524] rounded-full pl-12 pr-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors'
          />
        </div>
      </div>

      {/* Table */}
      {loading ? (
        <div className='flex flex-col items-center justify-center py-20'>
          <Loader2 className='w-12 h-12 text-accent animate-spin mb-4' />
          <p className='text-white/60'>Memuat artikel...</p>
        </div>
      ) : (
        <div className='bg-[#1c1917]/30 backdrop-blur-sm border border-[#292524] rounded-2xl overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='border-b border-[#292524]'>
                  <th className='text-left py-4 px-6 text-white/70 font-semibold text-sm'>Judul</th>
                  <th className='text-left py-4 px-6 text-white/70 font-semibold text-sm'>Kategori</th>
                  <th className='text-left py-4 px-6 text-white/70 font-semibold text-sm'>Penulis</th>
                  <th className='text-left py-4 px-6 text-white/70 font-semibold text-sm'>Waktu Baca</th>
                  <th className='text-center py-4 px-6 text-white/70 font-semibold text-sm'>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredArticles.length === 0 ? (
                  <tr>
                    <td colSpan={5} className='text-center py-20'>
                      <FileText className='w-16 h-16 text-white/20 mx-auto mb-4' />
                      <p className='text-white/60 text-lg'>{searchQuery ? "Tidak ada artikel ditemukan" : "Belum ada artikel"}</p>
                    </td>
                  </tr>
                ) : (
                  filteredArticles.map((article) => (
                    <tr key={article.id} className='border-b border-[#292524] hover:bg-[#1c1917]/50 transition-colors'>
                      <td className='py-4 px-6'>
                        <div className='text-white font-medium line-clamp-2 max-w-md'>{article.title}</div>
                        <div className='text-white/40 text-xs mt-1'>{ArticleService.formatDate(article.created_at)}</div>
                      </td>
                      <td className='py-4 px-6'>
                        <span className='inline-block bg-accent/20 text-accent text-xs font-semibold px-3 py-1 rounded-full'>{article.category}</span>
                      </td>
                      <td className='py-4 px-6 text-white/70 text-sm'>{article.author}</td>
                      <td className='py-4 px-6 text-white/70 text-sm'>{article.read_time}</td>
                      <td className='py-4 px-6'>
                        <div className='flex items-center justify-center gap-2'>
                          <button
                            onClick={() => openEditModal(article)}
                            className='bg-[#292524] hover:bg-accent text-white p-2 rounded-lg transition-colors'>
                            <Edit className='w-4 h-4' />
                          </button>
                          <button
                            onClick={() => handleDelete(article)}
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

      {/* Modal */}
      {showModal && (
        <div className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6'>
          <div className='bg-[#1c1917] border border-[#292524] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto'>
            <div className='sticky top-0 bg-[#1c1917] border-b border-[#292524] p-6 flex items-center justify-between z-10'>
              <h2 className='text-2xl font-bold text-white'>{modalMode === "create" ? "Tambah Artikel" : "Edit Artikel"}</h2>
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

              {success && (
                <div className='bg-green-500/10 border border-green-500/20 rounded-xl p-4 flex items-start gap-3'>
                  <CheckCircle className='w-5 h-5 text-green-400 shrink-0 mt-0.5' />
                  <p className='text-green-400 text-sm'>{success}</p>
                </div>
              )}

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='md:col-span-2'>
                  <label className='text-white/70 text-sm mb-2 block'>Judul Artikel *</label>
                  <input
                    type='text'
                    value={formData.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder='Contoh: Tips Merawat Kerajinan Tembaga'
                    required
                    className='w-full bg-[#0a0908] border border-[#292524] rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors'
                  />
                </div>

                <div className='md:col-span-2'>
                  <label className='text-white/70 text-sm mb-2 block'>
                    Slug <span className='text-white/40'>(auto-generated)</span>
                  </label>
                  <input
                    type='text'
                    value={formData.slug}
                    onChange={(e) => setFormData({...formData, slug: e.target.value})}
                    placeholder='slug-artikel'
                    required
                    className='w-full bg-[#0a0908] border border-[#292524] rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors'
                  />
                </div>

                <div>
                  <label className='text-white/70 text-sm mb-2 block'>Kategori *</label>
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
                  <label className='text-white/70 text-sm mb-2 block'>Penulis *</label>
                  <input
                    type='text'
                    value={formData.author}
                    onChange={(e) => setFormData({...formData, author: e.target.value})}
                    placeholder='Nama penulis'
                    required
                    className='w-full bg-[#0a0908] border border-[#292524] rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors'
                  />
                </div>

                <div>
                  <label className='text-white/70 text-sm mb-2 block'>Waktu Baca *</label>
                  <input
                    type='text'
                    value={formData.read_time}
                    onChange={(e) => setFormData({...formData, read_time: e.target.value})}
                    placeholder='Contoh: 5 menit'
                    required
                    className='w-full bg-[#0a0908] border border-[#292524] rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors'
                  />
                </div>

                <div className='md:col-span-2'>
                  <label className='text-white/70 text-sm mb-2 block'>Ringkasan *</label>
                  <textarea
                    value={formData.excerpt}
                    onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                    placeholder='Ringkasan singkat artikel (maks 200 karakter)'
                    rows={3}
                    required
                    maxLength={200}
                    className='w-full bg-[#0a0908] border border-[#292524] rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors resize-none'
                  />
                  <div className='text-white/40 text-xs mt-1'>{formData.excerpt.length}/200 karakter</div>
                </div>

                <div className='md:col-span-2'>
                  <label className='text-white/70 text-sm mb-2 block'>Konten Artikel *</label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                    placeholder='Tulis konten artikel lengkap di sini...'
                    rows={12}
                    required
                    className='w-full bg-[#0a0908] border border-[#292524] rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors resize-none font-mono text-sm'
                  />
                </div>
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
                  disabled={submitting}
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
