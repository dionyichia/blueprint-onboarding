import React from 'react';
import { LuUserCircle as ProfileIcon } from 'react-icons/lu';
import Image from 'next/image';

export interface UserProfileProps {
  username: string;
  pic?: string;
}

const UserProfile = (props: UserProfileProps) => {
  return (
    <div className="user-profile">
      <div className="profile-pic-container">
        {props.pic ? (
          <Image
            src={props.pic}
            className="profile-pic"
            alt="user-profile-pic"
          />
        ) : (
          <ProfileIcon className="profile-pic" strokeWidth={1.5} />
        )}
      </div>
      <div className="username">{props.username}</div>
    </div>
  );
};

export default UserProfile;
