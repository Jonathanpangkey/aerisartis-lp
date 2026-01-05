import { supabase } from "@/lib/supabase";

export type Article = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  read_time: string;
  slug: string;
  published: boolean;
  created_at: string;
  updated_at: string;
};

export type ArticleInput = Omit<Article, "id" | "created_at" | "updated_at">;

export class ArticleService {
  /**
   * Fetch all published articles
   */
  static async getAllArticles(): Promise<{
    data: Article[] | null;
    error: string | null;
  }> {
    try {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (error) throw error;

      return { data, error: null };
    } catch (err: any) {
      console.error("Error fetching articles:", err);
      return {
        data: null,
        error: "Gagal memuat artikel.",
      };
    }
  }

  /**
   * Fetch articles by category
   */
  static async getArticlesByCategory(category: string): Promise<{
    data: Article[] | null;
    error: string | null;
  }> {
    try {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("published", true)
        .eq("category", category)
        .order("created_at", { ascending: false });

      if (error) throw error;

      return { data, error: null };
    } catch (err: any) {
      console.error("Error fetching articles by category:", err);
      return {
        data: null,
        error: "Gagal memuat artikel berdasarkan kategori.",
      };
    }
  }

  /**
   * Fetch single article by slug
   */
  static async getArticleBySlug(slug: string): Promise<{
    data: Article | null;
    error: string | null;
  }> {
    try {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .single();

      if (error) throw error;

      return { data, error: null };
    } catch (err: any) {
      console.error("Error fetching article:", err);
      return {
        data: null,
        error: "Artikel tidak ditemukan.",
      };
    }
  }

  /**
   * Fetch single article by ID
   */
  static async getArticleById(id: string): Promise<{
    data: Article | null;
    error: string | null;
  }> {
    try {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("id", id)
        .eq("published", true)
        .single();

      if (error) throw error;

      return { data, error: null };
    } catch (err: any) {
      console.error("Error fetching article:", err);
      return {
        data: null,
        error: "Artikel tidak ditemukan.",
      };
    }
  }

  /**
   * Fetch featured articles (latest N articles)
   */
  static async getFeaturedArticles(limit: number = 3): Promise<{
    data: Article[] | null;
    error: string | null;
  }> {
    try {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false })
        .limit(limit);

      if (error) throw error;

      return { data, error: null };
    } catch (err: any) {
      console.error("Error fetching featured articles:", err);
      return {
        data: null,
        error: "Gagal memuat artikel unggulan.",
      };
    }
  }

  /**
   * Search articles by title or excerpt
   */
  static async searchArticles(query: string): Promise<{
    data: Article[] | null;
    error: string | null;
  }> {
    try {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("published", true)
        .or(`title.ilike.%${query}%,excerpt.ilike.%${query}%,content.ilike.%${query}%`)
        .order("created_at", { ascending: false });

      if (error) throw error;

      return { data, error: null };
    } catch (err: any) {
      console.error("Error searching articles:", err);
      return {
        data: null,
        error: "Gagal mencari artikel.",
      };
    }
  }

  /**
   * Client-side filtering (untuk combine search + category)
   */
  static filterArticles(
    articles: Article[],
    category: string,
    searchQuery: string
  ): Article[] {
    return articles.filter((article) => {
      const matchCategory = category === "Semua" || article.category === category;
      const matchSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }

  /**
   * Generate slug from title
   */
  static generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  /**
   * Format date to Indonesian locale
   */
  static formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }
}

export const {
  getAllArticles,
  getArticlesByCategory,
  getArticleBySlug,
  getArticleById,
  getFeaturedArticles,
  searchArticles,
  filterArticles,
  generateSlug,
  formatDate,
} = ArticleService;