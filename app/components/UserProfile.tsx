import React from "react";
import { LuUserCircle as ProfileIcon } from 'react-icons/lu';

export interface UserProfileProps {
  username: string,
  pic?: string,
}

const UserProfile = (props: UserProfileProps) => {
  return (
    <div className="user-profile">
      <div>
        {props.pic ? <img src={props.pic} className="profile-pic" /> : <ProfileIcon className="profile-pic" strokeWidth={1.5}/>}
      </div>
      <div className="username">{props.username}</div>
    </div>
  )
}

export default UserProfile;