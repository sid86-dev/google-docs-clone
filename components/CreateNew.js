import React from 'react';
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Image from "next/image";

function CreateNew(props) {
    return (
        <section className="bg-[#F8F9FA] pb-10 px-10">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-between py-1">
                    <h2 className="text-gray-700 text-lg">Start a new Document</h2>
                    <Button color="gray"
                            buttonType="outline"
                            rounded={true}
                            iconOnly={true}
                            className="h-20 w-20 border-0"
                            ripple="dark">
                        <Icon name="more_vert" size="3xl"/>
                    </Button>
                </div>
                <div >
                    <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700">
                        <Image src="https://i.ibb.co/6vFWZsz/Screenshot-2022-03-01-022728.png" layout="fill"/>
                    </div>
                    <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">Blank</p>
                </div>
            </div>
        </section>

    );
}

export default CreateNew;