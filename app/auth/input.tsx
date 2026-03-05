import { useField } from "formik"

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

export default function ({ name, icon, type, placeholder, value, error, touched, onChange, onBlur }: InputProps) {
    // const [field, meta] = useField(name)
    // const { value, onChange, onBlur } = field
    // const { error, touched } = meta
    return (
        <div>
            <label htmlFor={name} className="sr-only block text-sm font-medium text-gray-700 mb-1">
                {name.replace("-", " ")}
            </label>
            <div className="flex items-center border border-gray-300 rounded">
                {icon}
                <input
                    id={name}
                    name={name}
                    type={type}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    defaultValue={value}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    required
                />
            </div>
            {touched && error && (
                <div className="text-red-500 text-sm mt-1">{error}</div>
            )}
        </div>
    )
} 