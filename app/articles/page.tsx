"use client";
import {useState, useEffect} from "react";
import Link from "next/link";
import {ArrowLeft, Search, Calendar, Clock, ArrowRight, Loader2} from "lucide-react";
import {ArticleService, type Article} from "@/lib/service/article-service";
import {useLanguage} from "@/context/LanguageContext";

export default function ArticlePage() {
  const {dict} = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticles() {
      setLoading(true);
      const {data, error} = await ArticleService.getAllArticles();

      if (error) {
        setError(error);
      } else {
        setArticles(data || []);
      }

      setLoading(false);
    }

    fetchArticles();
  }, []);

  if (!dict) return null;

  const filteredArticles = articles.filter((article) => {
    const matchSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) || article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchSearch;
  });

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <div className='relative bg-white border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-6 py-12'>
          <Link href='/' className='inline-flex items-center gap-2 text-gray-600 hover:text-accent transition-colors mb-8'>
            <ArrowLeft className='w-5 h-5' />
            <span>{dict.articlesPage.back_button}</span>
          </Link>

          <div className='text-center mb-8'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4'>
              {dict.articlesPage.title.part1} <span className='text-accent'>{dict.articlesPage.title.part2}</span>
            </h1>
            <p className='text-gray-600 text-lg max-w-2xl mx-auto'>{dict.articlesPage.description}</p>
          </div>

          <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
            <div className='relative w-full md:w-96'>
              <Search className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
              <input
                type='text'
                placeholder={dict.articlesPage.search_placeholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-full bg-gray-100 border border-gray-300 rounded-full pl-12 pr-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className='max-w-7xl mx-auto px-6 py-12'>
        {loading ? (
          <div className='flex flex-col items-center justify-center py-20'>
            <Loader2 className='w-12 h-12 text-accent animate-spin mb-4' />
            <p className='text-gray-600'>{dict.articlesPage.loading}</p>
          </div>
        ) : error ? (
          <div className='text-center py-20'>
            <p className='text-red-500 text-lg mb-4'>{error}</p>
            <button
              onClick={() => window.location.reload()}
              className='bg-accent text-white px-6 py-3 rounded-full hover:bg-accent/90 transition-colors'>
              {dict.articlesPage.retry}
            </button>
          </div>
        ) : (
          <>
            <div className='mb-6 text-gray-600 text-sm'>
              {dict.articlesPage.showing} {filteredArticles.length} {dict.articlesPage.articles}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/articles/${article.slug}`}
                  className='group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-accent hover:shadow-lg transition-all duration-300'>
                  <div className='p-6'>
                    <div className='flex items-center gap-2 mb-4'>
                      <span className='bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full'>{article.category}</span>
                    </div>

                    <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors line-clamp-2'>{article.title}</h3>

                    <p className='text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3'>{article.excerpt}</p>

                    <div className='flex items-center gap-4 text-gray-500 text-xs mb-4 pb-4 border-b border-gray-200'>
                      <div className='flex items-center gap-1'>
                        <Calendar className='w-3.5 h-3.5' />
                        <span>{ArticleService.formatDate(article.created_at)}</span>
                      </div>
                      <div className='flex items-center gap-1'>
                        <Clock className='w-3.5 h-3.5' />
                        <span>{article.read_time}</span>
                      </div>
                    </div>

                    <div className='flex items-center justify-between'>
                      <span className='text-gray-500 text-sm'>
                        {dict.articlesPage.by} {article.author}
                      </span>
                      <div className='flex items-center gap-2 text-accent text-sm font-semibold group-hover:gap-3 transition-all'>
                        {dict.articlesPage.read_button}
                        <ArrowRight className='w-4 h-4' />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredArticles.length === 0 && !loading && (
              <div className='text-center py-20'>
                <p className='text-gray-600 text-lg mb-4'>{dict.articlesPage.no_articles}</p>
                <button onClick={() => setSearchQuery("")} className='text-accent hover:underline'>
                  {dict.articlesPage.reset_search}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
