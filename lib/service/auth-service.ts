// lib/services/authService.ts
import {supabase} from "@/lib/supabase";

export class AuthService {
  /**
   * Login dengan email dan password
   */
  static async login(email: string, password: string) {
    try {
      const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // Check if user is admin
      const isAdmin = await this.checkIsAdmin(data.user.id);

      if (!isAdmin) {
        await this.logout();
        return {
          user: null,
          session: null,
          error: "Akses ditolak. Anda bukan admin.",
        };
      }

      return {
        user: data.user,
        session: data.session,
        error: null,
      };
    } catch (err: any) {
      console.error("Login error:", err);
      return {
        user: null,
        session: null,
        error: err.message || "Login gagal. Periksa email dan password Anda.",
      };
    }
  }

  /**
   * Logout
   */
  static async logout() {
    try {
      const {error} = await supabase.auth.signOut();
      if (error) throw error;
      return {error: null};
    } catch (err: any) {
      console.error("Logout error:", err);
      return {error: err.message};
    }
  }

  /**
   * Get current session
   */
  static async getSession() {
    try {
      const {data, error} = await supabase.auth.getSession();
      if (error) throw error;
      return {session: data.session, error: null};
    } catch (err: any) {
      return {session: null, error: err.message};
    }
  }

  /**
   * Get current user
   */
  static async getCurrentUser() {
    try {
      const {data, error} = await supabase.auth.getUser();
      if (error) throw error;
      return {user: data.user, error: null};
    } catch (err: any) {
      return {user: null, error: err.message};
    }
  }

  /**
   * Check if user is admin
   */
  static async checkIsAdmin(userId: string): Promise<boolean> {
    try {
      const {data, error} = await supabase.from("admins").select("id").eq("id", userId).single();

      if (error) return false;
      return !!data;
    } catch (err) {
      console.error("Check admin error:", err);
      return false;
    }
  }

  /**
   * Listen to auth state changes
   */
  static onAuthStateChange(callback: (event: string, session: any) => void) {
    return supabase.auth.onAuthStateChange(callback);
  }
}

export const {login, logout, getSession, getCurrentUser, checkIsAdmin, onAuthStateChange} = AuthService;
