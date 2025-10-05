import { supabase } from '@/supabase/client';
import { Post } from './types';

export class ApiService {
  // Fetch Posts
  static async fetchPost(): Promise<Post[]> {
    const {data, error}  = await supabase.from('Posts').select('*')

    if (error) {
      console.log("Error fetching posts from api: ", error);
    }

    return data ?? [];
  }

  // Fetch Comments
  static async fetchComment() {
    return;
  }

}