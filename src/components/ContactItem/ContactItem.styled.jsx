import styled from 'styled-components';

export const ContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const ContactName = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
`;

export const ButtonDeleting = styled.button`
  padding: 4px 24px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  border: 1px solid;
  border-radius: 8px;
  cursor: pointer;
  background: #35363a;
  color: honeydew;
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out,
    border-color 0.25s ease-in-out, transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: #35363a;
    border: 1px solid;
    transform: scale(1.1);
  }
`;
