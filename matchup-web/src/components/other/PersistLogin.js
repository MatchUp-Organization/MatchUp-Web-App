import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../../hooks/useRefreshToken";
import useAuth from "../../hooks/useAuth";

const PersistLogin = () => {
  const { auth } = useAuth();
  const refresh = useRefreshToken();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.error(error);
      }
    }
    setLoading(false);

    !auth?.token ? verifyRefreshToken() : setLoading(false);
  }, []);

  useEffect(() => {
    console.log('loading: ', loading);
    console.log('auth: ', auth);
    console.log('token: ', JSON.stringify(auth?.token));
  }, [loading]);

  return (
    loading
      ? <div>Loading...</div>
      : <Outlet />
  );
}

export default PersistLogin;