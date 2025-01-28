import React from "react";

interface IButtonLoginProps {
    children?: React.ReactNode;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({ children, onClick, type }) => {
    return (
        <button type={type} onClick={onClick}>
            {children}
        </button>
    )
}