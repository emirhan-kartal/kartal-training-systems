import React from "react";

const Input = ({ label, value, onChange, className, placeholder,type="text"}) => {

    
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={"w-full border-gray-200 border-2 rounded-sm p-2 " + className}
        />
    );
};

export default Input;
