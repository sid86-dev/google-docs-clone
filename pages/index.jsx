import Header from "../components/Header";
import CreateNew from "../components/CreateNew";
import DocList from "../components/DocList";
import Login from "../components/Login";
import React from "react";
import { getCookie } from 'cookies-next';


function Home() {

    const email = getCookie('email');
    const photoUrl = getCookie('photoUrl');

    if (email===undefined) return <Login/>;

    return (
        <>
            <Header photoUrl={photoUrl}/>
            <CreateNew/>
            <DocList/>
        </>

    )
}

export default Home;