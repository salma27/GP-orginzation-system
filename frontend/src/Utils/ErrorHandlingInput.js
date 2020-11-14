const ErrorHandlingInput = ({
    label,
    error,
    type,
    name,
    value,
    onChange,
    className,
}) => {
    return (
        <>
            {/* Put input label here if no label do not render label */}
            {label && <label>{label}</label>}
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                className={className}
            />
            {error && <label>{error}</label>}
        </>
    );
};
export default ErrorHandlingInput;