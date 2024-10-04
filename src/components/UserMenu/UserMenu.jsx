import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { authLogoutThunk } from '../../redux/auth/auth.thunk';
import { toast } from 'react-toastify';
import { ProfileMenu, ProfileEmail, LogOutButton } from './UserMenu.styled';

const UserMenu = ({ mail }) => {
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    try {
      await dispatch(authLogoutThunk()).unwrap();
    } catch (error) {
      console.log(error);
      toast.error('Something is wrong with log out.');
    }
  };

  return (
    <ProfileMenu>
      <ProfileEmail>{mail}</ProfileEmail>
      <LogOutButton type="button" onClick={handleLogOut}>
        Logout
      </LogOutButton>
    </ProfileMenu>
  );
};

UserMenu.propTypes = {
  mail: PropTypes.string.isRequired,
};

export default UserMenu;
