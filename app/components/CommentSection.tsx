import React from 'react';
import Comment, { CommentProps } from './Comment';

export interface CommentSectionProps {
  comments: CommentProps[];
}

const CommentSection = (props: CommentSectionProps) => {
  return (
    <div className="comment-section">
      {props.comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </div>
  );
};

export default CommentSection;
