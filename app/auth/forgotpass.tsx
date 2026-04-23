import { withFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import Input from "./input";

const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
});

const initialValues = {
    email: "",
};

const onSubmit = (values: any, { setSubmitting, resetForm }: any) => {
    setSubmitting(true);
    setTimeout(() => {
        alert(`Password reset link sent to: ${values.email} if there's an account with that email.`);
        setSubmitting(false);
        resetForm();
    }, 1200);
};

export function ForgotPassword({
    handleSubmit,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting,
    resetForm,
    isValid,
    dirty,
}: any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 via-white to-orange-200 transition-colors duration-700">
            <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md animate-fadeInUp">
                <h1 className="text-3xl font-extrabold mb-4 text-center bg-gradient-to-r from-orange-600 to-orange-400 text-white py-4 rounded-t-2xl shadow-md tracking-wide transition-all duration-500">
                    Reset Your Password
                </h1>
                <p className="mb-6 text-gray-600 text-center text-base animate-fadeIn">
                    Enter your email address and we’ll send you a link to reset your password.
                </p>
                <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
                    <Input
                        value={values.email}
                        error={errors.email}
                        touched={touched.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        icon={<FaEnvelope className="text-orange-400 mx-2 transition-transform duration-300 group-focus-within:scale-110" />}
                    />
                    <div className="flex justify-between items-center mt-8 gap-2">
                        <button
                            type="submit"
                            disabled={isSubmitting || !isValid || !dirty}
                            className={`bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:scale-105 hover:from-orange-700 hover:to-orange-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:opacity-50 disabled:cursor-not-allowed flex-1`}
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                                    </svg>
                                    Sending...
                                </span>
                            ) : (
                                "Send Reset Link"
                            )}
                        </button>
                        <button
                            type="button"
                            onClick={() => resetForm()}
                            className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-semibold shadow hover:bg-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-200 flex-1"
                        >
                            Reset
                        </button>
                    </div>
                    <div className="mt-6 text-center animate-fadeIn">
                        <Link
                            to="/login"
                            className="text-orange-600 hover:underline hover:text-orange-700 transition-colors duration-200 font-medium"
                        >
                            &larr; Back to Login
                        </Link>
                    </div>
                </form>
            </div>
            <style>
                {`
                @keyframes fadeInUp {
                    0% { opacity: 0; transform: translateY(40px);}
                    100% { opacity: 1; transform: translateY(0);}
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1);
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fadeIn {
                    animation: fadeIn 1.2s ease;
                }
                `}
            </style>
        </div>
    );
}

const resetPassSHOC = withFormik({
    validationSchema: schema,
    handleSubmit: onSubmit,
    mapPropsToValues: () => initialValues,
    validateOnMount: true,
});

export default resetPassSHOC(ForgotPassword);
