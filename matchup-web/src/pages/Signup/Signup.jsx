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
    userRef.current.focus();
  }, [])

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
    <div className="signup-container">
      <div className="signup-side-panel">
        <img src={BannerImage} alt="signup banner" className="mb-10" />
        <h2 className="text-4xl my-4">Matchup</h2>
        <p>Matchup is a platform for creating and managing sports events.</p>
        <p>Sign up to create and join events.</p>
      </div>
      <div className="signup-form">
        <h1 className="text-4xl mb-3">Signup</h1>
        {success ? (
          <section>
            <h2>Success!</h2>
            <p>Your account has been created.</p>
            <p>
              <Link to="/login" state={{ from: location.state ? location.state.from : null }}>Click here to login</Link>
            </p>
          </section>
        ) : (
          <div>
            <div ref={errRef} className="error-message">
              <p>{errMsg}</p>
            </div>
            <form className="account-form" ref={formRef} onSubmit={handleSubmit}>
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
                    Letters, numbers, underscores, hyphens allowed. <br />
                    Must not be in use.
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

              <div className="form-input-area">
                <label htmlFor="confirm_pwd">
                  Confirm Password:
                  <CheckIcon style={validMatch && matchPwd ? { color: "green" } : { display: "none" }} />
                  <CloseIcon style={validMatch || !matchPwd ? { display: "none" } : { color: "red" }} />
                </label>
                <input
                  type="password"
                  id="confirm_pwd"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  value={matchPwd}
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                />
                <div id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "hide"}>
                  <InfoIcon />
                  <p className="info-text-container">
                    Must match the first password input field.
                  </p>
                </div>
              </div>
              <button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
            </form>
            <div className="account-feature-swapper">
              Already have an account?
              <span className="line">
                <Link to="/login" state={{ from: location.state ? location.state.from : null }}>
                  <Button variant="default" size="default">
                    Click Here
                  </Button>
                </Link>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
