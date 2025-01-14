import React from "react";
import "./Button.css";

const Button = ({
    width = "",
    label = "",
    type = "",
    height = "",
    borderRadius = "",
    value = "",
    onChange = () => {},
    onClick = () => {},
    className = "",
    error = "",
    id = "btn",
}) => {
    return (
        <>
            <button
                value={value}
                onChange={onChange}
                onClick={onClick}
                className={className}
                type={type}
                id={id}
                style={{
                    width: width,
                    height: height,
                    borderRadius: borderRadius,
                }}
            >
                {label}
            </button>
            {error && <label>{error}</label>}
        </>
    );
};
export default Button;
