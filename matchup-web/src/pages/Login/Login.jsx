import { React, useState, useEffect, useRef } from 'react';
import "./Login.css";
import LoginImage from "../../assets/login-banner-img.png";
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate } from "react-router-dom";
import '@fontsource/lato';

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = 'http://4.211.104.91:3001/users';
const LOGIN_URL = 'http://4.211.104.91:3001/users/new-token';

export default function NewLogin() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const formRef = useRef();

  const [loginUser, setLoginUser] = useState('');
  const [loginPwd, setLoginPwd] = useState('');
  const [loginErrMsg, setLoginErrMsg] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const [registerName, setRegisterName] = useState('');
  const [registerUser, setRegisterUser] = useState('');
  const [registerPwd, setRegisterPwd] = useState('');
  const [validRegisterPwd, setValidRegisterPwd] = useState(false);
  const [registerErrMsg, setRegisterErrMsg] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const registerPwdRef = useRef();

  useEffect(() => {
    if (registerPwd.length !== 0) {
      console.log('checking password');
      setValidRegisterPwd(PWD_REGEX.test(registerPwd));
    } else {
      setValidRegisterPwd(true);
    }
  }, [registerPwd]);


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

  return (
    <div className="page-login">
      <div className='page-login__left'>
        <img src={LoginImage} alt="MatchUp Logo" className='page-login-left__title' />
        <p className='page-login-left__title'>Welcome Back</p>
        <p className='page-login-left__text'>Just a couple of clicks and we start</p>
      </div>
      <div className='page-login__right'>
        <p className='page-login-right__title'>Sign In</p>
        <form ref={formRef} className='page-login-right__form' onSubmit={handleLoginSubmit}>
          <div className='page-login-right__input'>
            <p className='page-login-right-input__title'>Email</p>
            <input
              type="text"
              className='page-login-right-input__input'
              placeholder='exemple@gmail.com'
              value={loginUser}
              onChange={(e) => setLoginUser(e.target.value)}
            />
          </div>
          <div className='page-login-right__input'>
            <p className='page-login-right-input__title'>Password</p>
            <input
              type="password"
              className='page-login-right-input__input'
              placeholder='*********'
              value={loginPwd}
              onChange={(e) => setLoginPwd(e.target.value)}
            />
          </div>
          <button type="submit" className='page-signup-right__button'>
            <p className='page-signup-right-button__text'>Sign In</p>
          </button>
        </form>
        <p className='page-login-right__noaccount'>Don’t have an account?<Link to="/signup" className='page-login-right-noaccount__link'> Sign Up </Link></p>
      </div>
    </div>
  );
}