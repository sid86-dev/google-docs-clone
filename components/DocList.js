import Icon from "@material-tailwind/react/Icon";
import React from "react";

export default function DocList (){
    return(
        <section className="bg-white px-10 md:px-5">
            <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
                <div className="flex items-center justify-between pb-5">
                    <h2 className="font-medium flex-grow">My Document</h2>
                    <p className="mr-12">Date Created</p>
                    <Icon name="folder" size="3xl" color="gray" />
                </div>
            </div>
        </section>
    );
};