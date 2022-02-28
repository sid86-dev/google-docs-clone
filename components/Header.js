import React from 'react';
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'

function Header(props) {
    return (
        <header className="sticky top-0 z-50 flex item-center px-4 py-2 shadow-md bg-white">
            <div className='mt-1 flex items-center w-full'>
            <Button color="gray"
                    buttonType="outline"
                    rounded={true}
                    iconOnly={true}
                    className="h-20 w-20 border-0"
                    ripple="dark">
                <Icon name="menu" size="3xl"/>
            </Button>
            <div className="md:block mt-1 flex items-center">
                <Icon name="description" size="4xl" color="blue"/>
                <h2 className="ml-2 text-gray-700 text-2xl">
                    Docs
                </h2>
            </div>
            <div className="mx-5 md:mx-20 flex flex-grow items-center p-5 py-2 h-12 bg-gray-100 text-gray-600
             rounded-lg focus-within:shadow-md focus-within:text-gray-600 ">
                <Icon name="search" size="3xl" color="darkgray"/>
                <input type="text" placeholder="search"
                       className="flex-grow px-5 text-base bg-transparent outline-none"/>
            </div>
            <Button color="gray"
                    buttonType="outline"
                    rounded={true}
                    iconOnly={true}
                    className="ml-5 md:ml-20 h-20 w-20 border-0"
                    ripple="dark">
                <Icon name="apps" size="3xl" color="gray"/>
            </Button>

            <img loading="lazy"
                 className=" cursor-pointer h-12 w-12 rounded-full ml-2"
                 src="https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
                 alt="profile"
            />
            </div>
        </header>
    );
}

export default Header;