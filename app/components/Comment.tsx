import React from 'react';
import UserProfile, { UserProfileProps } from './UserProfile';

export interface CommentProps {
  user: UserProfileProps;
  date: string;
  description: string;
}

const Comment = (props: CommentProps) => {
  const dateObject = new Date(props.date);
  const formattedDate = dateObject.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="comment">
      <div className="comment-head">
        <UserProfile {...props.user} />
        <div className="date">{formattedDate}</div>
      </div>

      <div>{props.description}</div>
    </div>
  );
};

export default Comment;
