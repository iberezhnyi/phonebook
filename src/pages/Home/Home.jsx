import image from '../../images/phonebook-logo.png';
import { StyledImage, StyledText, StyledWrapper } from './Home.styled';

const HomePage = () => {
  return (
    <StyledWrapper>
      <StyledText>Welcome to your Phonebook!</StyledText>
      <StyledImage src={image} alt="Your Phonebook logo" width={500} />
    </StyledWrapper>
  );
};

export default HomePage;
