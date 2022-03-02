import Icon from "@material-tailwind/react/Icon";
import React from "react";
import {useCollectionOnce, useCollection} from "react-firebase-hooks/firestore";
import {db} from "../firebase-config";
import DocumentRow from "./DocumentRow";
import Skeleton from 'react-loading-skeleton'
import Button from "@material-tailwind/react/Button";
import 'react-loading-skeleton/dist/skeleton.css'


export default function DocList({email}) {

    const [snapshot, loadingSnapshot] = useCollection(
        db.collection("userDocs")
            .doc(email)
            .collection('docs')
            .orderBy('timestamp', 'desc'));

    return (
        <section className="bg-white px-10 md:px-5 mb-10">
            <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
                <div className="flex items-center justify-between pb-5">
                    <h2 className="font-medium flex-grow">My Document</h2>
                    <p className="mr-12">Date Created</p>
                    <Icon name="folder" size="3xl" color="gray"/>
                </div>

                {loadingSnapshot? <> <div className="flex items-center p-4  rounded-lg hover:bg-gray-100 text-gray-700 text-sm cursor-pointer">
                    <Icon name="article" size="3xl" color="blue"/>
                    <p className="flex-grow pl-5 w-10 pr-10 truncate"><Skeleton/></p>
                    <p className="pr-5 text-sm"><Skeleton/></p>
                    <Button color="gray" buttonType="outline" rounded={true} iconOnly={true} ripple="dark" className="border-0">
                        <Icon name="more_vert" size="3xl" /></Button>
                </div>
                        <div className="flex items-center p-4  rounded-lg hover:bg-gray-100 text-gray-700 text-sm cursor-pointer">
                    <Icon name="article" size="3xl" color="blue"/>
                    <p className="flex-grow pl-5 w-10 pr-10 truncate"><Skeleton/></p>
                    <p className="pr-5 text-sm"><Skeleton/></p>
                    <Button color="gray" buttonType="outline" rounded={true} iconOnly={true} ripple="dark" className="border-0">
                        <Icon name="more_vert" size="3xl" /></Button>
                </div>

                </>
                    : snapshot?.docs.map(doc => (
                    <DocumentRow key={doc.id}
                                 id={doc.id}
                                 fileName={doc.data().fileName}
                                 date={doc.data().timestamp}
                    />))}
            </div>
        </section>
    );
};