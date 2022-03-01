import React from 'react';
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import {useRouter} from 'next/router'


function Header({photoUrl}) {
    const router = useRouter();

    return (
        <header className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
            <Button color="gray"
                    buttonType="outline"
                    rounded={true}
                    iconOnly={true}
                    className="h-20 w-20 border-0"
                    ripple="dark">
                <Icon name="menu" size="3xl"/>
            </Button>
            <Icon name="description" size="5xl" color="blue"/>
            <h1 className="ml-2 text-gray-700 text-2xl">
                Docs
            </h1>
            <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600
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
                 src={photoUrl}
                 alt="profile"
                 onClick={() => router.push('/login')}
            />

        </header>
    );
}

export default Header;