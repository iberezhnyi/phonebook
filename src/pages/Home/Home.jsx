import image from '../../images/phonebook-logo.png';
import { StyledImage, StyledText, HomeGroup } from './Home.styled';

const HomePage = () => {
  return (
    <HomeGroup>
      <StyledText>Welcome to your Phonebook!</StyledText>
      <StyledImage src={image} alt="Your Phonebook logo" width={500} />
    </HomeGroup>
  );
};

export default HomePage;
