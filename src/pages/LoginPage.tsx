import React, { useEffect, useRef } from 'react';
import Login from '@/components/Login';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const LoginPage: React.FC = () => {
  const { login, user, isLoading, validateUserToken } = useAuth();
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

  // If a token exists but user isn't loaded, proactively restore session
  useEffect(() => {
    const token = localStorage.getItem('access_token') || sessionStorage.getItem('access_token');
    if (token && !user && !isLoading) {
      console.log('🔄 Token found on /login but user not loaded — validating token...');
      validateUserToken().catch(() => {
        console.warn('Token validation failed on /login');
      });
    }
  }, [user, isLoading, validateUserToken]);

  if (isLoading && !user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Preparing login...</p>
        </div>
      </div>
    );
  }

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
