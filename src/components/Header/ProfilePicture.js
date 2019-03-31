import React from 'react';
import styled from '@emotion/styled';
import { User } from 'react-feather';

const ProfilePicture = ({ username }) => {
  const ImgContainer = styled('div')`
    width: 28px;
    height: 28px;
    background: white;
    border-radius: 50%;
    display: flex;
    vertical-align: center;
    overflow: hidden;
    margin-right: 0.35em;
    > img {
      width: 100%;
      height: 100%;
    }
  `;
  const imgUrl = username && `https://github.com/${username}.png`;
  return (
    <ImgContainer>
      {imgUrl ? <img src={imgUrl} alt="Name" /> : <User />}
    </ImgContainer>
  );
};

export default ProfilePicture;
