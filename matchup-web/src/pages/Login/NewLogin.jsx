import { React, useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import "./NewLogin.css";
import LoginImage from "../../assets/login-banner-img.png";
import SignupImage from "../../assets/signup-banner-img.png";
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate, useLocation } from "react-router-dom";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = 'http://4.211.104.91:3001/users';
const LOGIN_URL = 'http://4.211.104.91:3001/users/new-token';

export default function NewLogin() {
  const [isChecked, setIsChecked] = useState(false);
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [loginUser, setLoginUser] = useState('');
  const [loginPwd, setLoginPwd] = useState('');
  const [loginErrMsg, setLoginErrMsg] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const [registerUser, setRegisterUser] = useState('');
  const [registerPwd, setRegisterPwd] = useState('');
  const [validRegisterPwd, setValidRegisterPwd] = useState(false);
  const [registerErrMsg, setRegisterErrMsg] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const registerPwdRef = useRef();

  useEffect(() => {
    if (registerPwd.length != 0) {
      console.log('checking password');
      setValidRegisterPwd(PWD_REGEX.test(registerPwd));
    } else {
      setValidRegisterPwd(true);
    }
  }, [registerPwd])

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      document.getElementById('login-side-panel').classList.remove('flex');
      document.getElementById('login-side-panel').classList.add('hidden');
      document.getElementById('signup-side-panel').classList.remove('hidden');
      document.getElementById('signup-side-panel').classList.add('flex');
    } else {
      document.getElementById('login-side-panel').classList.remove('hidden');
      document.getElementById('login-side-panel').classList.add('flex');
      document.getElementById('signup-side-panel').classList.remove('flex');
      document.getElementById('signup-side-panel').classList.add('hidden');
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const url = LOGIN_URL;
    const data = {
      username: loginUser,
      password: loginPwd
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
        setAuth({ token: responseData.token, username: loginUser });
        window.localStorage.setItem('auth', JSON.stringify({ token: responseData.token, username: loginUser }));
        setLoginSuccess(true);
        setLoginUser('');
        setLoginPwd('');
        navigate('/index', { replace: true });
      } else {
        console.error('Login failed with status:', response.status);
        if (response.status === 401) {
          setLoginErrMsg('Invalid username or password');
          setLoginSuccess(false);
        } else {
          setLoginErrMsg('Login failed');
          setLoginSuccess(false);
        }
      }
    } catch (error) {
      if (!error?.response) {
        setLoginErrMsg('Network error');
        console.error('Network error');
      } else {
        console.error(error);
      }
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const url = REGISTER_URL;
    const v2 = PWD_REGEX.test(registerPwd);
    if (!v2) {
      setRegisterErrMsg('Invalid Entry');
      return;
    }
    const data = {
      username: registerUser,
      password: registerPwd
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
        setRegisterSuccess(true);
        window.localStorage.setItem('auth', JSON.stringify({ token: responseData.token, username: registerUser }));
        setRegisterUser('');
        setRegisterPwd('');
        navigate('/index', { replace: true });
      } else {
        console.error('Registration failed with status:', response.status);
        if (response.status === 400) {
          setRegisterErrMsg('Username already exists');
        } else {
          setRegisterErrMsg('Registration failed');
        }
        setRegisterSuccess(false);
      }
    } catch (error) {
      if (!error?.response) {
        setRegisterErrMsg('Network error');
        console.error('Network error');
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div id="login-page" className="flex flex-row h-screen">
      <div id="login-side-panel" className="flex flex-col w-1/2 h-full bg-blue-500">
        <img src={LoginImage} alt="login banner" className="mb-10" />
        <h2 className="text-4xl my-4">Welcome back!</h2>
        <p>Sign in to your account to continue</p>
      </div>
      <div id="signup-side-panel" className="hidden flex-col w-1/2 h-full bg-blue-500">
        <img src={SignupImage} alt="signup banner" className="mb-10" />
        <h2 className="text-4xl my-4">Matchup</h2>
        <p>Sign up to find your team.</p>
      </div>
      <div className="w-1/2 h-full">
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="col-12 text-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
              <input className="checkbox hidden" type="checkbox" id="reg-log" name="reg-log" checked={isChecked} onChange={handleCheckboxChange} />
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <form className="card-front" onSubmit={handleLoginSubmit}>
                    <div className="error-message">
                      <p>{loginErrMsg}</p>
                    </div>
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Log In</h4>
                        <div className="form-group">
                          <div className="input-container">
                            <input
                              type="email"
                              name="logemail"
                              className="form-style"
                              placeholder="Your Email or Username"
                              id="logemail"
                              autoComplete="off"
                              onChange={(e) => setLoginUser(e.target.value)}
                              value={loginUser}
                            />
                            <FontAwesomeIcon icon={faAt} className="input-icon uil uil-at icon-small" />
                          </div>
                        </div>
                        <div className="form-group mt-2">
                          <div className="input-container">
                            <input
                              type="password"
                              name="logpass"
                              className="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autoComplete="off"
                              onChange={(e) => setLoginPwd(e.target.value)}
                              value={loginPwd}
                            />
                            <FontAwesomeIcon icon={faLock} className="input-icon uil uil-lock-alt icon-small" />
                          </div>
                        </div>
                        <button className="btn mt-3 bg-blue-500 text-white px-4 py-2 rounded" type="submit">submit</button>
                        <p className="mb-0 mt-2 text-center"><a href="#0" className="link">Forgot your password?</a></p>
                      </div>
                    </div>
                  </form>
                  <form className="card-back" onSubmit={handleRegisterSubmit}>
                    <div className="error-message">
                      <p>
                        {registerErrMsg}
                      </p>
                    </div>
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Sign Up</h4>
                        <div className="form-group">
                          <div className="input-container">
                            <input
                              type="text"
                              name="regname"
                              className="form-style"
                              placeholder="Your Full Name"
                              id="regname"
                              autoComplete="off"
                            />
                            <FontAwesomeIcon icon={faAt} className="input-icon uil uil-at icon-small" />
                          </div>
                        </div>
                        <div className="form-group mt-2">
                          <div className="input-container">
                            <input
                              type="email"
                              name="regemail"
                              className="form-style"
                              placeholder="Your Email"
                              id="regemail"
                              autoComplete="off"
                              onChange={(e) => setRegisterUser(e.target.value)}
                              value={registerUser}
                            />
                            <FontAwesomeIcon icon={faAt} className="input-icon uil uil-at icon-small" />
                          </div>
                        </div>
                        <div className="form-group mt-2">
                          <div className="input-container">
                            <input
                              type="password"
                              name="regpass"
                              className="form-style"
                              placeholder="Your Password"
                              id="regpass"
                              autoComplete="off"
                              onChange={(e) => setRegisterPwd(e.target.value)}
                              value={registerPwd}
                              ref={registerPwdRef}
                            />
                            <FontAwesomeIcon icon={faLock} className="input-icon uil uil-lock-alt icon-small" />
                          </div>
                        </div>
                        {validRegisterPwd ? '' : (
                          <div className="popdown-text">
                            <p>Password must be 8-24 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.</p>
                          </div>
                        )}
                        <button className="btn mt-3 bg-blue-500 text-white px-4 py-2 rounded" type="submit">submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}