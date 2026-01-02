// lib/utils/image-validation.ts

export interface ImageValidationResult {
  valid: boolean;
  error?: string;
  file?: File;
}

export interface ImageValidationOptions {
  maxSizeMB?: number;
  allowedFormats?: string[];
  maxWidth?: number;
  maxHeight?: number;
}

export class ImageValidator {
  private static readonly DEFAULT_MAX_SIZE_MB = 5; // 5MB
  private static readonly DEFAULT_ALLOWED_FORMATS = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  private static readonly DEFAULT_MAX_WIDTH = 2048;
  private static readonly DEFAULT_MAX_HEIGHT = 2048;

  /**
   * Validasi file gambar
   */
  static async validate(file: File, options: ImageValidationOptions = {}): Promise<ImageValidationResult> {
    const {
      maxSizeMB = this.DEFAULT_MAX_SIZE_MB,
      allowedFormats = this.DEFAULT_ALLOWED_FORMATS,
      maxWidth = this.DEFAULT_MAX_WIDTH,
      maxHeight = this.DEFAULT_MAX_HEIGHT,
    } = options;

    // Validasi format
    if (!allowedFormats.includes(file.type)) {
      const formats = allowedFormats.map((f) => f.replace("image/", "").toUpperCase()).join(", ");
      return {
        valid: false,
        error: `Format tidak didukung. Gunakan: ${formats}`,
      };
    }

    // Validasi ukuran file
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      return {
        valid: false,
        error: `Ukuran file terlalu besar (${this.formatFileSize(file.size)}). Maksimal ${maxSizeMB}MB`,
      };
    }

    // Validasi dimensi gambar
    try {
      const dimensions = await this.getImageDimensions(file);

      if (dimensions.width > maxWidth || dimensions.height > maxHeight) {
        return {
          valid: false,
          error: `Dimensi terlalu besar (${dimensions.width} x ${dimensions.height}px). Maksimal ${maxWidth} x ${maxHeight}px`,
        };
      }
    } catch (error) {
      return {
        valid: false,
        error: "Gagal membaca gambar. File mungkin rusak.",
      };
    }

    return {
      valid: true,
      file,
    };
  }

  /**
   * Mendapatkan dimensi gambar
   */
  private static getImageDimensions(file: File): Promise<{width: number; height: number}> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const url = URL.createObjectURL(file);

      img.onload = () => {
        URL.revokeObjectURL(url);
        resolve({
          width: img.width,
          height: img.height,
        });
      };

      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error("Failed to load image"));
      };

      img.src = url;
    });
  }

  /**
   * Format ukuran file ke string yang readable
   */
  static formatFileSize(bytes: number): string {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  }
}
