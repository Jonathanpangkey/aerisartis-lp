"use client";
import {ArrowLeft, Share2, Calendar, Clock, User, Loader2} from "lucide-react";
import Link from "next/link";
import {useState, useEffect, use} from "react";
import {ArticleService} from "@/lib/service/article-service";
import type {Article} from "@/lib/service/article-service";
import {useLanguage} from "@/context/LanguageContext";

export default function ArticleDetailPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = use(params);
  const {dict, locale} = useLanguage();

  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticle() {
      setLoading(true);
      console.log("Fetching article with slug:", slug);
      const {data, error} = await ArticleService.getArticleBySlug(slug);

      console.log("Article data:", data);
      console.log("Article error:", error);

      if (error) {
        setError(error);
      } else {
        setArticle(data);
      }
      setLoading(false);
    }

    fetchArticle();
  }, [slug]);

  if (!dict) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert(dict.articleDetail.share_success);
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(locale === "id" ? "id-ID" : "en-US", options);
  };

  if (loading) {
    return (
      <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
        <div className='flex flex-col items-center'>
          <Loader2 className='w-12 h-12 text-accent animate-spin mb-4' />
          <p className='text-gray-600'>{dict.articleDetail.loading}</p>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
        <div className='text-center'>
          <p className='text-red-500 text-lg mb-4'>{error || dict.articleDetail.not_found}</p>
          <Link
            href='/articles'
            className='inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full hover:bg-accent/90 transition-colors'>
            <ArrowLeft className='w-5 h-5' />
            {dict.articleDetail.back_to_articles}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <div className='sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200'>
        <div className='max-w-5xl mx-auto px-6 py-4'>
          <div className='flex items-center justify-between'>
            <Link href='/articles' className='flex items-center gap-2 text-gray-600 hover:text-accent transition-colors'>
              <ArrowLeft className='w-5 h-5' />
              <span>{dict.articleDetail.back_button}</span>
            </Link>
            <button onClick={handleShare} className='p-2 text-gray-600 hover:text-accent transition-colors'>
              <Share2 className='w-5 h-5' />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className='max-w-4xl mx-auto px-6 py-12'>
        {/* Category Badge */}
        <div className='mb-6'>
          <span className='inline-block bg-accent/10 text-accent text-sm font-semibold px-4 py-2 rounded-full'>{article.category}</span>
        </div>

        {/* Title */}
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight'>{article.title}</h1>

        {/* Meta Information */}
        <div className='flex flex-wrap items-center gap-6 text-gray-500 text-sm mb-8 pb-8 border-b border-gray-200'>
          <div className='flex items-center gap-2'>
            <User className='w-4 h-4' />
            <span>{article.author}</span>
          </div>
          <div className='flex items-center gap-2'>
            <Calendar className='w-4 h-4' />
            <span>{formatDate(article.created_at)}</span>
          </div>
          <div className='flex items-center gap-2'>
            <Clock className='w-4 h-4' />
            <span>
              {article.read_time} {dict.articleDetail.minutes_read}
            </span>
          </div>
        </div>

        {/* Excerpt */}
        <div className='bg-accent/5 border-l-4 border-accent p-6 rounded-r-xl mb-8'>
          <p className='text-gray-700 text-lg italic leading-relaxed'>{article.excerpt}</p>
        </div>

        {/* Content */}
        <div className='prose prose-lg max-w-none'>
          <div
            className='text-gray-700 leading-relaxed space-y-6'
            style={{
              fontSize: "1.125rem",
              lineHeight: "1.75",
            }}
            dangerouslySetInnerHTML={{__html: article.content}}
          />
        </div>

        <div className='mt-12 pt-8 border-t border-gray-200'>
          <div className='flex items-center justify-between'>
            <p className='text-gray-600'>{dict.articleDetail.share_text}</p>
            <button
              onClick={handleShare}
              className='flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full hover:bg-accent/90 transition-colors'>
              <Share2 className='w-4 h-4' />
              {dict.articleDetail.share_button}
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
