import React from 'react';
import { FiHeart as HeartIcon } from 'react-icons/fi';
import { GoPaperAirplane as ShareIcon } from 'react-icons/go';
import Image from 'next/image';
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
  const dateObject = new Date(props.date);
  const formattedDate = dateObject.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="post">
      <div className="post-head">
        <UserProfile {...props.user} />
        <div className="date">{formattedDate}</div>
      </div>

      <div>{props.description}</div>

      <div className="post-img-container">
        {props.img && (
          <Image
            src={props.img}
            width={0}
            height={0}
            sizes="100vw"
            className="post-img"
            alt="Post image"
          />
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
