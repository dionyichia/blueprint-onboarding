import React from 'react';
import UserProfile, { UserProfileProps } from './UserProfile';

export interface CommentProps {
  user: UserProfileProps;
  date: string;
  description: string;
}

const Comment = (props: CommentProps) => {
  return (
    <div className="comment">
      <div className="comment-head">
        <UserProfile {...props.user} />
        <div className="date">{props.date}</div>
      </div>

      <div>{props.description}</div>
    </div>
  );
};

export default Comment;
