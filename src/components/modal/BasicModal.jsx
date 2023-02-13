import React from "react";
import ReactDOM from 'react-dom';

import Card from "../ui/Card";
import Backdrop from "./Backdrop";
import Button from "../ui/Button";

const BasicModal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop')
            )}
            {ReactDOM.createPortal(
                <Card className="fixed w-4/5 overflow-hidden left-[10%] right-[10%] top-[10%] bottom-[10%] z-[98]" >
                    <header className="m-0 text-black dark:text-white">
                        <h2>{props.title}</h2>
                    </header>
                    <div className="p-4">
                        <p className="text-black dark:text-white">{props.message}</p>
                    </div>
                    <footer className="p-4 flex justify-end">
                        <Button onClick={props.onConfirm}>Okay</Button>
                    </footer>
                </Card>,
                document.getElementById('overlay')
            )}
        </>
    );
}

export default BasicModal;