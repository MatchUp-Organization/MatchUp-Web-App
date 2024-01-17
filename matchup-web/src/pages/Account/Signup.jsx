import { useRef, useState, useEffect } from "react";
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import InfoIcon from '@mui/icons-material/Info';

const USER_REGEX = /^[A-z0-9-_]{4,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function Signup() {
  const userRef = useRef();
  const errRef = useRef();
  const formRef = useRef();

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

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user])

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, matchPwd])

  const handleButtonClick = async () => {
    //formRef.current.submit();

    const url = 'http://localhost:3001/users';
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
      await sleep(5000);
      if (response.ok) {
        const responseData = await response.json();
        console.log('response success : ' + responseData);
      } else {
        console.error('Request failed with status:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    const url = 'http://localhost:3001/users';
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
      await sleep(5000);
      if (response.ok) {
        const responseData = await response.json();
        console.log('response success : ' + responseData);
      } else {
        console.error('Request failed with status:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="signup-form">
      <h1>Signup</h1>
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
              Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
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
        <button onClick={handleButtonClick} disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
      </form>
    </div>
  )
}
