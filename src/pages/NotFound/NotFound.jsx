import { NotFoundSection, NotFoundText, NotFoundLink } from './NotFound.styled';

function NotFoundPage() {
  return (
    <NotFoundSection>
      <NotFoundText>This page doesn't exist.</NotFoundText>
      <NotFoundLink to="/">Open home page</NotFoundLink>
    </NotFoundSection>
  );
}

export default NotFoundPage;
