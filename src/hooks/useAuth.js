import React, { useState, useCallback, useEffect } from 'react';

const useAuth = () => {
  const [token, setToken] = useState(
    localStorage.getItem('token') || undefined,
  );

  const setAuthToken = useCallback(
    token => {
      localStorage.setItem('token', token);
      setToken(token);
    },
    [token],
  );

  const getAuthToken = useCallback(() => {
    return token;
  }, [token]);

  const clearAuthToken = useCallback(() => {
    localStorage.clear();
    setToken(undefined);
  }, [token]);

  useEffect(() => {
    localStorage.getItem('token') && setToken(localStorage.getItem('token'));
  }, []);

  return [getAuthToken, setAuthToken, clearAuthToken];
};

export default useAuth;
