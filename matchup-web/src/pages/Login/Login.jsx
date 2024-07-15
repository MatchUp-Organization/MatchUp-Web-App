import { React, useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";
import LoginImage from "../../assets/login-banner-img.png";
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate } from "react-router-dom";
import '@fontsource/lato';

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = 'http://4.211.104.91:3001/users';
const LOGIN_URL = 'http://4.211.104.91:3001/users/new-token';

export default function NewLogin() {
  const [isChecked, setIsChecked] = useState(false);
  const { setAuth } = useAuth();
  const navigate = useNavigate();

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
    <div className="page-login">
      <div className='page-login__left'>
        <img src={LoginImage} alt="MatchUp Logo" className='page-login-left__title' />
        <p className='page-login-left__title'>Welcome Back</p>
        <p className='page-login-left__text'>Just a couple of clicks and we start</p>
      </div>
      <div className='page-login__right'>
        <p className='page-login-right__title'>Sign In</p>
        <div className='page-login-right__input'>
          <p className='page-login-right-input__title'>Email</p>
          <input className='page-login-right-input__input' type="text" placeholder='exemple@gmail.com' />
        </div>
        <div className='page-login-right__input'>
          <p className='page-login-right-input__title'>Password</p>
          <input className='page-login-right-input__input' type="password" placeholder='*********' />
        </div>
        <Link to="/index" className='page-login-right__button'>
          <p className='page-login-right-button__text'>Sign In</p>
        </Link>
        <p className='page-login-right__noaccount'>Don’t have an account?<Link to="/signup" className='page-login-right-noaccount__link'> Sign Up </Link></p>
      </div>
    </div>
  );
}