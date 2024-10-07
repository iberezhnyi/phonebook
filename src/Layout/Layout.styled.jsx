import styled from 'styled-components';

export const HeaderSection = styled.header`
  /* margin-left: auto;
  margin-right: auto; */

  background-color: #35363a;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const HeaderContainer = styled.div`
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const HeaderContent = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 10;
  min-height: 36px;
  padding: 20px 16px;
  color: #ffffff;
`;

export const PhonebookContent = styled.main`
  padding: 16px;
  margin-left: auto;
  margin-right: auto;

  /* width: 1200px; */
`;
