import {supabase} from "@/lib/supabase";
import {type Product} from "@/lib/service/product-service";

export type ProductInput = {
  title: string;
  description: string;
  category: string;
  image: string;
};

export class AdminProductService {
  /**
   * Create new product
   */
  static async createProduct(product: ProductInput): Promise<{
    data: Product | null;
    error: string | null;
  }> {
    try {
      const {data, error} = await supabase.from("products").insert([product]).select().single();

      if (error) throw error;

      return {data, error: null};
    } catch (err: any) {
      console.error("Error creating product:", err);
      return {
        data: null,
        error: err.message || "Gagal membuat produk.",
      };
    }
  }

  /**
   * Update existing product
   * Note: updated_at will be automatically set by database trigger
   */
  static async updateProduct(
    id: string,
    updates: Partial<ProductInput>
  ): Promise<{
    data: Product | null;
    error: string | null;
  }> {
    try {
      const {data, error} = await supabase.from("products").update(updates).eq("id", id).select().single();

      if (error) throw error;

      return {data, error: null};
    } catch (err: any) {
      console.error("Error updating product:", err);
      return {
        data: null,
        error: err.message || "Gagal mengupdate produk.",
      };
    }
  }

  /**
   * Delete product
   */
  static async deleteProduct(id: string): Promise<{
    success: boolean;
    error: string | null;
  }> {
    try {
      const {error} = await supabase.from("products").delete().eq("id", id);

      if (error) throw error;

      return {success: true, error: null};
    } catch (err: any) {
      console.error("Error deleting product:", err);
      return {
        success: false,
        error: err.message || "Gagal menghapus produk.",
      };
    }
  }

  /**
   * Upload image to Supabase Storage
   */
  static async uploadImage(file: File): Promise<{
    url: string | null;
    error: string | null;
  }> {
    try {
      // Generate unique filename
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
      const filePath = `products/${fileName}`;

      // Upload to Supabase Storage
      const {data, error} = await supabase.storage.from("images").upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      });

      if (error) throw error;

      // Get public URL
      const {
        data: {publicUrl},
      } = supabase.storage.from("images").getPublicUrl(filePath);

      return {url: publicUrl, error: null};
    } catch (err: any) {
      console.error("Error uploading image:", err);
      return {
        url: null,
        error: err.message || "Gagal mengupload gambar.",
      };
    }
  }

  /**
   * Delete image from Supabase Storage
   */
  static async deleteImage(imageUrl: string): Promise<{
    success: boolean;
    error: string | null;
  }> {
    try {
      // Extract file path from URL
      const urlParts = imageUrl.split("/products/");
      if (urlParts.length < 2) {
        return {success: false, error: "Invalid image URL"};
      }
      const filePath = `products/${urlParts[1]}`;

      const {error} = await supabase.storage.from("images").remove([filePath]);

      if (error) throw error;

      return {success: true, error: null};
    } catch (err: any) {
      console.error("Error deleting image:", err);
      return {
        success: false,
        error: err.message || "Gagal menghapus gambar.",
      };
    }
  }
}

export const {createProduct, updateProduct, deleteProduct, uploadImage, deleteImage} = AdminProductService;
