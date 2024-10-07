import {
  HeaderContent,
  PhonebookContent,
  HeaderContainer,
  HeaderSection,
} from './Layout.styled';
import { Navigation } from '../components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  return (
    <>
      <HeaderSection>
        <HeaderContainer>
          <HeaderContent>
            <Navigation />
          </HeaderContent>
        </HeaderContainer>
      </HeaderSection>

      <PhonebookContent>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </PhonebookContent>

      <ToastContainer />
    </>
  );
};
