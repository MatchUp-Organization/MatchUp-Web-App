import { useRef, useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import InfoIcon from '@mui/icons-material/Info';
import "./Login.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "../../components/ui/Button/Button";

const USER_REGEX = /^[A-z0-9-_]{4,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const LOGIN_URL = 'http://localhost:3001/users/new-token';

export default function Login() {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user])

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
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
        navigate(from, { replace: true });
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
    <div className="account-container">
      <div className="login-form">
        <h1>Login</h1>
        <div ref={errRef} className="error-message">
          <p>{errMsg}</p>
        </div>
        <form className="account-form" onSubmit={handleSubmit}>
          <div className="form-input-area">
            <label htmlFor="username">
              Username:
              <CheckIcon style={validName ? { color: "green" } : { display: "none" }} />
              <CloseIcon style={validName || !user ? { display: "none" } : { color: "red" }} />
            </label>
            <input
              type="text"
              id="username"
              autoComplete="off"
              ref={userRef}
              onChange={(e) => setUser(e.target.value)}
              value={user}
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
            />
            <div id="uidnote" className={userFocus && user && !validName ? "instructions" : "hide"}>
              <InfoIcon />
              <p className="info-text-container">
                4 to 24 characters.<br />
                Must begin with a letter.<br />
                Letters, numbers, underscores, hyphens allowed.
              </p>
            </div>
          </div>

          <div className="form-input-area">
            <label htmlFor="password">
              Password:
              <CheckIcon style={validPwd ? { color: "green" } : { display: "none" }} />
              <CloseIcon style={validPwd || !pwd ? { display: "none" } : { color: "red" }} />
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
            />
            <div id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "hide"}>
              <InfoIcon />
              <p className="info-text-container">
                8 to 24 characters.<br />
                Must include uppercase and lowercase letters, a number and a special character.<br />
                Allowed special characters: ! @ # $ %
              </p>
            </div>
          </div>

          <button disabled={!validName || !validPwd ? true : false}>Sign In</button>
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
  )
}
