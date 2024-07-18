import { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Signup.css";
import BannerImage from "../../assets/signup-banner-img.png";

const USER_REGEX = /^[A-z0-9-_]{4,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = 'http://4.211.104.91:3001/users';

export default function Signup() {
  const userRef = useRef();
  const errRef = useRef();
  const formRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  var from;
  if (location.state?.from === null) {
    from = "/";
  } else {
    from = location.state?.from.pathname || "/";
  }

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const [usersInUse, setUsersInUse] = useState([]);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
    if (usersInUse.includes(user)) {
      setValidName(false);
    }
  }, [user])

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, matchPwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    const url = REGISTER_URL;
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
        setSuccess(true);
        window.localStorage.setItem('auth', JSON.stringify({ token: responseData.token, username: user }));
        // clear input fields
        setUser('');
        setPwd('');
        setMatchPwd('');
        navigate("/index", { replace: true });
      } else {
        console.error('Request failed with status:', response.status);
        if (response.status === 400) {
          setErrMsg('Username already exists');
          setValidName(false);
          setUsersInUse([...usersInUse, user]);
        } else {
          setErrMsg('Registration failed');
        }
        setSuccess(false);
      }
    } catch (error) {
      if (!error?.response) {
        setErrMsg('Network Error');
        console.error('Network Error:', error);
      } else {
        setErrMsg("Registration failed");
        console.error('Error:', error);
      }
      errRef.current.focus();
    }
  }

  return (
    <div className="page-signup">
      <div className='page-signup__left'>
        <img src={BannerImage} alt="MatchUp Logo" className='page-signup-left__title' />
        <p className='page-signup-left__title'>Welcome Aboard</p>
        <p className='page-signup-left__text'>Just a couple of clicks and we start</p>
      </div>
      <div className='page-signup__right'>
        <p className='page-signup-right__title'>Create Account</p>
        <form ref={formRef} className='page-signup-right__form' onSubmit={handleSubmit}>
          <div className='page-signup-right__input'>
            <p className='page-signup-right-input__title'>Username</p>
            <input
              type="text"
              className='page-signup-right-input__input'
              placeholder='John Doe'
              value={user}
              onChange={(e) => setUser(e.target.value)}
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              ref={userRef}
            />
          </div>
          <div className='page-signup-right__input'>
            <p className='page-signup-right-input__title'>Email</p>
            <input
              type="email"
              className='page-signup-right-input__input'
              placeholder='exemple@gmail.com'
            />
          </div>
          <div className='page-signup-right__input'>
            <p className='page-signup-right-input__title'>Password</p>
            <input
              type="password"
              className='page-signup-right-input__input'
              placeholder='*********'
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
          </div>
          <div className='page-signup-right__input'>
            <p className='page-signup-right-input__title'>Confirm Password</p>
            <input
              type="password"
              className='page-signup-right-input__input'
              placeholder='*********'
              value={matchPwd}
              onChange={(e) => setMatchPwd(e.target.value)}
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
          </div>
          <button type="submit" className='page-signup-right__button'>
            <p className='page-signup-right-button__text'>Sign Up</p>
          </button>
          <p className='page-signup-right__noaccount'>
            Have an account?
            <Link to="/login" className='page-signup-right-noaccount__link'> Sign In </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
