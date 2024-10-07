import styled from 'styled-components';

export const ProfileMenu = styled.div`
  display: flex;
  /* margin-left: auto; */
  align-items: center;
  justify-content: space-between;
`;

export const ProfileEmail = styled.p`
  /* margin: 0 36px 0 0; */
  font-size: 12px;
  font-weight: 700;
  line-height: 1.5;
  color: honeydew;

  @media screen and (min-width: 480px) {
    font-size: 16px;
  }
`;

export const LogOutButton = styled.button`
  padding: 4px 24px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
  border: 1px solid #35363a;
  border-radius: 24px;
  cursor: pointer;
  background: honeydew;
  color: #35363a;
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out,
    border-color 0.25s ease-in-out, transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: #35363a;
    color: honeydew;
    border: 1px solid;
    transform: scale(1.1);
  }
`;
