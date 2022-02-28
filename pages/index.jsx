import Header from "../components/Header";
import CreateNew from "../components/CreateNew";
import DocList from "../components/DocList";
import Icon from "@material-tailwind/react/Icon";
import React from "react";

function Home() {
    return (
        <>
            <Header/>
            <CreateNew/>
             <DocList/>
        </>

    )
}

export default Home;