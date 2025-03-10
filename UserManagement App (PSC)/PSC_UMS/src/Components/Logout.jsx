import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/userReducer';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const dispatch = useDispatch();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    logout();
    navigate('/login');
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
