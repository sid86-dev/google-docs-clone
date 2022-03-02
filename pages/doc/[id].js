import React from 'react';
import {getCookie} from "cookies-next";
import Login from "../../components/Login";
import Icon from "@material-tailwind/react/Icon";
import {useRouter} from "next/router";
import {useDocumentOnce} from "react-firebase-hooks/firestore";
import {db} from "../../firebase-config";
import Button from "@material-tailwind/react/Button";
import TextEditor from "../../components/TextEditor";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Doc(props) {
    const email = getCookie('email');
    const photoUrl = getCookie('photoUrl');

    const router = useRouter();
    const {id} = router.query;

    const [snapshot, loadingSnapshot] = useDocumentOnce(db.collection('userDocs').doc(email).collection('docs').doc(id))

    if (!loadingSnapshot && !snapshot?.data()?.fileName) {
        router.replace('/');
    }

    // if user is logged in
    if (email === undefined) return <Login/>;
    return (
        <>
            <header className="flex justify-between items-center p-3 pb-1">
                <span onClick={() => router.push('/')} className="cursor-pointer">
                    <Icon name="description" size="5xl" color="blue"/>
                </span>
                <div className="flex-grow px-2">
                    {loadingSnapshot? <Skeleton width='15%'/> :
                    <h2>{snapshot?.data()?.fileName}</h2>}
                    <div className="flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600">
                        <p className="option">File</p>
                        <p className="option">Edit</p>
                        <p className="option">View</p>
                        <p className="option">Insert</p>
                        <p className="option">Format</p>
                        <p className="option">Tools</p>
                    </div>
                </div>
                <Button color="lightBlue"
                        buttonType="filled"
                        rounded={false}
                        iconOnly={false}
                        block={false}
                        siz="regular"
                        className="hidden md:!inline-flex h-10"
                        ripple="light">
                    <Icon name="people" size="md"/>SHARE
                </Button>
                <img className="rounded-full cursor-pointer h-10 w-10 ml-2"
                     alt="profilePic"
                     src={photoUrl}
                     onClick={() => router.push('/login')}/>
            </header>

            <TextEditor email={email} id={id}/>
        </>
    )
        ;
}

export default Doc;

