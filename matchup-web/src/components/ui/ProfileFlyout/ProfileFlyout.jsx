import { useState } from 'react';
import { Button } from '../Button/Button';

export default function ProfileFlyout({ ...props }) {
    const [isOpen, setIsOpen] = useState(false);
    const fakeUser = {
        username: "John Doe",
        name: "John",
        surname: "Doe",
        email: "fakeEmail@gmail.com",
        phone: "1234567890",
    }

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
                    <div>
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
                            <p>{fakeUser.email}</p>
                        </div>
                        <div className="flex gap-2">
                            <h3>Phone:</h3>
                            <p>{fakeUser.phone}</p>
                        </div>
                    </div>
                    <Button variant="default" size="default" className="w-full">
                        Profile
                    </Button>
                    <Button variant="default" size="default" className="w-full">
                        Logout
                    </Button>
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
}