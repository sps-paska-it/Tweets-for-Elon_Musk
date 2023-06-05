import styled from '@emotion/styled';

export const UlStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

export const LiStyled = styled.li``;

export const ButtonStyled = styled.button`
  margin: 0 auto;
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
    background-color: #ddd;
`;
