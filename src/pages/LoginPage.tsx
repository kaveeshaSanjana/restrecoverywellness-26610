import React, { useEffect, useRef } from 'react';
import Login from '@/components/Login';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const { login, user, isLoading } = useAuth();
  const navigate = useNavigate();
  const hasRedirected = useRef(false);

  // If already authenticated, redirect away from /login
  useEffect(() => {
    if (user && !isLoading && !hasRedirected.current) {
      hasRedirected.current = true;
      
      const redirectPath = sessionStorage.getItem('login_redirect');
      if (redirectPath && redirectPath !== '/login') {
        console.log('🔄 Redirecting to saved path:', redirectPath);
        sessionStorage.removeItem('login_redirect');
        navigate(redirectPath, { replace: true });
      } else {
        console.log('🔄 Redirecting to dashboard');
        navigate('/dashboard', { replace: true });
      }
    }
  }, [user, isLoading, navigate]);

  return (
    <Login
      onLogin={() => {
        // Navigation handled by useEffect above
        console.log('✅ Login successful, waiting for redirect...');
      }}
      loginFunction={login}
    />
  );
};

export default LoginPage;
