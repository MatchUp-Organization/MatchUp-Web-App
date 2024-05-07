import { useRef, useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import "./Login.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "../../components/ui/Button/Button";
import BannerImage from "../../assets/login-banner-img.png";

const LOGIN_URL = 'http://4.211.104.91:3001/users/new-token';

export default function Login() {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  var from;
  if (location.state?.from === null) {
    from = "/";
  } else {
    from = location.state?.from.pathname || "/";
  }

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');

  const [pwd, setPwd] = useState('');

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])


  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = LOGIN_URL;
    const data = {
      username: user,
      password: pwd
    };
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const responseData = await response.json();
        setAuth({ token: responseData.token, username: user });
        window.localStorage.setItem('auth', JSON.stringify({ token: responseData.token, username: user }));
        setSuccess(true);
        // clear input fields
        setUser('');
        setPwd('');
        navigate("/index", { replace: true });
      } else {
        console.error('Request failed with status:', response.status);
        if (response.status === 401) {
          setErrMsg('Wrong username or password');
          setSuccess(false);
        } else {
          setErrMsg('Login failed');
          setSuccess(false);
        }
        errRef.current.focus();
      }
    } catch (error) {
      if (!error?.response) {
        setErrMsg('No Server Response');
        console.error('No Server Response:', error);
      } else {
        setErrMsg("Login failed");
        console.error('Error:', error);
      }
      errRef.current.focus();
    }
  }

  return (
    <div className="login-container">
      <div className="login-side-panel">
        <img src={BannerImage} alt="login banner" className="mb-10" />
        <h2 className="text-4xl my-4">Welcome back!</h2>
        <p>Sign in to your account to continue</p>
      </div>
      <div className="login-form">
        <h1 className="text-4xl">Login</h1>
        <div>
          <div ref={errRef} className="error-message">
            <p>{errMsg}</p>
          </div>
          <form className="account-form" onSubmit={handleSubmit}>
            <div className="form-input-area">
              <label htmlFor="username">
                Username:
              </label>
              <input
                type="text"
                id="username"
                autoComplete="off"
                ref={userRef}
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                aria-describedby="uidnote"
              />
            </div>

            <div className="form-input-area">
              <label htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                aria-describedby="pwdnote"
              />
            </div>

            <button>Sign In</button>
          </form>

          <div className="account-feature-swapper">
            Don't have an account?
            <span className="line">
              <Link to="/signup" state={{ from: location.state ? location.state.from : null }}>
                <Button variant="default" size="default">
                  Create an Account
                </Button>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
