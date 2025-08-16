import { useField } from "formik";

type InputProps = {
    name: string;
    icon?: React.ReactNode;
    type?: string;
    placeholder?: string;
    value?: string;
    error?: string;
    touched?: string;
    onChange?: any;
    onBlur?: any;
};

export default function Input({
    name,
    icon,
    type = "text",
    placeholder,
    value,
    error,
    touched,
    onChange,
    onBlur,
}: InputProps) {
    return (
        <div className="w-full max-w-md mx-auto mb-4">
            <label
                htmlFor={name}
                className="block text-sm font-semibold text-gray-700 mb-1 capitalize"
            >
                {name.replace("-", " ")}
            </label>
            <div
                className={`
                    flex items-center bg-white border transition-all duration-300
                    ${error && touched ? "border-red-400 shadow-md" : "border-gray-300"}
                    rounded-lg px-3 py-2
                    focus-within:ring-2 focus-within:ring-orange-400
                    hover:shadow-lg
                `}
            >
                {icon && (
                    <span className="mr-2 text-gray-400 transition-colors duration-300 group-focus-within:text-orange-400">
                        {icon}
                    </span>
                )}
                <input
                    id={name}
                    name={name}
                    type={type}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    defaultValue={value}
                    className={`
                        w-full bg-transparent outline-none border-none
                        text-gray-800 placeholder-gray-400
                        transition-all duration-300
                        focus:placeholder-orange-300
                        text-base
                    `}
                    required
                    autoComplete="off"
                />
            </div>
            <div
                className={`
                    min-h-[1.5rem] transition-all duration-300
                    ${error && touched ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
                `}
            >
                {touched && error && (
                    <span className="block text-red-500 text-xs animate-fadeIn">
                        {error}
                    </span>
                )}
            </div>
        </div>
    );
}