import React, {useEffect, useState} from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import dynamic from "next/dynamic";
import {EditorState, convertToRaw, convertFromRaw} from 'draft-js'
import {db} from "../firebase-config";
import {useDocumentOnce} from "react-firebase-hooks/firestore";

const Editor = dynamic(() => import('react-draft-wysiwyg').then(module => module.Editor), {
        ssr: false,
    }
);

function TextEditor({email, id}) {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    // db
    const[snapshot] = useDocumentOnce(db.collection('userDocs').doc(email).collection('docs').doc(id));

    useEffect(()=>{
        if(snapshot?.data()?.editorState){
            setEditorState(EditorState.createWithContent(convertFromRaw(snapshot?.data()?.editorState)
            )
            );
        }
    },[snapshot]);

    const onEditorStateChange = (editorState) => {
      setEditorState(editorState);

      db.collection('userDocs').doc(email).collection('docs').doc(id).set({
      editorState: convertToRaw(editorState.getCurrentContent())
      }, {merge:true})
    };

    return (
        <div className="bg-[#F8F9FA] min-h-screen pb-16">
            <Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
                editorClassName="mt-6 bg-white shadow-lg max-w-6xl mx-auto mb-12 border p-10"
            />
        </div>
    );
}

export default TextEditor;