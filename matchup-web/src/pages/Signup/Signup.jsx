import { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import InfoIcon from '@mui/icons-material/Info';
import "./Signup.css";
import { Button } from "../../components/ui/Button/Button";
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
        navigate(from, { replace: true });
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
        <div className='page-signup-right__input'>
          <p className='page-signup-right-input__title'>Username</p>
          <input className='page-signup-right-input__input' type="text" placeholder='John Doe' />
        </div>
        <div className='page-signup-right__input'>
          <p className='page-signup-right-input__title'>Email</p>
          <input className='page-signup-right-input__input' type="text" placeholder='exemple@gmail.com' />
        </div>
        <div className='page-signup-right__input'>
          <p className='page-signup-right-input__title'>Password</p>
          <input className='page-signup-right-input__input' type="password" placeholder='*********' />
        </div>
        <div className='page-signup-right__input'>
          <p className='page-signup-right-input__title'>Confirm Password</p>
          <input className='page-signup-right-input__input' type="password" placeholder='*********' />
        </div>
        <Link to="/index" className='page-signup-right__button'>
          <p className='page-signup-right-button__text'>Sign In</p>
        </Link>
        <p className='page-signup-right__noaccount'>Have an account?<Link to="/login" className='page-signup-right-noaccount__link'> Sign In </Link></p>
      </div>
    </div>
  )
}
