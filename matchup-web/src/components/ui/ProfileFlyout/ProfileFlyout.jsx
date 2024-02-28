import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../Button/Button';
import useAuth from '../../../hooks/useAuth';

export default function ProfileFlyout({ ...props }) {
  const [isOpen, setIsOpen] = useState(false);
  const { auth, setAuth } = useAuth();
  const location = useLocation();

  const fakeUser = {
    username: "John Doe",
    name: "John",
    surname: "Doe",
    email: "fakeEmail@gmail.com",
    phone: "1234567890",
  }

  const logout = () => {
    localStorage.removeItem('auth');
    setAuth({});
  }

  //read local storage for token
  useEffect(() => {
    const data = localStorage.getItem('auth');
    console.log('data: ', data);
    if (data) {
      const parsedData = JSON.parse(data);
      console.log('parsedData: ', parsedData);
      setAuth({ token: parsedData.token, username: parsedData.username });
    }
  }, []);

  if (auth?.username) {
    if (isOpen) {
      return (
        <div className="profile-flyout group inline-block">
          <a onClick={() => setIsOpen(false)}>
            {props.children}
          </a>
          <div className="absolute top-0 right-0 z-10 min-w-64 mt-12 transform origin-top-right bg-gray-100 border-2 border-gray-200">
            <h2 className="text-center text-2xl font-bold">
              {fakeUser.username}
            </h2>
            <div className='flex flex-col divide-y-2 divide-highlight p-2'>
              <div className="flex gap-2">
                <h3>Name:</h3>
                <p>{fakeUser.name}</p>
              </div>
              <div className="flex gap-2">
                <h3>Surname:</h3>
                <p>{fakeUser.surname}</p>
              </div>
              <div className="flex gap-2">
                <h3>Email:</h3>
                <p>{auth.username}</p>
              </div>
              <div className="flex gap-2">
                <h3>Phone:</h3>
                <p>{fakeUser.phone}</p>
              </div>
            </div>
            <div className='flex flex-col gap-2 p-2'>
              <Button variant="default" size="default" className="w-full">
                Profile
              </Button>
              <Button variant="default" size="default" className="w-full" onClick={logout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <a onClick={() => setIsOpen(true)}>
          {props.children}
        </a>
      )
    }
  } else {
    return (
      <Link to="/login" state={{ from: location }}>
        {props.children}
      </Link>
    )
  }
}