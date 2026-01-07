import {supabase} from "@/lib/supabase";

export type Product = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  created_at: string;
  updated_at: string;
};

export class ProductService {
  static async getAllProducts(): Promise<{
    data: Product[] | null;
    error: string | null;
  }> {
    try {
      const {data, error} = await supabase.from("products").select("*").order("updated_at", {ascending: false});

      if (error) throw error;

      return {data, error: null};
    } catch (err) {
      console.error("Error fetching all products:", err);
      return {
        data: null,
        error: "Gagal memuat produk. Silakan coba lagi.",
      };
    }
  }

  /**
   * Fetch Products products (limited)
   */
  static async getProductsProducts(limit: number = 3): Promise<{
    data: Product[] | null;
    error: string | null;
  }> {
    try {
      const {data, error} = await supabase.from("products").select("*").order("updated_at", {ascending: false}).limit(limit);

      if (error) throw error;

      return {data, error: null};
    } catch (err) {
      console.error("Error fetching Products products:", err);
      return {
        data: null,
        error: "Gagal memuat koleksi unggulan.",
      };
    }
  }

  /**
   * Fetch single product by ID
   */
  static async getProductById(id: string): Promise<{
    data: Product | null;
    error: string | null;
  }> {
    try {
      const {data, error} = await supabase.from("products").select("*").eq("id", id).single();

      if (error) throw error;

      return {data, error: null};
    } catch (err) {
      console.error("Error fetching product:", err);
      return {
        data: null,
        error: "Produk tidak ditemukan.",
      };
    }
  }

  /**
   * Filter products by category
   */
  static async getProductsByCategory(category: string): Promise<{
    data: Product[] | null;
    error: string | null;
  }> {
    try {
      const {data, error} = await supabase.from("products").select("*").eq("category", category).order("created_at", {ascending: false});

      if (error) throw error;

      return {data, error: null};
    } catch (err) {
      console.error("Error fetching products by category:", err);
      return {
        data: null,
        error: "Gagal memuat produk berdasarkan kategori.",
      };
    }
  }

  /**
   * Client-side filtering (untuk combine search + category)
   * Digunakan ketika sudah ada data di client
   */
  static filterProducts(products: Product[], category: string, searchQuery: string): Product[] {
    return products.filter((item) => {
      const matchCategory = category === "Semua" || item.category === category;
      const matchSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }
}

// Export untuk backward compatibility
export const {getAllProducts, getProductsProducts, getProductById, getProductsByCategory, filterProducts} = ProductService;
