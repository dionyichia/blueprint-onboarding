export interface Post {
  id: number;
  username: string;
  date: string;
  image: string;
  likeCount: number;
  text: string;
}
export interface Comment {
  id: number;
  date: string;
  username: string;
  comment: string;
  post: number;
}
