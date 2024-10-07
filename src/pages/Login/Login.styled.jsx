import styled from 'styled-components';

export const RegisterGroup = styled.div`
  margin: 0;
  padding: 16px 40px;
  /* text-align: center; */

  @media screen and (min-width: 768px) {
    text-align: center;
  }
`;

export const RegisterTitle = styled.h2`
  margin: 0 0 8px 0;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.5;
`;

export const Form = styled.form`
  /* width: 400px; */
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 16px;
  padding: 8px;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const LabelField = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`;

export const LabelName = styled.p`
  margin-bottom: 10px;
`;

export const InputField = styled.input`
  padding: 16px;
  font-size: 16px;
  line-height: 1.2;
  border: 1px solid #35363a;
  border-radius: 8px;
  /* width: 284px; */
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 284px;
  }
`;

export const ButtonAdding = styled.button`
  padding: 8px 24px;
  font-size: 16px;
  font-weight: 700;
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
