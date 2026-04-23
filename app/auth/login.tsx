import { withFormik } from "formik";
import * as yup from "yup";
import { Link, Navigate } from "react-router-dom";
import { FaEnvelope, FaKey } from "react-icons/fa";
import Input from "./input";
import { useRef } from "react";
import axios from "axios";

const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(12, "Password must be at most 12 characters")
        .required("Password is required"),
});

const initialValues = {
    email: "",
    password: "",
};

const onSubmit = (values: any, bag: any) => {
    // fetch("https://dummyjson.com/auth/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ username: 'emilys', password: 'emilyspass' })
    // })
    // .then((res) => {
    //     res.json().then((data) => {
    //         const { firstName, accessToken } = data;
    //         localStorage.setItem("token", accessToken);
    //         bag.props.setuser(firstName);
    //     });
    // })
    // .catch(console.error);
    axios
    .post("https://myeasykart.codeyogi.io/login", {
        email: values.email,
        password: values.password
    })
    .then(
        (res:any) => {
            const { user, token } = res.data;
            // const {}
            // console.log(res);
            // console.log(token);
            localStorage.setItem("token", token);
            bag.props.setuser(token);
            return <Navigate to="/dashboard"/>;
        }
    )
    .catch((err:any) => {
        console.error(err);
    });
}

export function Login({
    handleSubmit,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting,
    resetForm,
}: any) {
    const formRef = useRef<HTMLFormElement>(null);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 via-white to-orange-200 transition-colors duration-700">
            <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md animate-fade-in-up">
                <h1 className="text-3xl font-extrabold mb-4 text-center bg-gradient-to-r from-orange-600 to-orange-400 text-white py-4 rounded-t-2xl shadow-md tracking-wide transition-all duration-500">
                    Welcome Back
                </h1>
                <p className="mb-8 text-gray-500 text-center text-lg animate-fade-in">
                    Sign in to your account to continue
                </p>
                <form
                    ref={formRef}
                    className="space-y-6 animate-fade-in-up"
                    onSubmit={handleSubmit}
                >
                    <Input
                        value={values.email}
                        error={errors.email}
                        touched={touched.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="email"
                        type="email"
                        placeholder="Email address"
                        icon={<FaEnvelope className="text-orange-400 mx-2" />}
                    />
                    <Input
                        value={values.password}
                        error={errors.password}
                        touched={touched.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="password"
                        type="password"
                        placeholder="Password"
                        icon={<FaKey className="text-orange-400 mx-2" />}
                    />

                    <div className="flex justify-between items-center">
                        <Link
                            to="/forgot-password"
                            className="text-sm text-orange-500 hover:underline transition-colors duration-200"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    <div className="flex justify-between items-center mt-6 gap-2">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg shadow hover:scale-105 hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:opacity-60"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                    </svg>
                                    Logging in...
                                </span>
                            ) : (
                                "Login"
                            )}
                        </button>
                        <button
                            type="button"
                            onClick={() => resetForm()}
                            className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-200 hover:scale-105 transition-all duration-200"
                        >
                            Reset
                        </button>
                    </div>
                    <div className="mt-6 text-center animate-fade-in">
                        <span className="text-gray-600">Don't have an account? </span>
                        <Link
                            to="/signup"
                            className="text-orange-600 font-semibold hover:underline transition-colors duration-200"
                        >
                            Sign Up
                        </Link>
                    </div>
                </form>
            </div>
            {/* Animations */}
            <style>{`
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(40px);}
                    100% { opacity: 1; transform: translateY(0);}
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.7s cubic-bezier(.39,.575,.565,1) both;
                }
                @keyframes fade-in {
                    0% { opacity: 0;}
                    100% { opacity: 1;}
                }
                .animate-fade-in {
                    animation: fade-in 1.2s ease both;
                }
            `}</style>
        </div>
    );
}

interface LoginOuterProps {
    setuser: React.Dispatch<React.SetStateAction<any>>;
}

const LoginSHOC = withFormik<LoginOuterProps, typeof initialValues>({
    validationSchema: schema,
    handleSubmit: onSubmit,
    mapPropsToValues: () => initialValues,
});
export default LoginSHOC(Login);
