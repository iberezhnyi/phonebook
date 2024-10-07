import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderNav = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const NavItem = styled.li`
  display: flex;

  font-size: 20px;
  font-weight: 500;
  color: bisque;

  transform: scale(1);

  &:first-child {
    flex-grow: 1;
  }

  &:not(:last-child) {
    margin-right: 16px;
  }

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-right: 24px;
    }
  }
`;

export const NavLinkStyled = styled(NavLink)`
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus,
  &.active {
    text-decoration: underline bisque;

    transform: scale(1.15);
  }
`;
