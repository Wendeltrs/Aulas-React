import React from "react";

interface IIinputLoginProps {
    label: string;
    value: string;
    type?: string;
    onChange: (newValue: string) => void;
    onPressEnter?: () => void;
}

export const InputLogin = React.forwardRef<HTMLInputElement, IIinputLoginProps>((props, ref) => {    
    return (
        <label htmlFor="">
            <span>{props.label}</span>
            <input 
                ref={ref}
                type={props.type ?? "text"} 
                onChange={e => props.onChange(e.target.value)}
                onKeyDown={e => e.key === "Enter"
                    ? props.onPressEnter && props.onPressEnter() 
                    : null}
            />
        </label>
    )
})