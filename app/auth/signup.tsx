import { withFormik } from "formik";
import * as yup from "yup";
import { Link, Navigate } from "react-router-dom";
import { FaEnvelope, FaUser, FaUserAlt, FaLock } from "react-icons/fa";
import Input from "./input";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "~/page";
// Navigate


const schema = yup.object().shape({
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
    
    const initialValues = {
        FirstName: "",
    LastName: "",
    email: "",
    password: "",
    confirmPassword: "",
};
const onSubmit = (values: any, { resetForm }: any) => {
    // const {setuser} = useContext(UserContext)
    // alert(JSON.stringify(values, null, 2));
    axios
        .post("https://myeasykart.codeyogi.io/signup", {
            fullName: values.FirstName + " " + values.LastName,
            email: values.email,
            password: values.password
        })
        .then(
            (res:any) => {
                const { token } = res.data;
                // const {}
                // console.log(res);
                // console.log(token);
                localStorage.setItem("token", token);
                // setuser(token);
                return <Navigate to="/dashboard" />;
            }
        )
        .catch((err:any) => {
            console.error(err);
        });
    resetForm();
};

export function SignUp({
    handleSubmit,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting,
    resetForm,
}: any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 via-white to-orange-200 transition-all duration-700">
            <div className="bg-white/90 shadow-2xl rounded-2xl p-8 w-full max-w-md animate-fade-in-up backdrop-blur-md border border-orange-100">
                <h1 className="text-3xl font-extrabold mb-2 text-center bg-gradient-to-r from-orange-600 to-orange-400 text-transparent bg-clip-text tracking-tight transition-all duration-500">
                    Create Your Account
                </h1>
                <p className="mb-8 text-gray-500 text-center text-base font-medium animate-fade-in">
                    Join our community and unlock exclusive features.
                </p>
                <form
                    className="space-y-6"
                    onSubmit={handleSubmit}
                    autoComplete="off"
                >
                    <Input
                        value={values.FirstName}
                        error={errors.FirstName}
                        touched={touched.FirstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="FirstName"
                        type="text"
                        placeholder="First name"
                        icon={<FaUserAlt className="text-orange-400 mx-2" />}
                    />
                    <Input
                        value={values.LastName}
                        error={errors.LastName}
                        touched={touched.LastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="LastName"
                        type="text"
                        placeholder="Last name"
                        icon={<FaUser className="text-orange-400 mx-2" />}
                    />
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
                        icon={<FaLock className="text-orange-400 mx-2" />}
                    />
                    <Input
                        value={values.confirmPassword}
                        error={errors.confirmPassword}
                        touched={touched.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm password"
                        icon={<FaLock className="text-orange-400 mx-2" />}
                    />
                    <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-3">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-orange-400 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-300 disabled:opacity-60"
                        >
                            {isSubmitting ? (
                                <span className="animate-spin inline-block mr-2">&#9696;</span>
                            ) : null}
                            Sign Up
                        </button>
                        <button
                            type="button"
                            onClick={resetForm}
                            className="w-full sm:w-auto bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 hover:scale-105 transition-all duration-300"
                        >
                            Reset
                        </button>
                    </div>
                    <div className="mt-6 text-center animate-fade-in">
                        <span className="text-gray-600">Already have an account? </span>
                        <Link
                            to="/login"
                            className="text-orange-600 font-semibold hover:underline hover:text-orange-700 transition-colors duration-200"
                        >
                            Login
                        </Link>
                    </div>
                </form>
            </div>
            <style>
                {`
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(40px);}
                    100% { opacity: 1; transform: translateY(0);}
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s cubic-bezier(.4,0,.2,1) both;
                }
                .animate-fade-in {
                    animation: fade-in 1.2s cubic-bezier(.4,0,.2,1) both;
                }
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                `}
            </style>
        </div>
    );
}

// interface SignupOuterProps {
//     setuser: React.Dispatch<React.SetStateAction<any>>;
// }

const SignUpSHOC = withFormik({
    validationSchema: schema,
    handleSubmit: onSubmit,
    mapPropsToValues: () => initialValues,
});

export default SignUpSHOC(SignUp);