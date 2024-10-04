import styled from 'styled-components';

export const Form = styled.form`
  width: 400px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 16px;
  padding: 8px;
`;

export const LabelField = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
`;

export const InputField = styled.input`
  padding: 16px;
  font-size: 16px;
  line-height: 1.2;
  border: 1px solid #35363a;
  border-radius: 8px;
  width: 292px;
  cursor: pointer;
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
