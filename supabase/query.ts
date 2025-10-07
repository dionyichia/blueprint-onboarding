import { supabase } from '@/supabase/client';
import { Comment, Post } from './types';

(async () => {
  const { data, error } = await supabase.from('Posts').select('*');
  console.log('Posts test:', { data, error });
})();

export class ApiService {
  // Fetch Posts
  static async fetchPost(): Promise<Post[]> {
    const { data, error } = await supabase.from('Posts').select('*');
    console.log(data);

    if (error) {
      console.log('Error fetching posts from api: ', error);
    }

    return data ?? [];
  }

  // Fetch Comments
  static async fetchComment(post_id: number): Promise<Comment[]> {
    const { data, error } = await supabase
      .from('Comments')
      .select('*')
      .eq('post', post_id);
    console.log(data);

    if (error) {
      console.error('Error fetching comments:', error);
      return [];
    }
    return data ?? [];
  }
}
