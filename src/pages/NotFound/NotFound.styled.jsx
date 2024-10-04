import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundSection = styled.section`
  padding: 24px;
  text-align: center;
`;

export const NotFoundText = styled.p`
  margin-bottom: 16px;
`;

export const NotFoundLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 8px;
  color: honeydew;
  background-color: #35363a;
  border: 1px solid;

  border-radius: 6px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #35363a;
    transform: scale(1.1);
  }
`;
