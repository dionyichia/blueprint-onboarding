import React from 'react';
import { FiHeart as HeartIcon } from 'react-icons/fi';
import { GoPaperAirplane as ShareIcon } from 'react-icons/go';
import CommentSection, { CommentSectionProps } from './CommentSection';
import UserProfile, { UserProfileProps } from './UserProfile';

export interface PostProps {
  user: UserProfileProps;
  date: string;
  description: string;
  likes: number;
  img?: string;
  comments?: CommentSectionProps;
}

const Post = (props: PostProps) => {
  return (
    <div className="post">
      <div className="post-head">
        <UserProfile {...props.user} />
        <div className="date">{props.date}</div>
      </div>

      <div>{props.description}</div>

      <div>
        {props.img && (
          <img src={props.img} className="post-img" alt="Post image" />
        )}
      </div>

      <div className="post-foot">
        <div className="likes">
          <HeartIcon size={24} strokeWidth={1.5} />
          {props.likes} Likes
        </div>
        <button className="share">
          <ShareIcon size={24} />
        </button>
      </div>

      <hr />

      {props.comments && <CommentSection {...props.comments} />}

      <hr />
    </div>
  );
};

export default Post;
