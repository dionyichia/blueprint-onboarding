import { ApiService } from '@/supabase/query';
import { Comment, Post } from '@/supabase/types';
import { CommentSectionProps } from '../components/CommentSection';
import { PostProps } from '../components/Post';

function mapCommentsToCommentProps(comments: Comment[]): CommentSectionProps {
  return {
    comments: comments.map(comment => ({
      user: {
        username: comment.username,
      },
      date: comment.date,
      description: comment.comment,
    })),
  };
}

export async function mapPostsToPostProps(posts: Post[]): Promise<PostProps[]> {
  const mappedPosts: PostProps[] = [];

  for (const post of posts) {
    const comments: Comment[] = await ApiService.fetchComment(post.id);
    const mappedComments = mapCommentsToCommentProps(comments);

    mappedPosts.push({
      user: { username: post.username },
      date: post.date,
      description: post.text,
      likes: post.likeCount,
      img: post.image,
      comments: mappedComments,
    });
  }

  return mappedPosts;
}
