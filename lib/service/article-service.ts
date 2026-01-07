import {supabase} from "@/lib/supabase";

export type Article = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  read_time: string;
  slug: string;
  created_at: string;
  updated_at: string;
};

export type ArticleInput = Omit<Article, "id" | "created_at" | "updated_at">;

export class ArticleService {
  /**
   * Fetch all articles
   */
  static async getAllArticles(): Promise<{
    data: Article[] | null;
    error: string | null;
  }> {
    try {
      const {data, error} = await supabase.from("articles").select("*").order("updated_at", {ascending: false});

      if (error) throw error;

      return {data, error: null};
    } catch (err: any) {
      console.error("Error fetching articles:", err);
      return {
        data: null,
        error: err.message || "Gagal memuat artikel.",
      };
    }
  }

  /**
   * Create new article
   */
  static async createArticle(articleData: ArticleInput): Promise<{
    data: Article | null;
    error: string | null;
  }> {
    try {
      const {data, error} = await supabase.from("articles").insert([articleData]).select().single();

      if (error) throw error;

      return {data, error: null};
    } catch (err: any) {
      console.error("Error creating article:", err);
      return {
        data: null,
        error: err.message || "Gagal menambahkan artikel.",
      };
    }
  }

  /**
   * Update existing article
   */
  static async updateArticle(
    id: string,
    articleData: Partial<ArticleInput>
  ): Promise<{
    data: Article | null;
    error: string | null;
  }> {
    try {
      const {data, error} = await supabase.from("articles").update(articleData).eq("id", id).select().single();

      if (error) throw error;

      return {data, error: null};
    } catch (err: any) {
      console.error("Error updating article:", err);
      return {
        data: null,
        error: err.message || "Gagal memperbarui artikel.",
      };
    }
  }

  /**
   * Delete article
   */
  static async deleteArticle(id: string): Promise<{
    success: boolean;
    error: string | null;
  }> {
    try {
      const {error} = await supabase.from("articles").delete().eq("id", id);

      if (error) throw error;

      return {success: true, error: null};
    } catch (err: any) {
      console.error("Error deleting article:", err);
      return {
        success: false,
        error: err.message || "Gagal menghapus artikel.",
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
      const {data, error} = await supabase.from("articles").select("*").eq("slug", slug).single();

      if (error) throw error;

      return {data, error: null};
    } catch (err: any) {
      console.error("Error fetching article:", err);
      return {
        data: null,
        error: "Artikel tidak ditemukan.",
      };
    }
  }

  /**
   * Fetch Products articles (latest N articles)
   */
  static async getProductsArticles(limit: number = 3): Promise<{
    data: Article[] | null;
    error: string | null;
  }> {
    try {
      const {data, error} = await supabase.from("articles").select("*").order("updated_at", {ascending: false}).limit(limit);

      if (error) throw error;

      return {data, error: null};
    } catch (err: any) {
      console.error("Error fetching Products articles:", err);
      return {
        data: null,
        error: "Gagal memuat artikel unggulan.",
      };
    }
  }

  /**
   * Client-side filtering (untuk combine search + category)
   */
  static filterArticles(articles: Article[], category: string, searchQuery: string): Article[] {
    return articles.filter((article) => {
      const matchCategory = category === "Semua" || article.category === category;
      const matchSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) || article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
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
  createArticle,
  updateArticle,
  deleteArticle,
  getArticleBySlug,
  getProductsArticles,
  filterArticles,
  generateSlug,
  formatDate,
} = ArticleService;
