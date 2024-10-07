import { publicApi } from '../../api/api';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authLoginThunk } from '../../redux/auth/auth.thunk';
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import {
  RegisterGroup,
  RegisterTitle,
  Form,
  LabelField,
  InputField,
  ButtonAdding,
  LabelName,
} from './Register.styled';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState(initialState);
  // const [isPassword, setIsPassword] = useState(true);

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    // console.log(values);

    try {
      setIsLoading(true);
      await publicApi.post('/users/signup', values);
      await dispatch(
        authLoginThunk({ email: values.email, password: values.password })
      ).unwrap();

      setIsLoading(false);

      toast.success('Welcome to Your Phonebook!');

      setValues(initialState);
    } catch (error) {
      console.log(error);
      toast.error(
        `Something went wrong! ${
          error?.response?.data?.message || error?.message
        }`
      );
      setIsLoading(false);
    }
  };

  return (
    <RegisterGroup>
      {isLoading && <Loader />}

      <RegisterTitle>Please Sign up</RegisterTitle>

      <Form onSubmit={handleSubmit}>
        <LabelField>
          <LabelName>Name</LabelName>
          <InputField
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            autoComplete="off"
            placeholder="Name"
            value={values.name}
            onChange={handleInputChange}
          />
        </LabelField>

        <LabelField>
          <LabelName>Email</LabelName>
          <InputField
            type="email"
            name="email"
            required
            autoComplete="off"
            placeholder="name@email.com"
            value={values.email}
            onChange={handleInputChange}
          />
        </LabelField>

        <LabelField>
          <LabelName>Password</LabelName>
          <InputField
            // type={isPassword ? "password" : "text"}
            type="password"
            name="password"
            required
            autoComplete="off"
            placeholder="Name123456"
            value={values.password}
            onChange={handleInputChange}
          />
        </LabelField>

        {/* <ButtonAdding type="button" onClick={() => setIsPassword(prev => !prev)}>Show Password</ButtonAdding> */}
        <ButtonAdding type="submit">Sign up</ButtonAdding>
      </Form>
    </RegisterGroup>
  );
};

export default RegisterPage;
