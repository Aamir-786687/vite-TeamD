import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/userReducer';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'test@gmail.com' && password === '1234') {
      dispatch(loginUser({ email }));
      login();
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /> &nbsp;
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />&nbsp;&nbsp;
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
