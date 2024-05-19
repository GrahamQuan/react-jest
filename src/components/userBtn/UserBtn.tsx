import { useEffect, useState } from 'react';

export default function UserBtn() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLogin(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isLogin ? (
        <div>UserInfo</div>
      ) : (
        <button type="button" onClick={() => setIsLogin(true)}>
          Login
        </button>
      )}
    </>
  );
}
