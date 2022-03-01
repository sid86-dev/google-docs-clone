import Icon from "@material-tailwind/react/Icon";
import React from "react";
import {useCollectionOnce} from "react-firebase-hooks/firestore";
import {db} from "../firebase-config";
import DocumentRow from "./DocumentRow";
import {useRouter} from "next/router";

export default function DocList({email}) {
    const router = useRouter();

    const [snapshot] = useCollectionOnce(
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
                {snapshot?.docs.map(doc => (
                    <DocumentRow key={doc.id}
                                 id={doc.id}
                                 fileName={doc.data().fileName}
                                 date={doc.data().timestamp}
                    />))}
            </div>
        </section>
    );
};