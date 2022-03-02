import React, {useState} from 'react';
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
import Model from "@material-tailwind/react/Modal";
import ModelBody from "@material-tailwind/react/ModalBody";
import ModelFooter from "@material-tailwind/react/ModalFooter";

function Doc(props) {
    const email = getCookie('email');
    const photoUrl = getCookie('photoUrl');

    const router = useRouter();
    const {id} = router.query;

    const [snapshot, loadingSnapshot] = useDocumentOnce(db.collection('userDocs').doc(email).collection('docs').doc(id))

    if (!loadingSnapshot && !snapshot?.data()?.fileName) {
        router.replace('/');
    }
    
    const deleteDoc = async () => {
        await db.collection('userDocs').doc(email).collection('docs').doc(id).delete();
        setShowModel(false);
        router.push('/');
    };

    const [showModel, setShowModel] = useState(false);

    const model = (
        <Model size="sm"
               active={showModel}
               toggler={() => setShowModel(false)}

        >
            <ModelBody>
                <p className="outline-none w-full">Are you sure to delete</p>

            </ModelBody>
            <ModelFooter>
                <Button color='gray'
                        buttonType='link'
                        onClick={(e) => setShowModel(false)}
                        ripple='dark'>Cancel</Button>
                <Button color='red' onClick={deleteDoc} ripple='light'>Delete</Button>
            </ModelFooter>
        </Model>
    );

    // if user is logged in
    if (email === undefined) return <Login/>;
    return (
        <>
            <header className="flex justify-between items-center p-3 pb-1">
                <span onClick={() => router.push('/')} className="cursor-pointer flex items-center mx-2">
                     <Icon name="description" size="5xl" color="blue"/>
            <h1 className="ml-2 text-gray-700 text-2xl">
                Docs
            </h1>
                </span>
                <div className="flex-grow px-2">
                    {loadingSnapshot ? <Skeleton width='15%'/> :
                        <h2 className="ml-1">{snapshot?.data()?.fileName}</h2>}
                    <div className="flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600">
                        <p className="option">File</p>
                        <p className="option">Edit</p>
                        <p className="option">View</p>
                        <p className="option">Insert</p>
                        <p className="option" onClick={() => setShowModel(true)}>Delete</p>
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
            {model}
        </>
    )
        ;
}

export default Doc;

