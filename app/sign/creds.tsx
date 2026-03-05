import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { FaEnvelope, FaKey, FaUser, FaUserAlt } from "react-icons/fa";

export function Login() {
    const validationSchema = yup.object().shape({
        email: yup.string().email("Invalid email").required("Email is required"),
        password: yup
            .string()
            .min(8, "Password must be at least 8 characters")
            .max(12, "Password must be at most 12 characters")
            .required("Password is required"),
    });

    const {
        handleSubmit,
        handleChange,
        values,
        resetForm,
        errors,
        touched,
        isValid,
        dirty,
        handleBlur,
    } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema,
        validateOnBlur: true,
        validateOnChange: false,
        validateOnMount: false,
    });

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center bg-orange-600 text-white py-3 rounded-t-lg">
                    Login
                </h1>
                <p className="mb-6 text-gray-600 text-center">
                    Please enter your credentials to log in.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="email" className="sr-only block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <div className="flex items-center border border-gray-300 rounded">
                            <FaUser className="text-gray-400 mx-2" />
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Enter your email"
                                value={values.email}
                                className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                autoComplete="email"
                                required
                            />
                            {touched.email && errors.email && (
                                <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                            )}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <div className="flex items-center border border-gray-300 rounded">
                            <FaKey className="text-gray-400 mx-2" />
                            <input
                                id="password"
                                name="password"
                                type="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Enter your password"
                                value={values.password}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                autoComplete="current-password"
                                required
                            />
                            {touched.password && errors.password && (
                                <div className="text-red-500 text-sm mt-1">{errors.password}</div>
                            )}
                        </div>
                    </div>
                    <Link to="/forgot-password" className="text-sm text-orange-600 hover:underline">
                        Forgot password?
                    </Link>
                    <div className="flex justify-between items-center mt-6">
                        <button
                            type="submit"
                            disabled={!isValid && !dirty}
                            className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            onClick={() => resetForm()}
                            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
                        >
                            Reset
                        </button>
                    </div>
                    <div className="mt-4 text-center">
                        <span className="text-gray-600">Don't have an account? </span>
                        <Link to="/signup" className="text-orange-600 hover:underline">
                            Sign Up
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}





export function SignUp() {
    const validationSchema = yup.object().shape({
        FirstName: yup.string().required("First name is required"),
        LastName: yup.string().required("Last name is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        password: yup
            .string()
            .min(8, "Password must be at least 8 characters")
            .max(12, "Password must be at most 12 characters")
            .required("Password is required"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password")], "Passwords must match")
            .required("Confirm password is required"),
    });

    const {
        handleSubmit,
        handleChange,
        values,
        resetForm,
        errors,
        touched,
        isValid,
        dirty,
        handleBlur,
    } = useFormik({
        initialValues: {
            FirstName: "",
            LastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema,
        validateOnBlur: true,
        validateOnChange: false,
        validateOnMount: false,
    });

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center bg-orange-600 text-white py-3 rounded-t-lg">
                    Sign Up
                </h1>
                <p className="mb-6 text-gray-600 text-center">
                    Create your account to get started.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="FirstName" className="sr-only block text-sm font-medium text-gray-700 mb-1">
                            First Name
                        </label>
                        <div className="flex items-center border border-gray-300 rounded">
                            <FaUser className="text-gray-400 mx-2" />
                            <input
                                id="FirstName"
                                name="FirstName"
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Enter your first name"
                                value={values.FirstName}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                required
                            />
                        </div>
                        {touched.FirstName && errors.FirstName && (
                            <div className="text-red-500 text-sm mt-1">{errors.FirstName}</div>
                        )}
                    </div>
                    <div>
                        <label htmlFor="LastName" className="sr-only block text-sm font-medium text-gray-700 mb-1">
                            Last Name
                        </label>
                        <div className="flex items-center border border-gray-300 rounded">
                            <FaUser className="text-gray-400 mx-2" />
                            <input
                                id="LastName"
                                name="LastName"
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Enter your last name"
                                value={values.LastName}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="sr-only block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <div className="flex items-center border border-gray-300 rounded">
                            <FaEnvelope className="text-gray-400 mx-2" />
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Enter your email"
                                value={values.email}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                autoComplete="email"
                                required
                            />
                        </div>
                        {touched.email && errors.email && (
                            <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                        )}
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <div className="flex items-center border border-gray-300 rounded">
                            <FaKey className="text-gray-400 mx-2" />
                            <input
                                id="password"
                                name="password"
                                type="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Enter your password"
                                value={values.password}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                autoComplete="new-password"
                                required
                            />
                        </div>
                        {touched.password && errors.password && (
                            <div className="text-red-500 text-sm mt-1">{errors.password}</div>
                        )}
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="sr-only block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <div className="flex items-center border border-gray-300 rounded">
                            <FaKey className="text-gray-400 mx-2" />
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Confirm your password"
                                value={values.confirmPassword}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                autoComplete="new-password"
                                required
                            />
                        </div>
                        {touched.confirmPassword && errors.confirmPassword && (
                            <div className="text-red-500 text-sm mt-1">{errors.confirmPassword}</div>
                        )}
                    </div>
                    <div className="flex justify-between items-center mt-6">
                        <button
                            type="submit"
                            disabled={!isValid && !dirty}
                            className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Sign Up
                        </button>
                        <button
                            type="button"
                            onClick={() => resetForm()}
                            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
                        >
                            Reset
                        </button>
                    </div>
                    <div className="mt-4 text-center">
                        <span className="text-gray-600">Already have an account? </span>
                        <Link to="/login" className="text-orange-600 hover:underline">
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}





export function ForgotPassword() {
    const validationSchema = yup.object().shape({
        email: yup.string().email("Invalid email").required("Email is required"),
    });

    const {
        handleSubmit,
        handleChange,
        values,
        resetForm,
        errors,
        touched,
        isValid,
        dirty,
        handleBlur,
    } = useFormik({
        initialValues: {
            email: "",
        },
        onSubmit: (values) => {
            alert(`Password reset link sent to: ${values.email}`);
        },
        validationSchema,
        validateOnBlur: true,
        validateOnChange: false,
        validateOnMount: false,
    });

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center bg-orange-600 text-white py-3 rounded-t-lg">
                    Reset Password
                </h1>
                <p className="mb-6 text-gray-600 text-center">
                    Enter your email to receive a password reset link.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="email" className="sr-only block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <div className="flex items-center border border-gray-300 rounded">
                            <FaEnvelope className="text-gray-400 mx-2" />
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Enter your email"
                                value={values.email}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                autoComplete="email"
                                required
                            />
                        </div>
                        {touched.email && errors.email && (
                            <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                        )}
                    </div>
                    <div className="flex justify-between items-center mt-6">
                        <button
                            type="submit"
                            disabled={!isValid && !dirty}
                            className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Send Reset Link
                        </button>
                        <button
                            type="button"
                            onClick={() => resetForm()}
                            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
                        >
                            Reset
                        </button>
                    </div>
                    <div className="mt-4 text-center">
                        <Link to="/login" className="text-orange-600 hover:underline">
                            Back to Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}