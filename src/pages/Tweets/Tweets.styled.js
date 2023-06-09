import styled from '@emotion/styled';

import backrountTweets from 'images/backrountTweets.jpg';

export const DivStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;

  background-image: url(${backrountTweets});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0 0 20px 20px;
`;

export const UlStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

export const LiStyled = styled.li``;

export const ButtonStyled = styled.button`
  margin: 20px auto 0;
  display: block;
  padding: 10px 20px;
  background-color: #f1f1f1;
  color: #333;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6bb7c6;
  }
`;
