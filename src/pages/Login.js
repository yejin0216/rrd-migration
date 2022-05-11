import React from 'react';
import { useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const [, setAuthToken] = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    setAuthToken('kimyejin');
    navigate('/');
  };

  return (
    <div>
      로그인 버튼을 클릭하면 메인 화면으로 이동합니다.
      <br />
      <button type='submit' onClick={handleLogin}>
        로그인
      </button>
    </div>
  );
};

export default Login;
