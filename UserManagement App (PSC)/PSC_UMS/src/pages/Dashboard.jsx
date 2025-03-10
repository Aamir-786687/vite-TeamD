import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import UserList from '../Components/Uselist';
import Logout from '../Components/Logout';

const Dashboard = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <div>
      <h1>Dashboard</h1>
      <UserList />
      <Logout />
    </div>
  );
};

export default Dashboard;
