import React from "react";

const Card = (props) => {
    return (
        <div className={`w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ${props.className}`}>
            {props.children}
        </div>
    );
}

export default Card;